import { RegionDto } from "./region.dto";

export interface UserDto {
    id: string;
    name: string;
    region: RegionDto;
    imageUrl: string | null;
    subscriberCount: number;
    columnistCount: number;
}