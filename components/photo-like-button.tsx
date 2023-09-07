import { CameraAlt } from "@mui/icons-material";
import { MouseEventHandler, useState } from "react";

interface Props {
    count: number
    onClick: MouseEventHandler<HTMLDivElement>
}

export default function PhotoLikeButton({count, onClick}: Props) {
    return (
        <div
            onClick={onClick}
            className="flex items-center text-xs text-gray-500"
          >
            <CameraAlt className="text-[#D4D4D4]" sx={{width:18, height:18}}/>
            {count}
          </div>
    )
}