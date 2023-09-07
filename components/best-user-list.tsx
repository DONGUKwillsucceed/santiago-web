import AwardedUserLineContainer from "./awarded-user-line-container";
import { AwardedUserLineDto } from "@/api/dto/user/awarded-user-line.dto";

interface Props {
  title: string;
  awardedUserLineDto: AwardedUserLineDto[];
}

export default function BestUserList({ title, awardedUserLineDto }: Props) {
  return (
    <div>
      <div className="text-[#404040] text-[14px] font-medium">
        {title}
      </div>
      <div className="h-3" />
      <div className="w-full bg-white rounded-xl px-3 py-[5px]">
        {awardedUserLineDto.map((item) => (
          <AwardedUserLineContainer
            key={item.id}
            id={item.id}
            name={item.name}
            region={item.region}
            imageUrl={item.imageUrl}
            rank={item.rank}
          />
        ))}
      </div>
    </div>
  );
}
