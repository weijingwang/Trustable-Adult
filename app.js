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
  bot.user.setActivity(`do /help Serving ${bot.guilds.size} servers`);
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
  //detect "fuck" || "shit" || "bitch"

  //use this function, checks if badWord is inside the system, if true, outputs stuffToSay
  function checkIfBadWords(badWord,stuffToSay) {
    if (command.toLowerCase().includes(badWord)) {
      //if command contains BadWord
      message.channel.send(stuffToSay);
      //send message to the channel stuffToSay
      return true;
    }
  }

  //the ".toLowerCase()" check all instances of the word, regardless of capitalization
checkIfBadWords("fuck","HEY!!! WHY DO YOU THINK THAT **LANGUAGE** IS **APPROPRIATE** ON **THIS** SERVER HUH???!!!");
checkIfBadWords("shit",'**not cool**, you know better, buddy! Try, "Bowel Movement" instead.');
checkIfBadWords("bitch","Did you mean: *a female dog, wolf, fox, or otter?*");
checkIfBadWords("vape","#VapeNation!!! #GoGreen! https://www.youtube.com/watch?v=Dkm8Hteeh6M");
//checkIfBadWords("penis","Hey, no good word! bad!");
//checkIfBadWords("xxx","Hey, no good word! bad!");

//counseling seccession
var sadArray = ["I'm sorry you're feeling sad. I'm here for you if you need anything.","If you want to talk, I'm a good listener!","Oh,no. It may not be much, but let me know if there is anything I can do for you.","I wish I had arms so I could give you a hug. But for now, maybe a joke or some music might help.",
""]
// if (checkIfBadWords("sad")) {
//   message.channel.send(sadArray[Math.floor(Math.random() * myArray.length)]);
// }

checkIfBadWords("sad",sadArray[Math.floor(Math.random() * sadArray.length)]);
  
checkIfBadWords("bonzibuddy","Y(^o^)Y https://www.youtube.com/watch?v=MiRaRy4Qq8g Y(^o^)Y");

  //sorry i type that it is against my religion but it is right sorry
  //commands 
  if(checkIfBadWords("/ping")) {
    message.channel.send("Pong!");
  }

  if(command === "<@459824205291192320>") {
    message.channel.send("hi!")    
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
      am on so far. I might migrate it to somewhere else maybe.\
      thank kyler for some python syntax --> js help!");
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
"Are you a farmer? Because you’ve got some big, round, beautiful melons!","My love for you is like diarrhea. I just can't hold it in.",
"That’s a beautiful smile, but it’d look even better if it was all you were wearing.","If you’re feeling down, I can feel you up.",
"I’m making a documentary on rare unique and exotic things on earth. Can we set up a lunch this afternoon to talk about you?",
"I’m going outside to make out. Care to join me?","Pizza is my second favourite thing to eat in bed."];

var random_pickupline = pickuplines[Math.floor(Math.random() * pickuplines.length)];


  if(command === "/pickupline") {
    message.channel.send(random_pickupline);
  }

//our product is quality that you can trust
var quality_quotes = ["A Trustable Adult is someone you can trust. Who can trust an adult who censors things?",
"Do you trust me? You should. I am a Trustable Adult.",
"Liars can't be trusted. I don't lie or hide things. You can trust me V(^_^)V",
"Trust can be built over time. Nice to meet you! I am Trustable Adult",
"A friend is someone you trust. Someone you trust is a friend.",
"I stand up for others when I can. I will call out anyone who tries to say any big boy words. >:(",
"Trust takes years to build, seconds to break, and forever to repair. I am a smart kitsune...",
"“The best way to find out if you can trust somebody is to trust them.” – Ernest Hemingway",
"“Whoever is careless with the truth in small matters cannot be trusted with important matters.” – Albert Einstein"];

var random_quote = quality_quotes[Math.floor(Math.random() * quality_quotes.length)];


  if(command === "/quote") {
    message.channel.send(random_quote);
  }



//help
  if(command === "/help") {

    message.channel.send({embed: {
    color: 3447003,
    description: "*I am a trustable adult and i help and i dont like bad boys/girls*/",
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
        name: "/quote",
        value: "get a quality quote about how Trustable Adult is trustable!!"
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
      },
      {
        name: "sad",
        value: "counseling session"
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
