import { RegionDto } from "@/api/dto/user/region.dto";
import { regionService } from "@/api/region/region";
import HeaderBar from "@/components/header-bar";
import RegionDropDownBox from "@/components/region-drop-box";
import userStore from "@/store/user-store";
import { Button, Chip, TextField } from "@mui/material";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { magazineService } from "@/api/magazine/magazine";
import { useRouter } from "next/router";
import magazineEditStore from "@/store/magazine-edit-store";
import { regionDefault } from "@/const/dummy";
import { UploadImageResDto } from "@/api/dto/magazine/upload-image-res.dto";

const WysiwygEditor = dynamic(() => import("@/components/post-editor"), {
  ssr: false,
});

export default function MagazineEdit() {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState<{
    id: string;
    name: string;
    imageUrl: string | null;
  } | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [curTag, setCurTag] = useState("");
  const [newTags, setNewTags] = useState<string[]>([]);
  const [newRegionId, setNewRegionId] = useState(
    "9575b497-f677-4b4a-94fa-1de79763e035"
  );
  const [regions, setRegions] = useState<RegionDto[]>([]);
  const [isPress, setIsPress] = useState(false);
  const [images, setImages] = useState<UploadImageResDto[]>([]);
  const editorRef = useRef<any>(null);
  const [defaultRegion, setDefaultRegion] = useState<RegionDto>(regionDefault);
  let language = "ko-KR";
  const { magazineId, title, regionId, content, tags, reset } = magazineEditStore();

  const showContent = () => {
    if (editorRef.current) {
      const editorIns = editorRef.current.getInstance();
      const contentHtml = editorIns.getHTML();
      return contentHtml;
    } else {
      return "";
    }
  };

  const onUploadImage = (image: Blob, callback: any) => {
    magazineService.uploadImage(image).then((data)=> {
      if(data) {
        console.log(data.id);
        images.push(data);
        setImages(images);
        callback(data.url, 'image');
      }
    });
  }

  const { id, name, imageUrl } = userStore();

  useEffect(() => {
    language = window.navigator.language;
    if (id !== "") {
      setLoginInfo({ id, name, imageUrl });
    }
    const fetchRegion = async () => {
      return regionService.findMany();
    };

    fetchRegion().then((data) => {
      setRegions(data);
    }).then(()=>{
      setDefaultRegion(
        regions.find((region) => region.id === regionId) as RegionDto
      );
    });
    console.log(regionId);
    setNewTitle(title);
    setNewTags(tags);
    setNewRegionId(regionId);
  }, []);

  return (
    <div>
      <HeaderBar needBackButton={false} loginInfo={loginInfo} />
      <div className="flex justify-center bg-white">
        <div className="h-[18px]" />
        <div className="w-[1000px] px-[32px] min-w-min">
          <div className="py-[10px] flex">
            <TextField
              fullWidth
              type="text"
              label="title"
              size="small"
              defaultValue={title}
              onChange={(e) => {
                setNewTitle(e.target.value);
              }}
            />
            <div className="w-[420px] px-[10px] flex items-center text-[12px] text-[#79747E]">
              <p>country</p>
              <div className="w-[10px]" />
              <RegionDropDownBox
                regions={regions}
                setRegionId={setNewRegionId}
                defaultRegion={defaultRegion}
              />
            </div>
            <div className="w-[10px]" />
            <Button
              onClick={() => {
                if (!isPress) {
                  const editedContent = showContent();
                  setIsPress(true);
                  magazineService
                    .update(magazineId, {
                      title: newTitle,
                      tags: newTags,
                      content: editedContent,
                      regionId: newRegionId,
                    })
                    .then((data) => {
                      reset();
                      router.push(`/magazine/${magazineId}`);
                    });
                }
              }}
              sx={{ borderRadius: 50 }}
              size="small"
            >
              Confirm
            </Button>
          </div>
          <div className="h-[10px]" />
          <div className="flex">
            <TextField
              fullWidth
              type="text"
              label="tag"
              size="small"
              value={curTag}
              onChange={(e) => {
                setCurTag(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.key === " ") {
                  tags.push(curTag);
                  setNewTags(tags);
                  setCurTag("");
                }
              }}
            />
          </div>
          <div className="h-[10px]" />
          <div className="px-[10px] flex">
            {newTags.length != 0 ? (
              newTags.map((tag) => (
                <>
                  <Chip
                    label={tag}
                    variant="outlined"
                    onDelete={(e) => {
                      setNewTags(newTags.filter((item) => item !== tag));
                    }}
                  />
                  <div className="w-[10px]" />
                </>
              ))
            ) : (
              <div className="h-[32px]" />
            )}
          </div>
          <div className="h-[10px]" />
          <WysiwygEditor editorRef={editorRef} initialValue={content} onUploadImage={undefined} />
          <div className="h-[32px]" />
        </div>
      </div>
    </div>
  );
}
