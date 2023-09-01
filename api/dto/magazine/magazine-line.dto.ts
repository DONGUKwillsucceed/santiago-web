import { UserLineDto } from "../user/user-line.dto";

export interface MagazineLineDto {
    id: string;
	imageUrl: string | null;
	title: string;
	writer: UserLineDto;
	createdAt: string;
}