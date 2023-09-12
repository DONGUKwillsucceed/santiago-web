import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import UserProfileCard from "./user-profile-container";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  needBackButton: boolean;
  loginInfo: {
    id: string;
    name: string;
    imageUrl: string | null;
  } | null;
}

export default function HeaderBar({ needBackButton, loginInfo }: Props) {
  const router = useRouter();
  return (
    <div className="h-[48px] flex-row grid place-items-center bg-white">
      <div className="w-full md:max-w-7xl min-w-min h-4/5 px-1 flex justify-between">
        <div className="flex flex-row items-center">
          {needBackButton ? (
            <IconButton aria-label="back">
              <KeyboardArrowLeft />
            </IconButton>
          ) : null}
          <div className="w-5" />
          <Link href={"/"}><Image src="/santiago.svg" alt="santiago" width={90} height={20} /></Link>
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
                router.push('/sign-in');
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
