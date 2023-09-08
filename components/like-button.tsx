import Image from "next/image";
import { useState } from "react";

interface Props {
  count: number;
}

export default function LikeButton({ count }: Props) {
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
      {isPressed ? (
        <Image src={"/fire.svg"} alt="fire" width={18} height={18} />
      ) : (
        <Image src={"/fire_unpressed.svg"} alt="fire unpressed" width={18} height={18} />
      )}
      <div className="w-[3px]" />
      {curCount}
    </div>
  );
}
