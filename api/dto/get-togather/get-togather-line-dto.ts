export interface GetTogatherLineDto {
    id: string;
	title: string;
	content: string;
	from: string | null;
	to: string | null;
    imageUrl: string | null;
	memberCount: number;
	memberCapacity: number | null;
    isRecruitting: boolean;
}