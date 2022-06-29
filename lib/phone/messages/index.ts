// The foundation for all messages
export type BaseMessageOptions = {
  to: string
}

export { sendTextMessage, TextMessageOptions, replyToTextMessage, ReplyToMessageOptions } from './textMessage'
export { sendTemplateMessage, TemplateMessageOptions } from './templateMessage'
export { sendReplyButton, SendReplyButtonOptions } from './replyButton'
export { markMessageAsRead } from './markAsRead'