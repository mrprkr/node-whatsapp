import { ClientConfigType } from ".."
import { graphApiRequest } from "../utils"

export type BusinessProfileType = {
  "messaging_product": "whatsapp"
  "address": string
  "description": string
  "vertical": string
  "email": string
  "websites": string[]
  "profile_picture_url": string
  "id": string
}

export const businessProfile = async (config: ClientConfigType) => {
  try {
    const response = await graphApiRequest({
      config,
      method: "GET",
      path: `${config.phoneNumberId}/whatsapp_business_profile?fields=about,address,description,email,profile_picture_url,websites,vertical`
    })
    return response.data.data as BusinessProfileType
  } catch (err) {
    throw new Error(err as string)
  }
}

export default businessProfile