import HeaderBar from "@/components/header-bar";
import { Check, KeyboardArrowRight } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Snackbar,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [didSendVerificationNumber, setdidSendVerificationNumber] =
    useState(false);
  const [isOpenMessage1, setIsOpenMessage1] = useState(false);
  const [isOpenWrongEmail, setIsOpenWrongEmail] = useState(false);
  const [isOpenAlreadyExistEmail, setIsOpenAlreadyExistEmail] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isOpenMessage2, setIsOpenMessage2] = useState(false);
  const [isOpenWrongVerificationNumber, setIsOpenWrongVerificationNumber] =
    useState(false);

  const [password, setPassword] = useState("");
  const [isConfirmedPassword, setIsConfirmedPassword] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div>
      <HeaderBar needBackButton={true} loginInfo={null} />
      <div className="lg:h-10 h-4" />
      <div className="flex justify-center h-screen">
        <div className="w-full w-[400px] px-[32px] min-w-min bg-white h-fit rounded border">
          <div className="lg:h-8 h-5" />
          <div className="grid place-items-center text-[#262626] text-medium">
            Sign Up
          </div>
          <div className="lg:h-8 h-5" />
          <div className="w-full max-w-3xl px-8 min-w-min flex justify-center items-center" />
          <div className="flex justify-center items-center">
            <TextField
              fullWidth
              label="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="w-2" />
            <IconButton
              onClick={() => {
                const emailPattern =
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailPattern.test(email)) {
                  setIsOpenWrongEmail(true);
                } else {
                  setdidSendVerificationNumber(true);
                  setIsOpenMessage1(true);
                }
              }}
            >
              {didSendVerificationNumber ? (
                <Check className="text-[#05C3B6]" />
              ) : (
                <Check />
              )}
            </IconButton>
          </div>
          <div className="lg:h-2 h-1 flex justify-center items-center" />
          <div className="flex justify-center items-center">
            <TextField fullWidth type="password" label="verification number" />
            <div className="w-2" />
            <IconButton
              onClick={() => {
                const result = true;
                if (result) {
                  setIsVerified(true);
                  setIsOpenMessage2(true);
                } else {
                  setIsOpenWrongVerificationNumber(true);
                }
              }}
            >
              {isVerified ? <Check className="text-[#05C3B6]" /> : <Check />}
            </IconButton>
          </div>
          <div className="lg:h-4 h-2" />
          <div className="flex justify-center items-center">
            <TextField
              fullWidth
              type="password"
              label="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="lg:h-2 h-1 flex justify-center items-center" />
          <div className="flex justify-center items-center">
            <TextField
              fullWidth
              type="password"
              label="confirm password"
              onChange={(e) => {
                if (password === e.target.value) {
                  setIsConfirmedPassword(true);
                } else {
                  setIsConfirmedPassword(false);
                }
              }}
            />
          </div>
          {password.length > 0 ? isConfirmedPassword ? <p className="text-[#05C3B6] text-[14px]">Password matches</p> : <p className="text-[#FF5D39] text-[14px]">Password does not match</p> : <p></p>}
          <div className="lg:h-4 h-2" />
          <div className="flex justify-center items-center text-xs">
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label={
                    <p className="text-[#404040] font-xs">
                      Terms and Conditions
                    </p>
                  }
                />
                <KeyboardArrowRight />
              </div>
              <div className="flex justify-between items-center">
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label={
                    <p className="text-[#404040] font-xs">Privacy Policy</p>
                  }
                />
                <KeyboardArrowRight />
              </div>
              <div className="flex justify-between items-center">
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label={
                    <p className="text-[#404040] font-xs">
                      Personal Information Marketing Use (Optional)
                    </p>
                  }
                />
                <KeyboardArrowRight />
              </div>
            </div>
          </div>
          <div className="lg:h-10 h-8" />
          <Button fullWidth variant="outlined" sx={{ borderRadius: 50 }}>
            Sign up with email
          </Button>
          <div className="lg:h-10 h-8" />
          <div className="grid place-content-center">
            <Image src={"sign-in.svg"} alt="signin" width={300} height={16} />
          </div>
          <div className="lg:h-2 h-1" />
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
        open={isOpenMessage1}
        onClose={() => {
          setIsOpenMessage1(false);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message="The verification code has been sent to your email"
      />
      <Snackbar
        open={isOpenWrongEmail}
        onClose={() => {
          setIsOpenWrongEmail(false);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message="Invalid email format"
      />
      <Snackbar
        open={isOpenMessage2}
        onClose={() => {
          setIsOpenMessage2(false);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message="Verification code has been confirmed"
      />
      <Snackbar
        open={isOpenWrongVerificationNumber}
        onClose={() => {
          setIsOpenWrongVerificationNumber(false);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message="Invalid verification number"
      />
    </div>
  );
}
