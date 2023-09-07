import { SimpleMagazineLineDto } from "@/api/dto/magazine/simple-magazine-line.dto";
import SimpleMagazineLineContainer from "./simple-magazine-line-container";

interface Props {
  title: string;
  simpleMagazineLineDto: SimpleMagazineLineDto[];
}

export default function BestMagazineList({
  title,
  simpleMagazineLineDto,
}: Props) {
  return (
    <div>
      <div className="text-[#404040] text-[14px] font-medium">
        {title}
      </div>
      <div className="h-3" />
      <div className="w-full bg-white rounded-xl px-3 py-[5px]">
        {simpleMagazineLineDto.map((item) => (
          <SimpleMagazineLineContainer
            key={item.id}
            id={item.id}
            title={item.title}
            region={item.region}
            writer={item.writer}
            rank={item.rank}
          />
        ))}
      </div>
    </div>
  );
}
