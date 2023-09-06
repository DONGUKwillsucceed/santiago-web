import { FormControlLabel, SelectChangeEvent, Switch } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
  isGlobal: boolean;
  setIsGlobal: Dispatch<SetStateAction<boolean>>;
}

export default function GlobalSwitch({ isGlobal, setIsGlobal }: Props) {

    const switchHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setIsGlobal(event.target.checked);
      };
  return (
    <div className="flex justify-between items-center">
      <div className="text-[#525252] text-[14px]">🌐 Global</div>
      <div><Switch checked={isGlobal} onChange={switchHandler}/></div>
    </div>
  );
}
