const { cmd, citel } = require('../lib');

let greetingMessage = 'Hello! Thank you for reaching out. How can I assist you today?';

cmd({
  pattern: 'setgreeting',
  desc: 'Set the greeting message',
  category: 'utility',
}, async (Void, citel, text) => {
  const message = text.trim();
  greetingMessage = message;
  await citel.reply('Greeting message set successfully!');
});

citel.on('message', async (message) => {
  if (message.isDM && message.sender !== citel.user.jid) {
    await citel.sendMessage(message.sender, greetingMessage);
  }
});
