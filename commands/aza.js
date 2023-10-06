const { cmd, citel } = require('../lib');

let recordedMessage = '';

cmd({
  pattern: 'setaza',
  desc: 'Store a message as an account number',
  category: 'utility'
}, async (message, match) => {
  const text = match[1];
  recordedMessage = text.trim();
  await citel.reply(`Account number recorded: "${recordedMessage}"`);
});

citel.on('message-new', async (message) => {
  if (message.isGroup) return; // Ignore group messages
  if (message.message.startsWith('send aza', 'case')) {
    if (recordedMessage !== '') {
      await citel.sendMessage(message.jid, recordedMessage);
    } else {
      await citel.sendMessage(message.jid, 'No account number recorded.');
    }
  }
});
