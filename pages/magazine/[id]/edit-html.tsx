import { magazineService } from "@/api/magazine/magazine";
import HeaderBar from "@/components/header-bar";
import magazineEditStore from "@/store/magazine-edit-store";
import userStore from "@/store/user-store";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MagazineEditHtml() {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState<{
    id: string;
    name: string;
    imageUrl: string | null;
  } | null>(null);

  const { id, name, imageUrl } = userStore();
  const [isPress, setIsPress] = useState(false);
  const { magazineId, content, reset } = magazineEditStore();
  const [newContent, setNewContent] = useState(content);

  useEffect(() => {
    if (id !== "") {
      setLoginInfo({ id, name, imageUrl });
    }
  }, []);

  return (
    <>
      <HeaderBar needBackButton={false} loginInfo={loginInfo} />
      <div className="flex justify-center bg-white h-screen">
        <div className="h-[18px]" />
        <div className="w-[1000px] px-[32px] min-w-min">
            <div className="flex justify-end">
            <Button size="small" onClick={() =>{
            if(!isPress) {
                setIsPress(true);
                magazineService.update(magazineId, {
                    content: newContent,
                    title: undefined,
                    regionId: undefined,
                    tags: undefined
                }).then((data) => {
                    reset();
                    router.push(`/magazine/${magazineId}`);
                })
            }
          }}>confirm</Button>
            </div>
          <div className="h-10"/>
          <div>
          <textarea className="w-full border-0 hover:outline-0 focus:outline-0" rows={50} defaultValue={content.replaceAll('><', '>\n<')} onChange={(e) => setNewContent(e.target.value)}/>
          </div>
        </div>
      </div>
    </>
  );
}
