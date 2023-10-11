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
  pattern: "delaza",
  desc: "Delete the recorded account number",
  category: "utility",
}, async (Void, citel) => {
  recordedMessage = ''; // Delete the recorded message
  await citel.reply("Account number deleted.");
});

cmd({
  on: "text",
}, async (Void, citel, text) => {
  if (/(\bsend aza\b)/i.test(text)) {
    const sender = citel.sender;
    if (recordedMessage !== '') {
      await citel.sendMessage(sender, recordedMessage);
    } else {
      await citel.reply("No account number recorded.");
    }
  }
});
