import HeaderBar from "@/components/header-bar";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useState } from "react";
import Image from "next/image"

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div>
      <HeaderBar needBackButton={true} loginInfo={null} />
      <div className="lg:h-10 h-4" />
      <div className="grid place-items-center">회원가입</div>
      <div className="lg:h-10 h-4" />
      <div className="w-full max-w-3xl px-8 min-w-min flex justify-center items-center" />
      <div className="flex justify-center items-center">
        <TextField className="w-64" fullWidth label="email" />
      </div>
      <div className="lg:h-2 h-1 flex justify-center items-center" />
      <div className="flex justify-center items-center">
        <TextField className="w-64" fullWidth label="verification number" />
      </div>
      <div className="lg:h-4 h-2" />
      <div className="flex justify-center items-center">
        <TextField className="w-64" fullWidth label="password" />
      </div>
      <div className="lg:h-2 h-1 flex justify-center items-center" />
      <div className="flex justify-center items-center">
        <TextField className="w-64" fullWidth label="confirm password" />
      </div>
      <div className="lg:h-4 h-2" />
      <div className="flex justify-center items-center text-xs">
        <div className="w-64 flex flex-col">
          <div className="flex justify-between items-center">
          <FormControlLabel
            control={<Checkbox />}
            label="Terms and Conditions"
          />
          <KeyboardArrowRight/>
          </div>
          <div className="flex justify-between items-center">
          <FormControlLabel
            control={<Checkbox />}
            label="Privacy Policy"
          />
          <KeyboardArrowRight/>
          </div>
          <div className="flex justify-between items-center">
          <FormControlLabel
            control={<Checkbox />}
            label="Personal Information Marketing Use (Optional)"
          />
          <KeyboardArrowRight/>
          </div>
        </div>
      </div>
      <div className="lg:h-10 h-8" />
      <div className="grid place-content-center">
      <Image src={'sign-in.svg'} alt="signin" width={300} height={16}/>
      </div>
      <div className="lg:h-2 h-1" />
      <div className="grid place-content-center">
      <div className="flex justify-center">
        <Image src={'/google.png'} alt="google" width={45} height={45}/>
        <div className="w-1"/>
        <Image src={'/facebook.png'} alt="google" width={45} height={45}/>
        <div className="w-1"/>
        <Image src={'/apple.png'} alt="google" width={45} height={45}/>
      </div>
      </div>
    </div>
  );
}
