import { UserLineDto } from "../user/user-line.dto";

export interface MagazineDto {
    id: string;
    title: string;
    tags: {
        id: string;
        tag: string;
    } [],
    content: string;
    createdAt: string;
    photoLikeCount: number;
    writingLikeCount: number;
    didILikePhoto: boolean;
    didILikeWriting: boolean;
    writer: UserLineDto;
}