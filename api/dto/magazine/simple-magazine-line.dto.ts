import { RegionDto } from "../user/region.dto";
import { UserLineDto } from "../user/user-line.dto";

export interface SimpleMagazineLineDto {
    id: string;
    title: string;
    writer: UserLineDto;
    region: RegionDto;
    rank: number;
}