import { RegionDto } from "@/api/dto/user/region.dto";
import { useEffect } from "react";
import UserProfileCard from "./user-profile-container";
import { regionSelector } from "@/util/region-selector";

interface Props {
    id: string;
    name: string;
    region: RegionDto;
    imageUrl: string | null;
    rank: number;
}

export default function AwardedUserLineContainer({id, name, region, imageUrl, rank}: Props){
    let locale = 'ko-KR'

    useEffect(()=> {
      locale = window.navigator.language;
    })

    const selectMedal = (rank: number) => {
        if(rank === 1) {
            return '🥇'
        } else if(rank === 2) {
            return '🥈'
        } else if (rank === 3) {
            return '🥉'
        } else {
            return <div className="w-[16px]"/>
        }
    }

    return (
        <div onClick={()=>alert(id)} className="w-full py-[5px] flex items-center">
            <div>{selectMedal(rank)}</div>
            <div className="flex-1 min-w-0 pl-[10px]">
            <UserProfileCard
            id={id}
            name={name}
            region={regionSelector(region, locale)}
            imageUrl={imageUrl}
          />
            </div>

        </div>
    )
}