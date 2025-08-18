import type { AxiosRequestConfig } from "axios";
import axios from "axios";

export const baseAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosGet = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await baseAxiosInstance.get<T>(url, config);

  return response.data;
};

export const axiosPost = async <T, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await baseAxiosInstance.post<T>(url, body, config);

  return response.data;
};

export const axiosPut = async <T, B>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await baseAxiosInstance.put<T>(url, body, config);

  return response.data;
};
