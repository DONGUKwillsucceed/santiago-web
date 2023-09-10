import axios, { AxiosResponse, HttpStatusCode } from "axios";
import { serverUrl } from "../url";
import { MultiMagazineLineDto } from "../dto/magazine/multi-magazine-line.dto";
import { NetworkError } from "@/error/network-error";
import { NotFoundError } from "@/error/notfound-error";
import { SimpleMagazineLineDto } from "../dto/magazine/simple-magazine-line.dto";
import { CreateMagazineDto } from "../dto/magazine/create-magazine.dto";
import { CreateMagazineResDto } from "../dto/magazine/create-magazine-res.dto";
import { MagazineDto } from "../dto/magazine/magazine.dto";

class MagazineService {
  private url = `${serverUrl}/magazine`;

  async findMany(
    regionId: string | null,
    queryType: string,
    lang: string | null,
    base: number,
    limit: number,
    search: string | null,
    userId: string | null
  ) {
    try {
      let url = `${this.url}?query-type=${queryType}&base=${base}&limit=${limit}`;
      if (lang) {
        url += `&lang=${lang}`;
      }
      if (search) {
        url += `&search=${search}`;
      }
      if (regionId) {
        url += `&region-id=${regionId}`;
      }
      if(userId) {
        url += `&user-id=${userId}`
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
async findManyForBest(
    regionId: string | null,
    queryType: string,
    lang: string | null,
    base: number,
    limit: number,
    userId: string | null
  ) {
    try {
      let url = `${this.url}/best?query-type=${queryType}&base=${base}&limit=${limit}`;
      if (lang) {
        url += `&lang=${lang}`;
      }
      if (regionId) {
        url += `&region-id=${regionId}`;
      }
      if(userId) {
        url += `&user-id=${userId}`;
      }
      const res = await axios.get<SimpleMagazineLineDto[]>(url);

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

  async findUnique(id: string) {
    try {
      const url = `${this.url}/${id}`;
      const res = await axios.get<MagazineDto>(url);
      if (res.status == HttpStatusCode.Ok || res.status === HttpStatusCode.Created) {
        return res.data;
      } else {
        throw new Error();
      }
    } catch(err) {
      throw new NetworkError(err as string);
    }
  }

  async increaseLike(magazineId: string, type: string, userId: string) {
    try {
      const url = `${this.url}/${magazineId}/like?type=${type}&user-id=${userId}`;
      const res = await axios.post(url);

      if (res.status == HttpStatusCode.Ok || res.status === HttpStatusCode.Created) {
        return res.data;
      } else if (res.status == HttpStatusCode.NotFound) {
        throw new NotFoundError("Not Found");
      } else {
        throw new Error();
      }
    } catch(err) {
      throw new NetworkError(err as string);
    }
  }

  async decreaseLike(magazineId: string, type: string, userId: string) {
    try {
      const url = `${this.url}/${magazineId}/like?type=${type}&user-id=${userId}`;
      const res = await axios.delete(url);

      if (res.status == HttpStatusCode.Ok || res.status === HttpStatusCode.Created) {
        return res.data;
      } else if (res.status == HttpStatusCode.NotFound) {
        throw new NotFoundError("Not Found");
      } else {
        throw new Error();
      }
    } catch(err) {
      throw new NetworkError(err as string);
    }
  }

  async create(dto: CreateMagazineDto) {
    try {
      const url = this.url;
      const res = await axios.post<CreateMagazineDto, AxiosResponse<CreateMagazineResDto>>(url, dto, {
        headers: {
          "Content-Type": `application/json`,
        },
      });
      
      if(res.status === HttpStatusCode.Ok || res.status === HttpStatusCode.Created) {
        return res.data;
      } else if(res.status === HttpStatusCode.NotFound) {
        throw new NotFoundError("Not Found");
      } else {
        throw new Error();
      }
    } catch(err) {
      throw new NetworkError(err as string);
    }
  }
}

export const magazineService = new MagazineService();
