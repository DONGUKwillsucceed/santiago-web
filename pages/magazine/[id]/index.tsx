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
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useRef, useState } from "react";

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
  }, []);
  return (
    <>
      <HeaderBar needBackButton={false} loginInfo={loginInfo} />
      <div className="flex justify-center bg-white min-h-screen">
        <div className="h-[18px]" />
        <div className="w-[800px] min-w-min">
          <h1 className="px-[24px] py-[10px] text-[32px] font-medium">
            {data.title}
          </h1>
          <div className="flex pb-[8px] px-[24px]">
            <PhotoLikeButton magazineId={data.id} count={data.photoLikeCount} />
            <div className="px-[5px]" />
            <WritingLikeButton
              magazineId={data.id}
              count={data.writingLikeCount}
            />
          </div>
          <div className="px-[24px] flex justify-between items-center">
            <UserProfileCard
              id={data.writer.id}
              name={data.writer.name}
              region={regionSelector(data.writer.region, locale)}
              imageUrl={data.writer.imageUrl}
            />
            <div className="text-[#868E96] text-[12px]">{data.createdAt}</div>
          </div>
          <div className="h-[18px]" />
          <hr />
          <div className="h-[32px]" />
          <div
            className="px-[24px]"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          <div className="h-[200px]" />
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
