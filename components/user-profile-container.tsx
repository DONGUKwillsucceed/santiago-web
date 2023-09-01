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
        { imageUrl ? <Avatar alt={name} src={imageUrl} sx={{ width: 32, height: 32 }} />: <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>}
      </div>
      <div className="w-1.5"/>
      <div className="flex-col flex justify-center">
        <p className="text-sm font-medium">{name}</p>
        {region? <p className="text-xs">{region}</p> : null}
      </div>
    </div>
  );
}
