import { ApiError } from "./ApiError";

export type ApiResponse<T = null> = {
    error: ApiError
    data?: T
};