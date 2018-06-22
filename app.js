const Discord = require("discord.js");

const bot = new Discord.Client();

const config = require("./config.json");

const current_year = new Date().getFullYear();

bot.on("ready", () => {
  console.log(`Botbot start with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); 
  bot.user.setActivity(`do /help`);
});

bot.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});

bot.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});

bot.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  
  if(command === "/ping") {
    message.channel.send("Pong!");
  }
  
  if(command === "/say") {

    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }

  if(command === "/info") {
    message.channel.send("ok so on June 22, ");
  }

  if(command === "/help") {

    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username + "'s",
      icon_url: bot.user.avatarURL
    },
    title: "xX_HELP_Xx",
    fields: [{
        name: "/ping",
        value: "I say Pong!"
      },
      {
        name: "/say",
        value: "make me say something"
      }
      {
        name: "/info"
        value: "make me explain myself"
      }
    ],
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© 2018 " + current_year + " Weijing Wang"
    }
  }
});
  }

});

bot.login(config.token);