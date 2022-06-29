import { BaseMessageOptions } from "."
import { ClientConfigType } from "../.."
import { graphApiRequest, handleError } from "../../utils"

// Send a basic text message
export interface TextMessageOptions extends BaseMessageOptions {
  previewUrl?: boolean
  body: string
}

export const sendTextMessage = async (config: ClientConfigType, options: TextMessageOptions) => {
  const { to, body, previewUrl = false } = options
  try {
    const response = await graphApiRequest({
      config,
      method: "POST",
      path: `${config.phoneNumberId}/messages`,
      data: {
        messaging_product: "whatsapp",
        preview_url: previewUrl,
        recipient_type: "individual",
        to: to,
        type: "text",
        text: {
          "body": body
        }
      }
    })
    return response.data
  } catch (err) {
    handleError(err as string)
  }
}


// Reply to a message
export interface ReplyToMessageOptions extends BaseMessageOptions {
  messageId: string
  body: string
  previewUrl: boolean
}

export const replyToTextMessage = async (config: ClientConfigType, options: ReplyToMessageOptions) => {
  const { to, body, previewUrl = false, messageId } = options
  try {
    const response = await graphApiRequest({
      config,
      method: "POST",
      path: `${config.phoneNumberId}/messages`,
      data: {
        "context": {
          "message_id": messageId
        },
        "messaging_product": "whatsapp",
        "preview_url": previewUrl,
        "recipient_type": "individual",
        "to": to,
        "type": "text",
        "text": {
          "body": body
        }
      }
    })
    return response.data.data
  } catch (err) {
    handleError(err as string)
  }
}