import HeaderBar from "@/components/header-bar";
import { Button, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { userSerivce } from "@/api/user/user";
import { authService } from "@/api/auth/auth";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpenSignInFail, setIsOpenSignInFail] = useState(false);

  return (
    <div>
      <HeaderBar needBackButton={false} loginInfo={null} />
      <div className="lg:h-10 h-4" />
      <div className="flex justify-center h-screen">
        <div className="w-[400px] px-[32px] min-w-min bg-white h-fit rounded border">
          <div className="lg:h-8 h-5" />
          <div className="grid place-items-center text-[#262626] text-medium">
            Sign In
          </div>
          <div className="lg:h-8 h-5" />
          <div className="w-full max-w-3xl px-8 min-w-min flex justify-center items-center" />
          <TextField
            fullWidth
            label="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="h-2" />
          <TextField
            fullWidth
            type="password"
            label="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="lg:h-10 h-8" />
          <Button
            className="text-[#FFFFFF] bg-[#05C3B6]"
            fullWidth
            variant="contained"
            sx={{
              borderRadius: 50,
              boxShadow: "none",
              ":hover": { bgcolor: "#05C3B6" },
            }}
            color="primary"
            onClick={() => {
              authService.signIn({ email, password }).then((data) => {
                if (data.isSuccess) {
                  localStorage.setItem("userId", data.userId);
                  localStorage.setItem("accessToken", data.accessToken);
                  localStorage.setItem("refreshToken", data.refreshToken);
                  router.push("/");
                } else {
                  setIsOpenSignInFail(true);
                }
              });
            }}
          >
            Sign in With Email
          </Button>
          <div className="lg:h-2 h-1" />
          <Button
            fullWidth
            variant="outlined"
            sx={{ borderRadius: 50 }}
            onClick={() => {
              router.push("/sign-up");
            }}
          >
            Sign up with email
          </Button>
          <div className="lg:h-10 h-8" />
          <div className="grid place-content-center">
            <Image src={"sign-in.svg"} alt="signin" width={300} height={16} />
          </div>
          <div className="h-2" />
          <div className="grid place-content-center">
            <div className="flex justify-center">
              <Image src={"/google.png"} alt="google" width={45} height={45} />
              <div className="w-1" />
              <Image
                src={"/facebook.png"}
                alt="google"
                width={45}
                height={45}
              />
              <div className="w-1" />
              <Image src={"/apple.png"} alt="google" width={45} height={45} />
            </div>
          </div>
          <div className="lg:h-8 h-5" />
        </div>
      </div>
      <Snackbar
        open={isOpenSignInFail}
        onClose={() => {
          setIsOpenSignInFail(false);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message="Sign-in failed"
      />
    </div>
  );
}
