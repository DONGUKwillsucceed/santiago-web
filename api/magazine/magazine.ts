import axios from "axios";
import { serverUrl } from "../url";
import { MultiMagazineLineDto } from "../dto/magazine/multi-magazine-line.dto";
import { NetworkError } from "@/error/network-error";

class MagazineService {
  private url = `${serverUrl}/magazine`;

  async findMany(
    regionId: string,
    queryType: string,
    base: number,
    offset: number
  ) {
    try {
      return axios.get<MultiMagazineLineDto>(
        `${this.url}?region-id=${regionId}&query-type=${queryType}&base=${base}&offset=${offset}`
      );
    } catch (err) {
      throw new NetworkError("network error occur");
    }
  }
}

export const magazineService = new MagazineService();