// Methods
import { getWABAId, getSharedWABAIds } from './debug'
import { register, businessProfile, deregister } from './phone'
import { 
  sendTemplateMessage,
  TemplateMessageOptions, 
  sendTextMessage, 
  TextMessageOptions, 
  sendReplyButton,
  SendReplyButtonOptions,
  markMessageAsRead, 
  replyToTextMessage, 
  ReplyToMessageOptions
} from './phone/messages'
import { getTemplates, createTemplate, TemplateType } from './account/messageTemplates'
import { getPhoneNumbers } from './account/getPhoneNumbers'

// Config definition
export type ClientConfigType = {
  wabaBusinessId: string
  apiKey: string
  phoneNumberId?: string | null
  webhookSecret?: string | null
}

// Main Class
class WABAccount {
  config: ClientConfigType = {
    wabaBusinessId: '',
    apiKey: '',
    phoneNumberId: '',
    webhookSecret: null
  }

  constructor({ apiKey, phoneNumberId, wabaBusinessId }: ClientConfigType) {
    if (!apiKey) {
      throw new Error('API Key missing')
    }
    this.config = {
      wabaBusinessId,
      apiKey,
      phoneNumberId,
    }
    // lookup available phone numbers
    if (!phoneNumberId) {
      getPhoneNumbers(this.config).then((data) => {
        if (!data.length) {
          throw new Error('No phone numbers on this account')
        }
        this.config.phoneNumberId = data[0].id
      })
    }
  }
  
  // Client methods
  getApiKey() {
    return this.config.apiKey;
  }

  getWABAid() {
    return getWABAId(this.config)
  }

  getSharedWABAIds() {
    return getSharedWABAIds(this.config)
  }

  getPhoneNumbers() {
    return getPhoneNumbers(this.config)
  }

  register(pin: string) {
    return register(this.config, pin)
  }

  deregister() {
    return deregister(this.config)
  }

  businessProfile() {
    return businessProfile(this.config)
  }

  getTemplates() {
    return getTemplates(this.config)
  }

  createTemplate(options: TemplateType) {
    return createTemplate(this.config, options)
  }

  sendTemplateMessage(options: TemplateMessageOptions) {
    return sendTemplateMessage(this.config, options)
  }

  sendTextMessage(options: TextMessageOptions) {
    return sendTextMessage(this.config, options)
  }

  sendReplyButton(options: SendReplyButtonOptions) {
    return sendReplyButton(this.config, options)
  }

  replyToTextMessage(options: ReplyToMessageOptions) {
    return replyToTextMessage(this.config, options)
  }

  markMessageAsRead(messageId: string) {
    return markMessageAsRead(this.config, messageId)
  }

}

export default WABAccount