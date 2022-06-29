import { ClientConfigType } from "../..";
declare type Button = {
    type: "reply";
    reply: {
        "id": string;
        "title": string;
    };
};
export declare type SendReplyButtonOptions = {
    to: string;
    body: string;
    buttons: Button[];
};
export declare const sendReplyButton: (config: ClientConfigType, options: SendReplyButtonOptions) => Promise<import("axios").AxiosResponse<any, any>>;
export {};
