export class UserLineDto {
    id: string = '';
	name: string = '';
	region: {
		id: string, 
		name_en: string, 
		name_kr: string, 
		name_hk:string, 
		name_jp:string
	} = {id:'', name_en: "", name_kr: '', name_hk: '', name_jp: ''};
	imageUrl: string | null = null;


    getId() {
        return this.id;
    }

    getImageUrl() {
        return this.imageUrl;
    }

    getRegion() {
        return this.region;
    }

    getName() {
        return this.name;
    }
}