import UserProfileCard from "./user-profile-container";
import LikeButton from "./like-button";
import ReplyButton from "./reply-button";

interface Props {
  id: string;
  imageUrl: string | null;
  content: string;
  likeCount: number;
  replyCount: number;
  createdAt: string;
  writer: {
    id: string;
    name: string;
    imageUrl: string | null;
    region: string;
  };
}

export function AgoraContainer({
  id,
  imageUrl,
  content,
  likeCount,
  replyCount,
  createdAt,
  writer,
}: Props) {
  return (
    <div
      onClick={() => alert(id)}
      className="w-80 shadow-lg rounded-xl cursor-pointer border border-gray-100 flex-col justify-between relative"
    >
      <div className="h-3" />
      <div className="flex justify-between px-4">
        <UserProfileCard
          id={writer.id}
          name={writer.name}
          region={writer.region}
          imageUrl={writer.imageUrl}
        />
        <div className="text-xs text-gray-400 grid place-items-center">
          {createdAt}
        </div>
      </div>
      <div className="h-3" />
      <div className="px-4 py-2 text-xs text-gray-700">
        <p>{content}</p>
      </div>
      <div className="h-3" />
      <div className="flex-col justify-between px-4 absolute bottom-0 left-0">
        <div className="flex items-center">
          <LikeButton
            count={likeCount}
            onClick={(event) => {
              event.stopPropagation();
              alert("like");
            }}
          />
          <div className="w-4" />
          <ReplyButton
            count={replyCount}
            onClick={(event) => {
              event.stopPropagation();
              alert('reply')
            }}
          />
        </div>
        <div className="h-3" />
      </div>
      <div className="h-8" />
    </div>
  );
}
