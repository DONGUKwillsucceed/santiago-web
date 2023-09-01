import { UserLineDto } from "@/api/dto/user/user-line.dto";
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
  const thumbnailImageUrl = imageUrl ? imageUrl : "";
  return (
    <div onClick={() => alert(id)}>
      <Image
        src={thumbnailImageUrl}
        alt="thumbnail image"
        width={320}
        height={250}
      />
      <div>
        <p>{title}</p>
      </div>
      <div className="flex justify-between">
        <UserProfileCard
          id={writer.id}
          name={writer.name}
          region={writer.region}
          imageUrl={writer.imageUrl}
        />
        <p>{createdAt}</p>
      </div>
    </div>
  );
}
