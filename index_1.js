require('dotenv').config(); // Load environment variables from .env file
const { Client, GatewayIntentBits, Events } = require('discord.js'); // Import necessary classes

// Criação do cliente do bot
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// Evento quando o bot está pronto
client.once('ready', () => {
    console.log(`Bot está online como ${client.user.tag}`);
});

// Evento quando uma mensagem é recebida
client.on('messageCreate', message => {
    // Ignora mensagens do próprio bot
    if (message.author.bot) return;

    // Verifica se a mensagem contém anexos
    if (message.attachments.size > 0) {
        const attachments = message.attachments.map(attachment => attachment.url);
        console.log(attachments)
        // Verifica se o anexo é uma imagem
        const isImage = attachments.some(url => url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.gif'));
        if (isImage) {
            message.channel.send('Você enviou uma imagem!');
        }
    }
});


// Log in to Discord with your app's token
client.login(process.env.CLIENT_TOKEN);





client.on('ready', ()=>{
    client.channels.cache.get('1287040603049431041');
    console.log(client.channels.cache.get('1287040603049431041'))
  })
  
  
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    const message_url = message.attachments.first()
    const channel = client.channels.cache.get('1287040603049431041');
    if (channel) {
      console.log(message_url)
  
      channel.send('Olá, esta é uma mensagem de teste!');
    } else {
      console.log('Canal não encontrado');
    }
  });