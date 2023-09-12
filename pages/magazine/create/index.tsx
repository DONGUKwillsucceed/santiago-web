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
import { regionDefault } from "@/const/dummy";
import { UploadImageResDto } from "@/api/dto/magazine/upload-image-res.dto";

const WysiwygEditor = dynamic(() => import("@/components/post-editor"), {
  ssr: false,
});

export default function MagazineCreate() {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState<{
    id: string;
    name: string;
    imageUrl: string | null;
  } | null>(null);
  const [title, setTitle] = useState("");
  const [curTag, setCurTag] = useState("");
  const [images, setImages] = useState<UploadImageResDto[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [regionId, setRegionId] = useState("9575b497-f677-4b4a-94fa-1de79763e035");
  const [regions, setRegions] = useState<RegionDto[]>([]);
  const [isPress, setIsPress] = useState(false);
  const editorRef = useRef<any>(null);
  let language = "ko-KR";

  const showContent = () => {
    if (editorRef.current) {
      const editorIns = editorRef.current.getInstance();
      const contentHtml = editorIns.getHTML();
      return contentHtml;
    } else {
      return "";
    }
  };

  const { id, name, imageUrl } = userStore();

  useEffect(() => {
    language = window.navigator.language;
    if(id !== '') {
      setLoginInfo({ id, name, imageUrl });
      }
    const fetchRegion = async () => {
      return regionService.findMany();
    };

    fetchRegion().then((data) => {
      setRegions(data);
    });
  }, []);

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
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <div className="w-[420px] px-[10px] flex items-center text-[12px] text-[#79747E]">
              <p>country</p>
              <div className="w-[10px]" />
              <RegionDropDownBox regions={regions} setRegionId={setRegionId} defaultRegion={regionDefault} />
            </div>
            <div className="w-[10px]" />
            <Button
              onClick={() => {
                if (!isPress) {
                  const content = showContent();
                  setIsPress(true);
                  magazineService.create({
                    title,
                    content,
                    tags,
                    regionId,
                    userId: id,
                    language,
                    imageUrlIds: images.map((image)=>image.id)
                  }).then((data)=> {
                    router.push(`/magazine/${data.id}`)
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
                  setTags(tags);
                  setCurTag("");
                }
              }}
            />
          </div>
          <div className="h-[10px]" />
          <div className="px-[10px] flex">
            {tags.length != 0 ? (
              tags.map((tag) => (
                <>
                  <Chip
                    label={tag}
                    variant="outlined"
                    onDelete={(e) => {
                      setTags(tags.filter((item) => item !== tag));
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
          <WysiwygEditor editorRef={editorRef} initialValue={""} onUploadImage={onUploadImage} />
          <div className="h-[32px]" />
        </div>
      </div>
    </div>
  );
}
