import { NetworkError } from "@/error/network-error";
import { serverUrl } from "../url";
import axios from "axios";
import { MultiMagazineLineDto } from "../dto/magazine/multi-magazine-line.dto";

class SearchService {
    private url = `${serverUrl}/search`;

    async searchAboutMagazine(regionId: string, queryType: string, base: number, offset: number) {
        try{
            return axios.get<MultiMagazineLineDto>(`${this.url}?about=magazine?region-id=${regionId}&query-type=${queryType}&base=${base}&offset=${offset}`)
        } catch(err) {
            throw new NetworkError("network error ocurr");
        }
    }
}

export const searchService = new SearchService();