import { NetworkError } from "@/error/network-error";
import { serverUrl } from "../url";
import axios, { AxiosResponse, HttpStatusCode } from "axios";
import { SignInRequestDto } from "../dto/auth/sign-in-request-dto";
import { SignInResponseDto } from "../dto/auth/sign-in-response.dto";
import {
  GetVerificationNumberReqDto,
  GetVerificationNumberResDto,
} from "../dto/auth/get-verification-number.dto";
import { NotFoundError } from "@/error/notfound-error";
import { VerifyVerificationNumber } from "../dto/auth/verify-verification-number.dto";

class AuthService {
  private url = `${serverUrl}/auth`;

  async signIn(dto: SignInRequestDto) {
    try {
      return axios.post<SignInRequestDto, SignInResponseDto>(`${this.url}`);
    } catch (err) {
      throw new NetworkError("network error occur");
    }
  }

  async getVerificationNumber(dto: GetVerificationNumberReqDto) {
    try {
      const res = await axios.post<
        GetVerificationNumberReqDto,
        AxiosResponse<GetVerificationNumberResDto>
      >(`${this.url}/verification-number/receive`, dto, {
        headers: {
          "Content-Type": `application/json`,
        },
      });
      
      if (res.status == HttpStatusCode.Created || res.status === HttpStatusCode.Ok) {
        return res.data;
      } else if (res.status == HttpStatusCode.NotFound) {
        throw new NotFoundError("Not Found");
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(err);
      throw new NetworkError("network error occur");
    }
  }

  async verifyVerificationNumber(dto: VerifyVerificationNumber) {
    try {
      const res = await axios.post<
        GetVerificationNumberReqDto,
        AxiosResponse<GetVerificationNumberResDto>
      >(`${this.url}/verification-number/verify`, dto, {
        headers: {
          "Content-Type": `application/json`,
        },
      });
      if (res.status == HttpStatusCode.Created || res.status === HttpStatusCode.Ok) {
        return res.data;
      } else if (res.status == HttpStatusCode.NotFound) {
        throw new NotFoundError("Not Found");
      } else {
        throw new Error();
      }
    } catch (err) {
      throw new NetworkError("network error occur");
    }
  }
}

export const authService = new AuthService();
