import { Avatar } from "@mui/material";

interface Props {
  id: string;
  name: string;
  imageUrl: string;
}

export default function UserProfileCard({ id, name, imageUrl }: Props) {
  return (
    <div
      className="flex flex-row"
      onClick={() => {
        alert(id);
      }}
    >
      <div className="grid place-items-center">
      <Avatar alt={name} src={imageUrl} sx={{ width: 32, height: 32 }} />
      </div>
      <div className="w-1"/>
      <div className="flex-col flex justify-center">
        <p className="text-sm font-medium">{name}</p>
      </div>
    </div>
  );
}
