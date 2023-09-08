import { SortByAlpha } from "@mui/icons-material";
import { MouseEventHandler, useState } from "react";

interface Props {
  count: number;
}

export default function WritingLikeButton({ count }: Props) {
  const [isPressed, setIsPressed] = useState(false);
  const [curCount, setCurCount] = useState(count);

  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
        if (!isPressed) {
          setCurCount(curCount + 1);
          setIsPressed(true);
        } else {
          setCurCount(curCount - 1);
          setIsPressed(false);
        }
      }}
      className="flex items-center text-xs text-gray-500"
    >
      {isPressed ? <SortByAlpha className="text-[#F9BC02]" sx={{ width: 18, height: 18 }} /> : <SortByAlpha className="text-[#D4D4D4]" sx={{ width: 18, height: 18 }} />}
      <div className="w-[3px]"/>
      {curCount}
    </div>
  );
}
