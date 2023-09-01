import Image from "next/image";
import { MouseEventHandler } from "react";

interface Props {
    count: number
    onClick: MouseEventHandler<HTMLDivElement>
}

export default function LikeButton({count, onClick}: Props) {
    return (
        <div
            onClick={onClick}
            className="flex items-center text-xs text-gray-500"
          >
            <Image src={"/fire.svg"} alt="fire" width={18} height={18} />
            {count}
          </div>
    )
}