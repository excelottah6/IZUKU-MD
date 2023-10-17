const { cmd } = require('../lib');

 let recordedMessage = '';

 cmd({
   pattern: "setaza",
   desc: "Store a message as account number",
   category: "utility",
 }, async (Void, citel, text) => {
   // Check if a message is already recorded
   if (recordedMessage === '') {
     const message = text.trim();
     recordedMessage = message;
     await citel.reply(`Account number recorded: "${message}"`);
   } else {
     await citel.reply("A message is already recorded.");
   }
 });
 //-------------------------------------------------------------
 cmd({
   pattern: "delaza",
   desc: "Delete the recorded account number",
   category: "utility",
 }, async (Void, citel) => {
   recordedMessage = '';
   await citel.reply("Account number deleted.");
 });

 cmd({
   on: "text",
 }, async (Void, citel, text) => {
   if (/(\baza\b|\bsend aza\b|\baccount number\b)/i.test(text) && recordedMessage) {
     await citel.reply(recordedMessage);
   }
 });
//-------------------------------------------_______________________----------
cmd({
  pattern: "save",
  desc: "Save a message to yourself",
  category: "utility",
  fromMe: true, // Restrict the command to be triggered by the bot's owner only
}, async (message, match) => {
  const repliedMessage = await message.getReplyMessage(); // Get the replied message

  if (!repliedMessage || !repliedMessage.message) {
    await message.reply("Please reply to a message to save it.");
    return;
  }

  const ownerJid = message.jid; // Use the owner's JID as the chat ID
  const savedMessage = repliedMessage.message; // Get the replied message

  await text.sendMessage(ownerJid, savedMessage); // Send the saved message to the owner's "Message Yourself" chat
  await message.reply("Message saved successfully!");
});
