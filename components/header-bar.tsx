import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import UserProfileCard from "./user-profile-container";
import { KeyboardArrowLeft } from "@mui/icons-material";

interface Props {
  needBackButton: boolean;
  loginInfo: {
    id: string;
    name: string;
    imageUrl: string | null;
  } | null;
}

export default function HeaderBar({ needBackButton, loginInfo }: Props) {
  return (
    <div className="h-14 flex-row grid place-items-center bg-white">
      <div className="w-full md:max-w-7xl min-w-min h-4/5 px-1 flex justify-between">
        <div className="flex flex-row">
          {needBackButton ? (
            <IconButton aria-label="back">
              <KeyboardArrowLeft />
            </IconButton>
          ) : null}
          <div className="w-5" />
          <Image src="santiago.svg" alt="santiago" width={90} height={20} />
        </div>
        <div className="flex flex-row">
          {loginInfo ? (
            <UserProfileCard
              id={loginInfo.id}
              name={loginInfo.name}
              region={null}
              imageUrl={loginInfo.imageUrl}
            />
          ) : (
            <Button
              color="primary"
              size="small"
              onClick={() => {
                alert("clicked");
              }}
            >
              Sign In
            </Button>
          )}
          <div className="w-5" />
        </div>
      </div>
    </div>
  );
}
