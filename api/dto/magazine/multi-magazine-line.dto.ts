import { MagazineLineDto } from "./magazine-line.dto";

export class MultiMagazineLineDto {
	data : MagazineLineDto [] = [];
	total : number = 0;

    getDate() {
        return this.data;
    }

    getTotal() {
        return this.total;
    }
}