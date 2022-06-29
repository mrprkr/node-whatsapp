import { BaseMessageOptions } from ".";
import { ClientConfigType } from "../..";
export interface TextMessageOptions extends BaseMessageOptions {
    previewUrl?: boolean;
    body: string;
}
export declare const sendTextMessage: (config: ClientConfigType, options: TextMessageOptions) => Promise<any>;
export interface ReplyToMessageOptions extends BaseMessageOptions {
    messageId: string;
    body: string;
    previewUrl: boolean;
}
export declare const replyToTextMessage: (config: ClientConfigType, options: ReplyToMessageOptions) => Promise<any>;
