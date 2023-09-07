import { Avatar } from "@mui/material";

interface Props {
  id: string;
  name: string;
  region: string | null;
  imageUrl: string | null;
}

export default function UserProfileCard({ id, name, region, imageUrl }: Props) {
  return (
    <div
      className="flex flex-row cursor-pointer"
      onClick={() => {
        alert(id);
      }}
    >
      <div className="grid place-items-center">
        { imageUrl ? <Avatar alt={name} src={imageUrl} sx={{ width: 18, height: 18 }} />: <Avatar className="text-[14px]" sx={{ width: 18, height: 18 }}>U</Avatar>}
      </div>
      <div className="w-1.5"/>
      <div className="flex flex-col justify-center">
        <div className="text-xs font-medium text-gray-600 truncate">{name}</div>
        {region? <div className="text-xs text-gray-500">{region}</div> : null}
      </div>
    </div>
  );
}
