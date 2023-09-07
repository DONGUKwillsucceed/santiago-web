import { UserLineDto } from "./user-line.dto";

export interface AwardedUserLineDto extends UserLineDto{
    rank: number;
}