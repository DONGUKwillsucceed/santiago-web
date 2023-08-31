import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import UserProfileCard from "./user-profile-container";
import { Backspace, KeyboardArrowLeft } from "@mui/icons-material";

interface Props {
  needBackButton: boolean;
  loginInfo: {
    id: string;
    name: string;
    imageUrl: string;
  } | null;
}

export default function HeaderBar({ needBackButton, loginInfo }: Props) {
  return (
    <div className="h-14 flex-row border-b grid place-items-center">
      <div className="w-4/5 min-w-min h-4/5 px-8 flex justify-between">
        <div className="flex flex-row">
          {needBackButton ? (
            <IconButton aria-label="back">
              <KeyboardArrowLeft />
            </IconButton>
          ) : null}
          <div className="w-5"/>
          <Image src="santiago.svg" alt="santiago" width={90} height={20} />
        </div>
        {loginInfo ? (
          <UserProfileCard
            id={loginInfo.id}
            name={loginInfo.name}
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
            <p className="text-sm">Sign In / Sign Up</p>
          </Button>
        )}
      </div>
    </div>
  );
}
