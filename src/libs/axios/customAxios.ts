import axios, { AxiosRequestConfig } from "axios";
import token from "../token/token";
import { ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY } from "src/constants/token/token.constants";
import CONFIG from "src/config/config.json";
import requestHandler from "./requestHandler";
import responseHandler from "./responseHandler";

const createAxiosInstance = (config?: AxiosRequestConfig) => {
  const ACCESS_TOKEN = token.getToken(ACCESS_TOKEN_KEY);
  const baseConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  return axios.create({
    ...baseConfig,
    ...config,
  });
};

export const bbeepAxios = createAxiosInstance({
  baseURL: CONFIG.serverUrl,
  headers: {
    "Content-Type" : "application/json",
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

export const bbeeepAxiosSetAccessToken = (newToken: string) => {
  bbeepAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${newToken}`;
};

bbeepAxios.interceptors.request.use(requestHandler as any, (response) => response);
bbeepAxios.interceptors.response.use((response) => response, responseHandler);
