import { MagazineDto } from "@/api/dto/magazine/magazine.dto";
import { magazineService } from "@/api/magazine/magazine";
import HeaderBar from "@/components/header-bar";
import PhotoLikeButton from "@/components/photo-like-button";
import ReplyButton from "@/components/reply-button";
import UserProfileCard from "@/components/user-profile-container";
import WritingLikeButton from "@/components/writing-like-button";
import { userLineDefault } from "@/const/dummy";
import userStore from "@/store/user-store";
import { regionSelector } from "@/util/region-selector";
import { Chip } from "@mui/material";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";

export default function Magazine(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { data } = props;
  const [loginInfo, setLoginInfo] = useState<{
    id: string;
    name: string;
    imageUrl: string | null;
  } | null>(null);
  const { id, name, imageUrl } = userStore();
  let locale = "ko-KR";

  useEffect(() => {
    setLoginInfo({ id, name, imageUrl });
    locale = window.navigator.language;
  });
  return (
    <>
      <HeaderBar needBackButton={false} loginInfo={loginInfo} />
      <div className="flex justify-center bg-white">
        <div className="h-[18px]" />
        <div className="w-[1200px] min-w-min">
          <h1 className="px-[32px] py-[10px] text-[32px] font-medium">
            {data.title}
          </h1>
          <div className="flex pb-[8px] px-[32px]">
            <PhotoLikeButton magazineId={id} count={data.photoLikeCount} />
            <div className="px-[5px]" />
            <WritingLikeButton magazineId={id} count={data.writingLikeCount} />
          </div>
          <div className="px-[32px] flex justify-between">
            <UserProfileCard
              id={data.writer.id}
              name={data.writer.name}
              region={regionSelector(data.writer.region, locale)}
              imageUrl={data.writer.imageUrl}
            />
            {data.createdAt}
          </div>
          <div className="px-[32px] flex">
            {data.tags.map((tag: { id: string; tag: string }) => (
              <>
                <Chip label={tag.tag} variant="outlined" />
                <div className="w-[10px]"></div>
              </>
            ))}
          </div>
          <div className="h-[32px]"/>
          <main>
            <div dangerouslySetInnerHTML={{ __html: data.content }}/>
          </main>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  let data: MagazineDto = {
    id: "",
    title: "",
    tags: [
      {
        id: "",
        tag: "",
      },
    ],
    content: "",
    createdAt: "",
    photoLikeCount: 0,
    writingLikeCount: 0,
    didILikePhoto: false,
    didILikeWriting: false,
    writer: userLineDefault,
  };
  if (typeof id === "string") {
    data = await magazineService.findUnique(id);
  }
  return {
    props: {
      data,
    },
  };
};
