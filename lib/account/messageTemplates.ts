import { ClientConfigType } from ".."
import { graphApiRequest, handleError } from "../utils"

// Returns the available templates
export const getTemplates = async (config: ClientConfigType) => {
  try {
    const response = await graphApiRequest({
      config,
      method: 'GET',
      path: `${config.wabaBusinessId}/message_templates`
    })
    // TODO handle any errors here
    return response.data.data
  } catch {(err: string) => handleError(err)}
}



// Creation of new templates
export type TemplateType = {
  category: 'ISSUE_RESOLUTION' | 'TRANSACTIONAL',
  components: { type: 'BODY' | 'HEADER' | 'FOOTER', text: string }[],
  name: string,
  language?: string
}

export const createTemplate = async (config: ClientConfigType, options: TemplateType) => {
  const {category, components, name, language = 'en'} = options
  try {
    const response = await graphApiRequest({
      config,
      method: 'POST',
      path: `${config.wabaBusinessId}/message_templates`,
      data: {
        category,
        components,
        name,
        language,
      }
    })
    return response.data
  } catch (err) {
    handleError(err as string)
  }
}