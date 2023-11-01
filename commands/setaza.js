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
