import { Avatar } from "@mui/material";
import { useRouter } from "next/router";

interface Props {
  id: string;
  name: string;
  region: string | null;
  imageUrl: string | null;
}

export default function UserProfileCard({ id, name, region, imageUrl }: Props) {
  const size = region ? 24 : 18;
  const router = useRouter();
  return (
    <div
      className="flex flex-row cursor-pointer"
      onClick={(event) => {
        event.stopPropagation();
        router.push(`user/${id}`)
      }}
    >
      <div className="grid place-items-center">
        {imageUrl ? (
          <Avatar
            alt={name}
            src={imageUrl}
            sx={{ width: size, height: size }}
          />
        ) : (
          <Avatar className="text-[14px]" sx={{ width: size, height: size }}>
          </Avatar>
        )}
      </div>
      <div className="w-1.5" />
      <div className="flex flex-col justify-center">
        <div className="text-xs font-medium text-gray-600 truncate">{name}</div>
        {region ? <div className="text-xs text-gray-500">{region}</div> : null}
      </div>
    </div>
  );
}
