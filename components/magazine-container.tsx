import Image from "next/image";
import UserProfileCard from "./user-profile-container";

interface Props {
  id: string;
  imageUrl: string | null;
  title: string;
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
}: Props) {
  const thumbnailImageUrl = imageUrl ? imageUrl : "/santiago-default.png";
  return (
    <div className="w-80 shadow-lg rounded-xl cursor-pointer" onClick={() => alert(id)}>
      <Image
        className="rounded-t-xl"
        src={thumbnailImageUrl}
        alt="thumbnail image"
        width={500}
        height={300}
      />
      <div className="px-4 py-2 text-base font-medium truncate">
        {title}
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
