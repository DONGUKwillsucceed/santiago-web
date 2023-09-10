export interface CreateMagazineDto {
    title: string;
    content: string;
    regionId: string;
    userId: string;
    tags: string[];
    language: string;
}