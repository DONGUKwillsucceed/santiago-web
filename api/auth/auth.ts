import { NetworkError } from "@/error/network-error";
import { serverUrl } from "../url";
import axios from "axios";
import { SignInRequestDto } from "../dto/auth/sign-in-request-dto";
import { SignInResponseDto } from "../dto/auth/sign-in-response.dto";

class AuthService {
    private url = `${serverUrl}/auth`;

    async signIn(dto: SignInRequestDto) {
        try {
            return axios.post<SignInRequestDto, SignInResponseDto>(`${this.url}`);
        } catch(err) {
            throw new NetworkError("network error occur");
        }
    }
}

export const authService = new AuthService();