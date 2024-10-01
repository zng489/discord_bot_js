const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = 'SEU_TOKEN_AQUI';
const CHANNEL_ID = 'ID_DO_CANAL_DE_DESTINO';

client.on('messageCreate', async (message) => {
    // Ignora mensagens do bot
    if (message.author.bot) return;

    // Verifica se a mensagem tem anexos
    if (message.attachments.size > 0) {
        const attachment = message.attachments.first();
        
        // Checa se o arquivo é uma imagem e contém "casa" no nome
        if (attachment.contentType.startsWith('image/') && attachment.name.toLowerCase().includes('casa')) {
            const targetChannel = client.channels.cache.get(CHANNEL_ID);
            
            if (targetChannel) {
                await targetChannel.send({
                    content: `Imagem de casa enviada por ${message.author}:\n`,
                    files: [attachment.url],
                });
                await message.channel.send('A imagem foi movida para o canal apropriado.');
            } else {
                console.error('Canal de destino não encontrado.');
            }
        }
    }
});

client.login(TOKEN);
