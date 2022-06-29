import { BaseMessageOptions } from ".";
import { ClientConfigType } from "../..";
export interface TemplateMessageOptions extends BaseMessageOptions {
    templateName: string;
    languageLocale?: string;
    components?: [
        {
            type: 'body' | string;
            parameters: any[];
        }
    ];
}
export declare const sendTemplateMessage: (config: ClientConfigType, options: TemplateMessageOptions) => Promise<any>;
