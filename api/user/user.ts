import axios, { AxiosResponse, HttpStatusCode } from "axios";
import { serverUrl } from "../url";
import { NotFoundError } from "@/error/notfound-error";
import { NetworkError } from "@/error/network-error";
import { AwardedUserLineDto } from "../dto/user/awarded-user-line.dto";
import { CreateUserDto } from "../dto/user/create-user.dto";
import { SignInResDto } from "../dto/user/sign-in-res.dto";
import { UserDto } from "../dto/user/user.dto";

class UserService {
  private url = `${serverUrl}/user`;

  async findManyForBest(
    regionId: string | null,
    queryType: string,
    base: number,
    limit: number,
  ) {
    try {
      let url = `${this.url}/best?query-type=${queryType}&base=${base}&limit=${limit}`;
      if (regionId) {
        url += `&region-id=${regionId}`;
      }
      const res = await axios.get<AwardedUserLineDto[]>(url);

      if (
        res.status == HttpStatusCode.Ok ||
        res.status === HttpStatusCode.Created
      ) {
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

  async signUpWithEmail(dto: CreateUserDto) {
    try {
      const res = await axios.post<CreateUserDto, AxiosResponse<SignInResDto>>(
        this.url,
        dto,
        {
          headers: {
            "Content-Type": `application/json`,
          },
        }
      );

      if (
        res.status == HttpStatusCode.Ok ||
        res.status === HttpStatusCode.Created
      ) {
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

  async findUnique(userId: string) {
    try {
      const res = await axios.get<UserDto>(`${this.url}/${userId}`);
      if (
        res.status == HttpStatusCode.Ok ||
        res.status === HttpStatusCode.Created
      ) {
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
