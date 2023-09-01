import { UserLineDto } from "../user/user-line.dto";

export interface AgoraLineDto {
    id: string;
    imageUrl: string | null;
    content: string;
    likeCount: number;
    replyCount: number;
    createdAt: string;
    writer: UserLineDto;
}