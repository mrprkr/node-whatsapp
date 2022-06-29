# node-whatsapp Alpha
Node library for interacting with whatsapp business API
Not all endpoints are working/added

### Getting started
```
// Create a new WABA client and initialise it with your fb/meta credentials

const client = new WABAClient({
  wabaBusinessId: process.env.WABA_BUSINESS_ID,
  apiKey: process.env.API_KEY,
  phoneNumberId: process.env.PHONE_NUMBER_ID, // if ommitted the first number on the account will be used
});
```

### Usage
Interact with the whatsapp API using the client, for example:

`const templates = await client.getTemplates()`
`const message = await client.sendTextMessage(options)`

See Examples folder for more details