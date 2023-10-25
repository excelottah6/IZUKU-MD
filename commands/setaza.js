const { cmd } = require('../lib');
const filters = new Map();
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
   pattern: "sa",
   fromMe: true,
   desc: "Set a filter message in any chat",
   category: "utility",
 }, async (Void, citel, text) => {
   match = text.match(/[\'\"\“](.*?)[\'\"\“]/gsm);

   if (match === null) {
     if (!filters.has(citel.jid) || filters.get(citel.jid).size === 0) {
       await citel.reply('_There are no filters in this chat!_');
     } else {
       var msg = '_Here are your filters in this chat:_\n';
       filters.get(citel.jid).forEach((value, key) => {
         msg += '```' + key + '```\n';
       });
       await citel.reply(msg);
     }
   } else {
     if (match.length < 2) {
       return await citel.reply(`*Need text!*\nExample: setaza 'hi' 'hello'`);
     }

     if (!filters.has(citel.jid)) {
       filters.set(citel.jid, new Map());
     }

     filters.get(citel.jid).set(match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, ''));
     await citel.reply('_Successfully set_ ```' + match[0].replace(/['"]+/g, '') + '``` _to filter!_');
   }
 });
