The node module for DiscordBotsList.us.to

Example:

```js
const Client = require("DiscordBotsList.us.to-JS");

const client = new Client(Bot_ID, API_Key);

client.setGuilds(100);
client.setChannels(500);
client.setUsers(500);

client.post();
```