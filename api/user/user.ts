import axios, { HttpStatusCode } from "axios";
import { serverUrl } from "../url";
import { NotFoundError } from "@/error/notfound-error";
import { NetworkError } from "@/error/network-error";
import { AwardedUserLineDto } from "../dto/user/awarded-user-line.dto";

class UserService {
  private url = `${serverUrl}/user`;

  async findManyForBest(
    regionId: string | null,
    queryType: string,
    base: number,
    limit: number
  ) {
    try {
      let url = `${this.url}/best?query-type=${queryType}&base=${base}&limit=${limit}`;
      if (regionId) {
        url += `&region-id=${regionId}`;
      }
      const res = await axios.get<AwardedUserLineDto[]>(url);

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

export const userSerivce = new UserService();
