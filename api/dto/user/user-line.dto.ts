import { RegionDto } from "./region.dto";

export interface UserLineDto {
    id: string;
	name: string;
	imageUrl: string | null;
	region: RegionDto;
}