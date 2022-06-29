import { ClientConfigType } from ".."
import { graphApiRequest, handleError } from "../utils"

export const getWABAId = async (config: ClientConfigType) => {
  try {
    const response = await graphApiRequest({
      config,
      method: 'GET',
      path: 'debug_token'
    })
    return response.data
  } catch {(err: string) => handleError(err)}
}

export const getSharedWABAIds = async (config: ClientConfigType) => {
  try {
    const response = await graphApiRequest({
      config,
      method: 'GET',
      path: `${config.wabaBusinessId}/client_whatsapp_business_accounts`
    })
    console.log(`RES`, response)
    return response.data
  } catch {(err: string) => handleError(err)}
}