import { Observable } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { ApiResponse } from "./types/ApiResponse";

export class ApiClient{
    public Get<T = null>(endpointUri: string): Observable<AjaxResponse<ApiResponse<T>>>{
        return ajax.get<ApiResponse<T>>(endpointUri);
    }
    protected Post<T = null>(endpointUri: string, data?: any): Observable<AjaxResponse<ApiResponse<T>>>{
        return ajax.post<ApiResponse<T>>(endpointUri, data);
    }
}