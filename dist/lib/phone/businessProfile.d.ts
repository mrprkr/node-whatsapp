import { ClientConfigType } from "..";
export declare type BusinessProfileType = {
    "messaging_product": "whatsapp";
    "address": string;
    "description": string;
    "vertical": string;
    "email": string;
    "websites": string[];
    "profile_picture_url": string;
    "id": string;
};
export declare const businessProfile: (config: ClientConfigType) => Promise<BusinessProfileType>;
export default businessProfile;
