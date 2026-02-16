import axios, { type CreateAxiosDefaults } from "axios";
import axiosRetry from "axios-retry";

const BASE_URL = "https://rail-stat.ru";

export function createAxiosInstance(
  options: CreateAxiosDefaults & { simple?: boolean } = {}
) {
  const axiosInstance = axios.create({
    ...options,
    timeout: 60000,
    baseURL: options.baseURL || `${BASE_URL}/api`,
  });

  if (!options.simple) {
    // Retry config
    axiosRetry(axiosInstance, {
      retries: 2,
      retryDelay: axiosRetry.exponentialDelay,
      retryCondition: (error) => {
        return (
          axiosRetry.isNetworkOrIdempotentRequestError(error) ||
          error.response?.status === 429
        );
      },
    });

    // Response interceptor
    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          // Token expired - try refresh or redirect to login
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.href = "/auth/login";
        }
        return Promise.reject(error);
      }
    );
  }

  return axiosInstance;
}

export const headers = (token: string) => ({
  Authorization: `Bearer ${token}`,
});
