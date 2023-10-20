const { cmd,parsedJid } = require("../lib/");

cmd({
	pattern: 'save',
	fromMe: true,
	desc: 'forward replied msg to you',
	category: 'watsusi'
}, async (message, match) => {
	if (!message.reply_message) return await message.reply('_Reply to a message_')
	await message.client.forwardMessage(message.client.user.id, m.quoted_message, {
		contextInfo: {
			isForwarded: false
		}
	})
})
