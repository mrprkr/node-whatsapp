import axios from "axios"
import {ClientConfigType} from '../lib'

type RequestOptions = {
  path: string
  config: ClientConfigType
  method?: 'GET' | 'POST' | 'PUT'
  contentType?: 'application/json' | 'multipart/form'
  data?: Object
}

// Construct the promise which will be resolved by the specific endpoint controllers
export const graphApiRequest = (options: RequestOptions) => {
  let { path, method = "GET", data, config } = options
  console.log(`${method}: ${path}`)

  if (!config.apiKey) {
    throw new Error('API Key is missing')
  }

  if (!path.length) {
    throw new Error('No path specified')
  }

  // Strip the path of a leading '/' if supplied
  path = path.charAt(0) === '/' ? path.substring(1) : path;
  return axios({
    url: `https://graph.facebook.com/v13.0/${path}`,
    method,
    headers: {
      'Authorization': `Bearer ${config.apiKey}`,
      'content-type': 'application/json'
    },
    data : data ? JSON.stringify(data) : null
  })
}

export const handleError = (err: string) => {
  throw new Error(err)
}