import {
  API_LOGIN,
  API_LOGOUT,
  API_PROFILE,
  API_REGIS,
} from "constants/api-path";
import { User } from "types/user";
import httpClient from "utils/http-client";

export interface LoginParams {
  identifier: string;
  password: string;
}

export interface RegisParams {
  username: string;
  email: string;
  password: string;
}

interface AuthResponse {
  jwt: string;
  user: User;
}

const signIn = (params: LoginParams) => {
  return httpClient.post<typeof params, AuthResponse>(API_LOGIN, params);
};

const signUp = (params: RegisParams) => {
  return httpClient.post<typeof params, AuthResponse>(API_REGIS, params);
};

const signOut = () => {
  return httpClient.get<null, null>(API_LOGOUT);
};

const logProfile = () => {
  return httpClient.get<null, null>(API_PROFILE);
};

export { signUp, signIn, signOut, logProfile };
