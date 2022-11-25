import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
} from "axios";
import axios from "axios";
import { baseURL } from "./config";
import LocalStorage from "./LocalStorage";

const headers: AxiosRequestConfig["headers"] = {
  "Content-Type": "application/json",
};

class Axios {
  private instance: AxiosInstance;
  private interceptor: number | null = null;

  constructor() {
    const instance = axios.create({
      baseURL,
      headers,
    });

    // request interceptor
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const jwt = LocalStorage.get("jwt");
        if (config.headers) {
          if (jwt) {
            config.headers.Authorization = `Bearer ${jwt}`;
          } else {
            delete config.headers.Authorization;
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // response interceptor
    const interceptor = instance.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      (error: AxiosError) =>
        Promise.reject(error.response && error.response.data) ||
        "Something went wrong"
    );

    this.instance = instance;
    this.interceptor = interceptor;
  }

  public get Instance(): AxiosInstance {
    return this.instance;
  }

  private useInterceptor() {
    if (this.interceptor === null) {
      const interceptor = this.instance.interceptors.response.use(
        (response: AxiosResponse) => response.data,
        (error: AxiosError) => Promise.reject(error)
      );
      this.interceptor = interceptor;
    }
  }

  private ejectInterceptor() {
    if (this.interceptor !== null) {
      this.instance.interceptors.response.eject(this.interceptor);
      this.interceptor = null;
    }
  }

  public get<T = any, R = T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    this.useInterceptor();
    return this.Instance.get<T, R>(url, config);
  }

  public post<T = any, R = T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ) {
    this.useInterceptor();
    return this.Instance.post<T, R>(url, data, config);
  }

  public put<T = any, R = T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ) {
    this.useInterceptor();
    return this.Instance.put<T, R>(url, data, config);
  }

  public delete<T = any, R = T>(url: string, config?: AxiosRequestConfig) {
    this.useInterceptor();
    return this.Instance.delete<T, R>(url, config);
  }

  public pull<T = any, R = T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ) {
    this.ejectInterceptor();
    return this.Instance.post<T, R>(url, data, config);
  }
}

const httpClient = new Axios();
export default httpClient;
