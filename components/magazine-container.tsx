import Image from "next/image";
import UserProfileCard from "./user-profile-container";
import LikeButton from "./like-button";
import ReplyButton from "./reply-button";
import PhotoLikeButton from "./photo-like-button";
import WritingLikeButton from "./writing-like-button";

interface Props {
  id: string;
  imageUrl: string | null;
  title: string;
  likeCount: number;
  photoLikeCount: number;
  writingLikeCount: number;
  replyCount: number;
  writer: {
    id: string;
    name: string;
    imageUrl: string | null;
    region: string;
  };
  createdAt: string;
}

export default function MagazineContainer({
  id,
  imageUrl,
  title,
  writer,
  createdAt,
  likeCount,
  photoLikeCount,
  writingLikeCount,
  replyCount
}: Props) {
  const thumbnailImageUrl = imageUrl ? imageUrl : "/santiago-default.png";

  return (
    <div className="w-5/6 shadow-lg rounded-xl cursor-pointer" onClick={() => alert(id)}>
      <Image
        className="rounded-t-xl"
        src={thumbnailImageUrl}
        alt="thumbnail image"
        width={600}
        height={300}
      />
      <div className="px-4 py-[8px] text-base font-medium truncate">
        {title}
      </div>
      <div className="flex px-[16px] pb-[8px]">
        <LikeButton count={likeCount}/>
        <div className="px-[5px]"/>
        <PhotoLikeButton count={photoLikeCount} />
        <div className="px-[5px]"/>
        <WritingLikeButton count={writingLikeCount}/>
        <div className="px-[5px]"/>
        <ReplyButton count={replyCount} onClick={()=>{}}/>
      </div>
      <div className="flex justify-between px-4">
        <UserProfileCard
          id={writer.id}
          name={writer.name}
          region={writer.region}
          imageUrl={writer.imageUrl}
        />
        <div className="text-xs text-gray-400 grid place-items-center">{createdAt}</div>
      </div>
      <div className="h-3"/>
    </div>
  );
}
