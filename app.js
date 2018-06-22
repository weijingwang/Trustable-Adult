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
  //detect "fuck" || "Fuck" || "shit" || "Shit" || "bitch" || "Bitch"
  if(command === "fuck") {
    message.channel.send("HEY!!! WHY DO YOU THINK THAT **LANGUAGE** IS **APPROPRIATE** ON **THIS** SERVER HUH???!!!");
  }
  if(command === "Fuck") {
    message.channel.send("HEY!!! WHY DO YOU THINK THAT **LANGUAGE** IS **APPROPRIATE** ON **THIS** SERVER HUH???!!!");
  }
  if(command === "shit") {
    message.channel.send("**not cool**");
  }
  if(command === "Shit") {
    message.channel.send("**not cool**");
  }
  if(command === "bitch") {
    message.channel.send("Did you mean: *a female dog, wolf, fox, or otter?*");
  }
  if(command === "Bitch") {
    message.channel.send("Did you mean: *a female dog, wolf, fox, or otter?*");
  }
  //sorry i type that it is against my religion but it is right sorry
  //commands
  if(command === "/ping") {
    message.channel.send("Pong!");
  }
  
  if(command === "/say") {

    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }

  if(command === "/info") {
    message.channel.send("ok so on June 22 2018, I made this bot\
      I saw a lot of bots but all of them didn't work for me and they made me\
      really mad. So I decided to make my own bot by glue coding since I\
      don't know javascript yeah?\
      this bot is currently run on my computer so it will only be on when I\
      am on so far. I might migrate it to somewhere else maybe.");
  }

  if(command === "/github") {
    message.channel.send("Here is the link to the Github Repo: https://github.com/weijingwang/Trustable-Adult");
  }

  if(command === "/vn") {
    message.channel.send("you wannna know huh huh? https://kawaiikitsunelover645.itch.io/sounds-of-the-night");
  }


//joke
var pickuplines = ["Are you a sea lion? Because I can sea you lion in my bed tonight!",
"I may not go down in history, but I'll go down on you.","Do you have an Asian passport? Because I'm China get into your Japantees",
"Are you a farmer? Because you’ve got some big, round, beautiful melons!","My love for you is like diarrhea. I just can't hold it in."];  
  
var random_pickupline = pickuplines[Math.floor(Math.random() * pickuplines.length)];


  if(command === "/pickupline") {
    message.channel.send(random_pickupline);
  }



//help
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
      },
      {
        name: "/pickupline",
        value: "say funny stuff (use of arrays)"
      },
      {
        name: "/info",
        value: "make me explain myself"
      },
      {
        name: "/github",
        value: "get github repo link"
      },
      {
        name: "/vn",
        value: "show suprise"
      }
    ],
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© 2018-" + current_year + " Weijing Wang"
    }
  }
});
  }

});

bot.login(config.token);