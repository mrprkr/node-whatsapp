import { ClientConfigType } from ".."
import { graphApiRequest, handleError } from "../utils"


export const register = async (config: ClientConfigType, pin: string) => {
  try {
    const response = await graphApiRequest({
      config,
      path: `${config.phoneNumberId}/register`,
      method: 'POST',
      data: {
        "messaging_product": "whatsapp",
        pin
      }
    })
    return response
  } catch (err) {
    handleError(`${err}`)
  }
}


export default register