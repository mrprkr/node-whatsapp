import { TemplateMessageOptions, TextMessageOptions, SendReplyButtonOptions, ReplyToMessageOptions } from './phone/messages';
import { TemplateType } from './account/messageTemplates';
export declare type ClientConfigType = {
    wabaBusinessId: string;
    apiKey: string;
    phoneNumberId?: string | null;
    webhookSecret?: string | null;
};
declare class WABAccount {
    config: ClientConfigType;
    constructor({ apiKey, phoneNumberId, wabaBusinessId }: ClientConfigType);
    getApiKey(): string;
    getWABAid(): Promise<any>;
    getSharedWABAIds(): Promise<any>;
    getPhoneNumbers(): Promise<any>;
    register(pin: string): Promise<import("axios").AxiosResponse<any, any> | undefined>;
    deregister(): Promise<import("axios").AxiosResponse<any, any> | undefined>;
    businessProfile(): Promise<import("./phone/businessProfile").BusinessProfileType>;
    getTemplates(): Promise<any>;
    createTemplate(options: TemplateType): Promise<any>;
    sendTemplateMessage(options: TemplateMessageOptions): Promise<any>;
    sendTextMessage(options: TextMessageOptions): Promise<any>;
    sendReplyButton(options: SendReplyButtonOptions): Promise<import("axios").AxiosResponse<any, any>>;
    replyToTextMessage(options: ReplyToMessageOptions): Promise<any>;
    markMessageAsRead(messageId: string): Promise<any>;
}
export default WABAccount;
