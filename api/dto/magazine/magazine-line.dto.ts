import { UserLineDto } from "../user/user-line.dto";

export class MagazineLineDto {
    private id: string = '';
	private imageUrl: string | null = null;
	private title: string = '';
	private writer: UserLineDto = new UserLineDto();
	private createdAt: string = '';

    getId() {
        return this.id;
    }

    getImageUrl() {
        return this.imageUrl;
    }

    getTitle() {
        return this.title;
    }

    getWriter() {
        return this.writer;
    }

    getCreatedAt() {
        return this.createdAt;
    }
}