require('dotenv').config(); // Load environment variables from .env file
const { Client, GatewayIntentBits, Events } = require('discord.js'); // Import necessary classes


// Create a new client instance with required intents
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});


// Event handler for when the bot is ready
//client.once(Events.ClientReady, () => {
//  console.log(`Logged in as ${client.user.tag}!`);
//});
// Evento quando o bot está pronto
client.once('ready', () => {
  const channelId = 'aluguel'
  const channel = client.channels.cache.get(channelId)
  console.log(channel)
  console.log(`Bot is Online ${client.user.tag}`);
});


// ####### Mensagem Evento #########
// Evento quando uma mensagem é recebida
client.on('messageCreate', message => {
  // Ignora mensagens do próprio bot
  if (message.content === '!Bot') {
    message.reply('!Replying Testing Bot')
  };
});


// Event handler for message events
client.on(Events.MessageCreate, message => {
  // Avoid responding to the bot's own messages
  if (message.author.bot) return;

  // Respond to the !ping command
  if (message.content === '!ping') {
    message.reply('To com fome FDP!!!')
}});


// Evento quando uma mensagem é recebida
client.on('messageCreate', message => {
  // Ignora mensagens do próprio bot
  if (message.author.bot) {
    // Do nothing
  } else if (message.content === '!Msg') {
    message.reply('!Replying Testing Bot')
  };
});


//    else { message.reply('Morre!!!')};
//});
// ##################################


// ####### Mensagem Evento #########


// Evento quando uma mensagem é recebida
client.on('messageCreate', message => {
  // Ignora mensagens do próprio bot
  if (message.author.bot) return;

  // Verifica se a mensagem contém anexos
  if (message.attachments.size > 0) {
      const attachments = message.attachments.map(attachment => attachment.url);
      //console.log(attachments)

      // Verifica se o anexo é uma imagem
      const isImage = attachments.some(url => url.includes('.png') || url.includes('.jpg') || url.includes('.jpeg') || url.includes('.gif'));
      if (isImage) {
          message.channel.send('Você enviou uma imagem!');
      }
  }
});


// Evento quando uma mensagem é recebida
client.on('messageCreate', message => {
  // Ignora mensagens do próprio bot
  if (message.author.bot) return;

  // Verifica se a mensagem contém anexos
  const attachments = message.attachments.map(attachment => attachment.url);
  const isImage = attachments.some(url => url.includes('.png') || url.includes('.jpg') || url.includes('.jpeg') || url.includes('.gif'));

  if ((message.attachments.size > 0) && (isImage)) {
    const attachmentChannel = message.attachments.first()
    console.log(attachmentChannel['attachment']);
    message.channel.send('Você enviou uma imagem!');
    //console.log(attachmentChannel)

    //const CHANNEL_ID = 'aluguel'

    //const targetChannel = client.channels.cache.get(CHANNEL_ID);
    //console.log(targetChannel);

    //const channelCount = message.guild.channels.cache.size;
    //console.log(channelCount);

    //const channels = message.guild.channels.cache.map(channel => channel.name);
    //console.log(channels[2]);

    //const channelId = channels[2]
    //const channel = client.channels.cache.get(channelId);
    //console.log(channel)

    //client.channels.fetch(channel)
    //  .then(channel => channel.send('<@' + User + '>, no opponent responded...'))
    //  .catch(console.error);

    //const ch = client.channels.cache.get("aluguel");
    //console.log(ch)
  }
});




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  // Initialize attachments outside the if statement
  let attachments = [];

  if (message.attachments.size > 0) {
    attachments = message.attachments.map(attachment => attachment.url);
    console.log(attachments); // Logs an array of attachment URLs
  }

  const channel = client.channels.cache.get('1287040603049431041');
  if (channel) {
    // Send attachments if there are any
    if (attachments.length > 0) {
      channel.send(attachments.join('\n')); // Join URLs with line breaks
    }
    channel.send('Olá, esta é uma mensagem de teste!');
  } else {
    console.log('Canal não encontrado');
  }
});

  //const channel = client.channels.cache.get('1287040603049431041');
  //if (channel) {
  //  console.log(message_url)
  //  channel.send('Olá, esta é uma mensagem de teste!');
  //} else {
  //  console.log('Canal não encontrado');
  //}
//});




client.on('message', msg => {
  if (msg.content === '!!ping') {
    msg.reply('Pong!');
  }
});


// Log in the bot using the token from the environment variable
client.login(process.env.CLIENT_TOKEN);


//https://discordapp.com/api/webhooks/1285654063169540156/NnZO27R4tdxsJp-j9fDa8cOjcGIg1l7sGzm_sZs95E4KY7D360CR8UOVo6Omyyxk4zOv