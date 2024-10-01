//https://discordapp.com/api/webhooks/1285654063169540156/NnZO27R4tdxsJp-j9fDa8cOjcGIg1l7sGzm_sZs95E4KY7D360CR8UOVo6Omyyxk4zOv

require('dotenv').config(); // Load environment variables from .env file
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, GatewayIntentBits, Events } = require('discord.js'); // Import necessary classes

// Create a new client instance with required intents
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

// FROM textRecognizer.js
const recognizeText = require('./textRecognizer');
const imageUrl = 'https://tesseract.projectnaptha.com/img/eng_bw.png';

/*
// Call the function
imageToText = recognizeText(imageUrl);
recognizeText(imageUrl);
*/


// Event handler for when the bot is ready
client.once('ready', () => {
  console.log(`Bot is Online ${client.user.tag}`);
});

/*
client.once(Events.ClientReady, () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
*/



//const functionName = (parameters) => {
  // function body
//};

const function_One = () => {
  console.log('Arrow Function')
  const message = 'Arrow Function';
  return message
};


// Evento quando uma mensagem é recebida
client.on('messageCreate', message => {
  // Ignora mensagens do próprio bot
  if (message.author.bot) {
    // Do nothing
  } else if (message.content === '!msg') {
    message.reply('!Replying Testing Bot')
  };
});


client.on('messageCreate', async (message) => {
  // Ignora mensagens do próprio bot
  //if (message.author.bot) {
    // return
  //}
  if (message.author.bot) {
    // Do nothing
  } else if (message.content === '!Testing') {
    message.reply('The betters days are coming!!');
    message.reply(function_One())
  };
});



// ####### Mensagem Evento #########
// Evento quando uma mensagem é recebida
client.on('messageCreate', async (message) => {
  // Ignora mensagens do próprio bot
  if (message.author.bot) {
    // Do nothing
  };

  // Verifica se a mensagem contém anexos
  const attachments = message.attachments.map(attachment => attachment.url);
  const isImage = attachments.some(url => url.includes('.png') || url.includes('.jpg') || url.includes('.jpeg') || url.includes('.gif'));
  const value = attachments[0]
  const channel = client.channels.cache.get('1287040603049431041');
  if ((message.attachments.size > 0) && (isImage)) 
    {
      console.log(attachments[0]);
      //console.log(attachments)
      message.channel.send(`Image !!! ${value}`);
  }

  if (channel) 
    try {
      if (attachments.length > 0) {
        const imageToText = await recognizeText(imageUrl)
        channel.send(`Image is sending back !!! ${value}`); // Join URLs with line breaks
        channel.send(`${imageToText}`)
      }
    } catch {
      console.log('dasdasdadasda')      
    }
});



/*
// Verifica se a mensagem contém anexos
const channel = client.channels.cache.get('1287040603049431041');
if (channel) 
  try {
      const imageToText = await recognizeText(imageUrl)
      channel.send(`${imageToText}`); // Join URLs with line breaks
      console.log(imageToText[0])
  } catch {
    console.log('dasdasdadasda')      
  }
*/


// SLASH COMMANDS
// Your bot token and client ID
const { CLIENT_TOKEN, CLIENT_ID, GUILD_ID } = process.env;

// REGISTERING COMMANDS
const rest = new REST({ version: '9' }).setToken(CLIENT_TOKEN);

const commands = [
  {
    name: 'hello',
    description: 'Replies with Hello!',
  },
  {
    name: 'idiot',
    description: 'Replies with FUCK YOU!!!',
  },
];


/*
// ##### ASYNC #####
(async () => {
  try {
      console.log('Started refreshing application (/) commands.');

      await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
          body: commands,
      });

      console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
      console.error(error);
  }
})();
// ###################
*/


rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
  body: commands,
  // commands from REGISTERING COMMANDS
})
.then(() => {
  console.log('Successfully reloaded application (/) commands.');
})
.catch((error) => {
  console.error(error);
});


/*
// ##### DESTRUCTURING #####
const person = {
  name: 'Alice',
  age: 25,
  city: 'Wonderland'
};

// Destructuring
const { name, age } = person;

console.log(name); // Output: Alice
console.log(age);  // Output: 25
// #########################
*/

client.on('interactionCreate', async (interaction) => {
  //if (!interaction.isCommand()) return;
  if (!interaction.isCommand()) {
    // ! operator is a logical NOT
    // if the interaction is not a command.
    // DO nothing
  };
  //const { commandName } = interaction;
  // Destructuring
  const commandName = interaction.commandName;
  if (commandName === 'hello') {
      await interaction.reply('Hello!');
  }
  if (commandName === 'idiot') {
    await interaction.reply('FUCK YOU!!!');
}
});


// ### Mongo Atlas ###
const mongoose = require('mongoose');


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Log in the bot using the token from the environment variable
client.login(process.env.CLIENT_TOKEN);