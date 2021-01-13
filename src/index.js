const Axios = require("axios");

module.exports = class {
    constructor(bot_id, api_key) {
        if(!bot_id) {
            throw "Bot ID required.";
        }

        if(!api_key) {
            throw "API Key required.";
        }

        this.bot_id = bot_id;
        this.api_key = api_key;
        this.data = {api_key: api_key};
    }

    setGuilds(guilds) {
        guilds = parseInt(guilds);

        this.data.guilds = guilds;
    }

    setChannels(channels) {
        channels = parseInt(channels);

        this.data.channels = channels;
    }
    
    setUsers(users) {
        users = parseInt(users);

        this.data.users = users;
    }

    post() {
        const data = this.data;

        Axios.post(`https://discordbotslist.us.to/api/bot/stats/${this.bot_id}`, {...data, api_key: this.api_key}).then(res => {
            if(res.data.error) {
                console.log(res.data.error);
            }else {
                console.log(res.data.msg);
            }
        }).catch(err => {
            console.log("Failed to update the bot stats.");
        });
    }
}