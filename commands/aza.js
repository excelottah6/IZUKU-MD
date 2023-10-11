const { cmd } = require('../lib');

let recordedMessage = '';
let owner = ''; // Initialize owner as an empty string

cmd({
  pattern: "setowner",
  desc: "Set the bot owner",
  category: "utility",
  fromMe: true, // Make it a private command for the owner
}, async (Void, citel, match) => {
  if (citel.sender === owner) {
    owner = match[1].trim(); // Set the owner when they use this command
    await citel.reply(`Owner set as: "${owner}"`);
  } else {
    await citel.reply("You don't have permission to set the owner.");
  }
});

cmd({
  pattern: "setaza",
  desc: "Store a message as account number",
  category: "utility",
  fromMe: true, // Make it a private command for the owner
}, async (Void, citel, match) => {
  if (citel.sender === owner) {
    const message = match[1].trim();
    recordedMessage = message;
    await citel.reply(`Account number recorded: "${message}"`);
  } else {
    await citel.reply("You don't have permission to set the account number.");
  }
});

cmd({
  pattern: "delaza",
  desc: "Delete the recorded account number",
  category: "utility",
  fromMe: true, // Make it a private command for the owner
}, async (Void, citel) => {
  if (citel.sender === owner) {
    recordedMessage = '';
    await citel.reply("Account number deleted.");
  } else {
    await citel.reply("You don't have permission to delete the account number.");
  }
});

cmd({
  on: "text",
}, async (Void, citel, text) => {
  if (text && text.toLowerCase().includes("send aza")) {
    if (recordedMessage) {
      await citel.reply(recordedMessage);
    } else {
      await citel.reply("No account number recorded.");
    }
  }
});
