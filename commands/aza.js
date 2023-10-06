const { cmd, citel } = require('../lib');

let recordedMessage = '';

cmd({
  pattern: 'setaza',
  desc: 'Store a message as an account number',
  category: 'utility',
}, async (Void, citel, text) => {
  const message = text.trim();
  recordedMessage = message;
  await citel.reply(`Account number recorded: "${message}"`);
});

citel.on('message', async (message) => {
  if (message.isDM && /send aza/i.test(message.text)) {
    if (recordedMessage !== '') {
      await citel.sendMessage(message.sender, recordedMessage);
    } else {
      await citel.sendMessage(message.sender, 'No account number recorded.');
    }
  }
});
