import { BaseMessageOptions } from "."
import { ClientConfigType } from "../.."
import { graphApiRequest, handleError } from "../../utils"

// Methods for working with templates messages
export interface TemplateMessageOptions extends BaseMessageOptions {
  templateName: string,
  languageLocale?: string // TODO change to valid locales
  components?: [{
    type: 'body' | string,
    parameters: any[]
  }]
}

export const sendTemplateMessage = async (config: ClientConfigType, options: TemplateMessageOptions) => {
  const { to, templateName, languageLocale = 'en', components } = options;

  try {
    const response = await graphApiRequest({
      config,
      method: 'POST',
      path: `${config.phoneNumberId}/messages/`,
      data: {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to,
        type: "template",
        template: {
          name: templateName,
          language: {
            code: languageLocale
          },
          components
        }
      }
    })

    return response.data
  } catch (err) {
    handleError(err as string)
  }
}

// {

//   "type": "template",
//   "template": {
//       "name": "template-name",
//       "language": {
//           "code": "language-and-locale-code"
//       },
//       "components": [
//           {
//               "type": "body",
//               "parameters": [
//                   {
//                       "type": "text",
//                       "text": "text-string"
//                   },
//                   {
//                       "type": "currency",
//                       "currency": {
//                           "fallback_value": "$100.99",
//                           "code": "USD",
//                           "amount_1000": 100990
//                       }
//                   },
//                   {
//                       "type": "date_time",
//                       "date_time": {
//                           "fallback_value": "February 25, 1977",
//                           "day_of_week": 5,
//                           "year": 1977,
//                           "month": 2,
//                           "day_of_month": 25,
//                           "hour": 15,
//                           "minute": 33,
//                           "calendar": "GREGORIAN"
//                       }
//                   }
//               ]
//           }
//       ]
//   }
// }
