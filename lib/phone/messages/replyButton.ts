import { ClientConfigType } from "../.."
import { graphApiRequest } from "../../utils"

type Button = {
  type: "reply",
  reply: {
      "id": string,
      "title": string
  }
}

export type SendReplyButtonOptions = {
  to: string
  body: string
  buttons: Button[]
}

export const sendReplyButton = async (config: ClientConfigType, options: SendReplyButtonOptions) => {
  const { to, body, buttons } = options
  const response = await graphApiRequest({
    config,
    path: `${config.phoneNumberId}/messages`,
    method: 'POST',
    data: {
      "messaging_product": "whatsapp",
      "recipient_type": "individual",
      to,
      "type": "interactive",
      "interactive": {
        "type": "button",
        "body": {
            "text": body
        },
        "action": {
            buttons
        }
      }
    }
  })
  return response
}