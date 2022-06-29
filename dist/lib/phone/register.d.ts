import { ClientConfigType } from "..";
export declare const register: (config: ClientConfigType, pin: string) => Promise<import("axios").AxiosResponse<any, any> | undefined>;
export default register;
