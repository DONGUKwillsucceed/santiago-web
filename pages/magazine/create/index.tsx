import { RegionDto } from "@/api/dto/user/region.dto";
import { regionService } from "@/api/region/region";
import HeaderBar from "@/components/header-bar";
import RegionDropDownBox from "@/components/region-drop-box";
import userStore from "@/store/user-store";
import { Button, Chip, TextField } from "@mui/material";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

const WysiwygEditor = dynamic(() => import("@/components/post-editor"), {
  ssr: false,
});

export default function MagazineCreate() {
  const [loginInfo, setLoginInfo] = useState<{
    id: string;
    name: string;
    imageUrl: string | null;
  } | null>(null);
  const [title, setTitle] = useState("");
  const [curTag, setCurTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [regionId, setRegionId] = useState("");
  const [regions, setRegions] = useState<RegionDto[]>([]);
  const [content, setContent] = useState("");

  const { id, name, imageUrl } = userStore();

  useEffect(() => {
    setLoginInfo({ id, name, imageUrl });
    const fetchRegion = async () => {
      return regionService.findMany();
    };

    fetchRegion().then((data) => {
      setRegions(data);
    });
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
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <div className="w-[70px]" />
            <Button variant="outlined" sx={{ borderRadius: 50 }} size="small">
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
            <div className="px-[10px] flex items-center text-[12px] text-[#79747E]">
            <p>country</p>
            <div className="w-[10px]" />
            <RegionDropDownBox regions={regions} setRegionId={setRegionId} />
          </div>
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
          <WysiwygEditor/>
          <div className="h-[32px]" />
        </div>
      </div>
    </div>
  );
}
