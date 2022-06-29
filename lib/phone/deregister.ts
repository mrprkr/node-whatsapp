import { ClientConfigType } from ".."
import { graphApiRequest, handleError } from "../utils"

export const deregister = async (config: ClientConfigType) => {
  try {
    const response = await graphApiRequest({
      config,
      method: 'POST',
      path: `${config.phoneNumberId}/deregister`
    })
    // TODO add the types for this response
    return response
  } catch (err) {
    handleError(`${err}`)
  }
}

export default deregister