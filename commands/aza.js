const { cmd } = require('../lib');

let recordedMessage = '';

cmd({
  pattern: "setaza",
  desc: "Store a message as account number",
  category: "utility",
}, async (Void, citel, text) => {
  const message = text.trim();
  recordedMessage = message;
  await citel.reply(`Account number recorded: "${message}"`);
});

cmd({
  on: "text",
}, async (Void, citel, text) => {
  if (/send aza/i.test(text)) {
    const sender = citel.sender;
    if (recordedMessage !== '') {
      await citel.sendMessage(sender, recordedMessage);
    } else {
      await citel.sendMessage(sender, "No account number recorded.");
    }
  }
});
