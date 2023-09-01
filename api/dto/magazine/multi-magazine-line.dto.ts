import { MagazineLineDto } from "./magazine-line.dto";

export interface MultiMagazineLineDto {
	data : MagazineLineDto[];
	total : number;
}