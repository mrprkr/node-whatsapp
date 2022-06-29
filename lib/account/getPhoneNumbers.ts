import { ClientConfigType } from ".."
import { graphApiRequest } from "../utils"

export const getPhoneNumbers = async (config: ClientConfigType) => {
  const response = await graphApiRequest({
    method: 'GET',
    path: `${config.wabaBusinessId}/phone_numbers`,
    config
  })
  return response.data
}
