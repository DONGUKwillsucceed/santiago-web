import { Avatar } from "@mui/material";

interface Props {
  id: string;
  name: string;
  region: string | null;
  imageUrl: string | null;
}

export default function BigUserProfileCard({ id, name, region, imageUrl }: Props) {
  const size = 72;
    return (
    <div
      className="flex flex-row cursor-pointer"
      onClick={() => {
        alert(id);
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
        <div className="text-[18px] font-medium text-gray-600 truncate">{name}</div>
        {region ? <div className="text-[16px] text-gray-500">{region}</div> : null}
      </div>
    </div>
  );
}
