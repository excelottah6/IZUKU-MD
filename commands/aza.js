const { bot, cmd } = require('../lib');

// Your bank account number
let aza = "";

// Command to add account number
cmd({
  pattern: "/setaza(.+)/i",
  desc: "Add bank account number",
  category: "utility",
}, async (Void, citel, match) => {
  accountNumber = match[1];
  await citel.reply("Account number added successfully!");
});

// Trigger message for sending account number
bot.on("message", async (message) => {
  if (message.body.toLowerCase().includes("send aza")) {
    await message.reply(`Your account number is: ${aza}`);
  }
});
