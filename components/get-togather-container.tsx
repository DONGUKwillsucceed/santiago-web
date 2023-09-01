import Image from "next/image";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GetTogatherStatus from "./get-togather-status";
import PeopleIcon from '@mui/icons-material/People';

interface Props {
  id: string;
  imageUrl: string | null;
  title: string;
  content: string;
  from: string | null;
  to: string | null;
  memberCount: number;
  memberCapacity: number | null;
  isRecruitting: boolean;
}

export default function GetTogatherContainer({
  id,
  imageUrl,
  title,
  content,
  from,
  to,
  memberCount,
  memberCapacity,
  isRecruitting,
}: Props) {
  const thumbnailImageUrl = imageUrl ? imageUrl : "/santiago-default.png";
  const memberStatus =
    memberCount && memberCapacity ? `${memberCount}/${memberCapacity}` : "∞";
  const periodStatus = from && to ? `${from}~${to}` : null;
  return (
    <div
      onClick={() => alert(id)}
      className="w-80 shadow-lg rounded-xl cursor-pointer border border-gray-100 flex-col justify-between relative"
    >
      <Image
        className="rounded-t-xl"
        src={thumbnailImageUrl}
        alt="thumbnail image"
        width={500}
        height={300}
      />
      <div className="px-4 py-2 text-base font-medium truncate">{title}</div>
      <div className="h-12 px-4 text-ellipsis line-clamp-3 text-xs text-gray-700">
        <p>{content}</p>
      </div>
      <div className="h-4"/>
      <div className="flex justify-between px-4 truncate">
        <GetTogatherStatus isRecruitting={isRecruitting} />
        <div className="flex">
          {from && to ? (
            <div className="text-xs text-gray-400 flex items-center">
              <CalendarTodayIcon fontSize="small" />
              <div className="w-1" />
              {periodStatus}
            </div>
          ) : null}
          <div className="text-xs text-gray-400 flex items-center">
            <div className="w-3"/>
            <PeopleIcon fontSize="small"/>
            <div className="w-1"/>
            {memberStatus}
          </div>
        </div>
      </div>
      <div className="h-3" />
    </div>
  );
}
