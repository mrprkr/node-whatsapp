import { ClientConfigType } from '../lib';
declare type RequestOptions = {
    path: string;
    config: ClientConfigType;
    method?: 'GET' | 'POST' | 'PUT';
    contentType?: 'application/json' | 'multipart/form';
    data?: Object;
};
export declare const graphApiRequest: (options: RequestOptions) => import("axios").AxiosPromise<any>;
export declare const handleError: (err: string) => never;
export {};
