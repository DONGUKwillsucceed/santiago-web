import { RegionDto } from "@/api/dto/user/region.dto";
import { UserLineDto } from "@/api/dto/user/user-line.dto";
import UserProfileCard from "./user-profile-container";
import { regionSelector } from "@/util/region-selector";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface Props {
  id: string;
  title: string;
  region: RegionDto;
  writer: UserLineDto;
  rank: number;
}

export default function SimpleMagazineLineContainer({
  id,
  title,
  region,
  writer,
  rank,
}: Props) {
  let locale = "ko-KR";

  useEffect(() => {
    locale = window.navigator.language;
  });

  const selectMedal = (rank: number) => {
    if (rank === 1) {
      return "🥇";
    } else if (rank === 2) {
      return "🥈";
    } else if (rank === 3) {
      return "🥉";
    } else {
      return <div className="w-[16px]" />;
    }
  };
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/magazine/${id}`)
      }}
      className="w-full py-[5px] flex items-center hover:cursor-pointer"
    >
      <div>{selectMedal(rank)}</div>
      <div className="flex-1 min-w-0 pl-[10px]">
        <div className="flex">
          <div className="text-[#404040] text-[12px]">
            {region.flag} {regionSelector(region, locale)}
          </div>
        </div>
        <div className="h-[4px]" />
        <div className="text-[#404040] text-[14px] font-medium truncate">
          {title}
        </div>
      </div>
    </div>
  );
}
