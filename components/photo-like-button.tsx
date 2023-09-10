import { magazineService } from "@/api/magazine/magazine";
import userStore from "@/store/user-store";
import { CameraAlt } from "@mui/icons-material";
import { Snackbar } from "@mui/material";
import { MouseEventHandler, useState } from "react";

interface Props {
  magazineId: string
  count: number;
}

export default function PhotoLikeButton({ magazineId ,count }: Props) {
  const [isPressed, setIsPressed] = useState(false);
  const [isOpenWarning, setIsOpenWarning] = useState(false);
  const [curCount, setCurCount] = useState(count);
  const {id} = userStore();

  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
        if(id !== '') {
          if (!isPressed) {
            setCurCount(curCount + 1);
            setIsPressed(true);
            magazineService.increaseLike(magazineId, 'photo', id);
          } else {
            setCurCount(curCount - 1);
            setIsPressed(false);
            magazineService.decreaseLike(magazineId, 'photo', id);
          }
        } else {
          setIsOpenWarning(true);
        }
      }}
      className="flex items-center text-xs text-gray-500"
    >
      {isPressed ? (
        <CameraAlt className="text-[#05C3B6]" sx={{ width: 18, height: 18 }} />
      ) : (
        <CameraAlt className="text-[#D4D4D4]" sx={{ width: 18, height: 18 }} />
      )}
      <div className="w-[3px]" />
      {curCount}

      <Snackbar
        open={isOpenWarning}
        onClose={() => {
          setIsOpenWarning(false);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message="Sorry, You have to sign in first."
      />
    </div>
  );
}
