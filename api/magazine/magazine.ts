import axios, { HttpStatusCode } from "axios";
import { serverUrl } from "../url";
import { MultiMagazineLineDto } from "../dto/magazine/multi-magazine-line.dto";
import { NetworkError } from "@/error/network-error";
import { NotFoundError } from "@/error/notfound-error";

class MagazineService {
  private url = `${serverUrl}/magazine`;

  async findMany(
    regionId: string | null,
    queryType: string,
    lang: string | null,
    base: number,
    limit: number,
    search: string | null
  ) {
    try {
      let url = `${this.url}?query-type=${queryType}&base=${base}&limit=${limit}`;
      if (lang) {
        url += `&lang=${lang}`;
      }
      if (search) {
        url += `&search=${search}`;
      }
      if(regionId) {
        url += `&region-id=${regionId}`;
      }
      const res = await axios.get<MultiMagazineLineDto>(url);

      if (res.status == HttpStatusCode.Ok) {
        return res.data;
      } else if (res.status == HttpStatusCode.NotFound) {
        throw new NotFoundError("Not Found");
      } else {
        throw new Error();
      }
    } catch (err) {
      throw new NetworkError(err as string);
    }
  }
}

export const magazineService = new MagazineService();
