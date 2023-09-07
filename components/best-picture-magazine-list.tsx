import { SimpleMagazineLineDto } from "@/api/dto/magazine/simple-magazine-line.dto";
import SimpleMagazineLineContainer from "./simple-magazine-line-container";

interface Props {
  simpleMagazineLineDto: SimpleMagazineLineDto[];
}

export default function BestPictureMagazineList({
  simpleMagazineLineDto,
}: Props) {
  return (
    <div>
      <div className="text-[#404040] text-[14px] font-medium">
        🏞️ The picture here is so beautiful!
      </div>
      <div className="h-3" />
      <div className="w-full bg-white rounded-xl px-3">
        {simpleMagazineLineDto.map((item) => (
          <SimpleMagazineLineContainer
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
