import { ClientConfigType } from "../.."
import { graphApiRequest } from "../../utils"


export const markMessageAsRead  = async (config: ClientConfigType, messageId: string) => {
  const response = await graphApiRequest({
    path: `${config.phoneNumberId}/messages`,
    config,
    method: 'PUT',
    data: {
      messaging_product: 'whatsapp',
      status: 'read',
      message_id: messageId,
    }
  })
  return response.data
}