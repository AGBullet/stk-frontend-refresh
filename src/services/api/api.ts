import { createAxiosInstance, headers } from "./config";
import type { Dictionary } from "@/types/api";

const api = createAxiosInstance();
const simpleApi = createAxiosInstance({ simple: true });

export class API {
  static get _headers() {
    return headers(API.TOKEN);
  }

  private static _concat(base: string, method?: string) {
    if (!method) return base;
    else if (base === "") return method;
    return base + "/" + method;
  }

  static TOKEN = "";

  static checkToken() {
    if (API.TOKEN === "") throw new Error("Необходима авторизация");
  }

  static async getData<T = any>(
    base: string,
    method?: string,
    params?: Dictionary<string | number>
  ): Promise<T> {
    API.checkToken();
    const response = await api.get(API._concat(base, method), {
      params,
      headers: API._headers,
    });
    return response.data;
  }

  static async get<T = any>(
    base: string,
    method?: string,
    params?: Dictionary<string | number>
  ) {
    API.checkToken();
    return api.get<T>(API._concat(base, method), {
      params,
      headers: API._headers,
    });
  }

  static async post<T = any>(
    base: string,
    method?: string,
    data?: any,
    params?: Dictionary<string | number>
  ): Promise<T> {
    API.checkToken();
    const response = await api.post(API._concat(base, method), data, {
      params,
      headers: API._headers,
    });
    return response.data;
  }

  static async put<T = any>(
    base: string,
    method?: string,
    data?: any,
    params?: Dictionary<string | number>
  ): Promise<T> {
    API.checkToken();
    const response = await api.put(API._concat(base, method), data, {
      params,
      headers: API._headers,
    });
    return response.data;
  }

  static async postOnce<T = any>(
    base: string,
    method?: string,
    data?: any,
    params?: Dictionary<string | number>
  ): Promise<T> {
    API.checkToken();
    const response = await simpleApi.post(API._concat(base, method), data, {
      params,
      headers: API._headers,
    });
    return response.data;
  }

  static async getGuest<T = any>(
    url: string,
    params?: Dictionary<string | number>
  ): Promise<T> {
    const response = await simpleApi.get(url, { params });
    return response.data;
  }

  static async postGuest<T = any>(
    base: string,
    method?: string,
    data?: any,
    params?: Dictionary<string | number>
  ): Promise<T> {
    const response = await simpleApi.post(API._concat(base, method), data, {
      params,
    });
    return response.data;
  }

  static async delete<T = any>(
    base: string,
    method?: string,
    params?: Dictionary<string | number>,
    data?: any
  ): Promise<T> {
    API.checkToken();
    const response = await api.delete(API._concat(base, method), {
      params,
      headers: API._headers,
      data,
    });
    return response.data;
  }
}
