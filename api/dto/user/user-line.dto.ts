export interface UserLineDto {
    id: string;
	name: string;
	region: {
		id: string, 
		name_en: string, 
		name_kr: string, 
		name_hk:string, 
		name_jp:string
	};
}