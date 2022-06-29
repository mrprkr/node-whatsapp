import 'dotenv/config'
import WABAClient from '../lib';
import { TemplateType } from '../lib/account/messageTemplates';
import { TemplateMessageOptions } from '../lib/phone/messages';

// Create a new WABA client and initialise it with your credentials
const client = new WABAClient({
  wabaBusinessId: process.env.WABA_BUSINESS_ID || '',
  apiKey: process.env.API_KEY || '',
  phoneNumberId: process.env.PHONE_NUMBER_ID || '', // if ommitted the first number on the account will be used
  // webhookSecret
});


// Get the business profile
const getProfile = async () => {
  const profile = await client.businessProfile()
  console.log(profile)
}

// Get available templates
const getTemplates = async () => {
  const templates = await client.getTemplates()
  console.log(templates[0])
}

const sendTemplateMessage = async (to: string) => {
  const options: TemplateMessageOptions = {
    to,
    templateName: 'welcome_message_generic', // Your template name
    languageLocale: 'en',
  }
  const response = await client.sendTemplateMessage(options)
  console.log(response)
}

const createTemplate = async () => {
  const options: TemplateType = {
    category: 'TRANSACTIONAL',
    name: 'welcome_notification',
    components: [{type: 'BODY', text: 'Welcome to notifications'}]
  }
  const response = await client.createTemplate(options)
}

const sendTextMessage = async (to: string) => {
  const options = {
    to,
    body: 'This is a follow up message with any content we can send for upto 24 hours after the user replies to one of our tempalate messages'
  }
  const response = await client.sendTextMessage(options)
  console.log(response)
}

const getWABA = async () => {
  const response = await client.getSharedWABAIds()
  console.log(response)
}