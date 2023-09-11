export interface UpdateMagazineDto {
    title: string | undefined;
    content: string | undefined;
    regionId: string | undefined;
    tags: string[];
}