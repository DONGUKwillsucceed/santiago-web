import { RegionDto } from "@/api/dto/user/region.dto";
import { regionService } from "@/api/region/region";
import HeaderBar from "@/components/header-bar";
import RegionDropDownBox from "@/components/region-drop-box";
import userStore from "@/store/user-store";
import { Chip, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function MagazineCreate() {
  const [title, setTitle] = useState("");
  const [curTag, setCurTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [regionId, setRegionId] = useState("");
  const [regions, setRegions] = useState<RegionDto[]>([]);
  const [content, setContent] = useState("");

  const { id, name, imageUrl } = userStore();
  const loginInfo = id !== "" ? { id, name, imageUrl } : null;

  useEffect(() => {
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
      <div className="flex justify-center h-screen">
        <div className="w-[1200px] px-[32px] min-w-min bg-white">
          <div className="h-[18px]" />
          <div className="py-[10px] px-[10px]">
            <TextField
              fullWidth
              type="text"
              label="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="h-[18px]" />
          <TextField
            fullWidth
            type="text"
            label="tag"
            value={curTag}
            onChange={(e) => {
              setCurTag(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Space") {
                tags.push(curTag);
                setTags(tags);
                setCurTag("");
              }
            }}
          />
          <div className="h-[10px]" />
          <div className="px-[10px] py-[10px]">
            {tags.length != 0
              ? tags.map((tag) => (
                  <Chip
                    label={tag}
                    variant="outlined"
                    onDelete={(e) => {
                      setTags(tags.filter((item) => item !== tag));
                    }}
                  />
                ))
              : null}
          </div>
          <div className="flex">
            <p>country</p>
            <div className="w-10"/>
            <RegionDropDownBox regions={regions} setRegionId={setRegionId}/>
          </div>
          <div className="h-[32px]"/>
        </div>
      </div>
    </div>
  );
}
