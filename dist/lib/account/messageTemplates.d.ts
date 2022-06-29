import { ClientConfigType } from "..";
export declare const getTemplates: (config: ClientConfigType) => Promise<any>;
export declare type TemplateType = {
    category: 'ISSUE_RESOLUTION' | 'TRANSACTIONAL';
    components: {
        type: 'BODY' | 'HEADER' | 'FOOTER';
        text: string;
    }[];
    name: string;
    language?: string;
};
export declare const createTemplate: (config: ClientConfigType, options: TemplateType) => Promise<any>;
