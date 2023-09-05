import axios, { HttpStatusCode } from "axios";
import { serverUrl } from "../url";
import { RegionDto } from "../dto/user/region.dto";
import { NotFoundError } from "@/error/notfound-error";
import { NetworkError } from "@/error/network-error";

class RegionService {
    private url = `${serverUrl}/region`;

    async findMany() {
        try {
            const res = await axios.get<RegionDto[]>(this.url);
            if (res.status == HttpStatusCode.Ok) {
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
}

export const regionService = new RegionService();