import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_API,
    headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "d",
    },
});

export const createInstance = async <T>(
    config: AxiosRequestConfig,
    options?: AxiosRequestConfig,
): Promise<T> => {
    const response = await apiInstance({
        ...config,
        ...options,
    });
    return response.data;
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
