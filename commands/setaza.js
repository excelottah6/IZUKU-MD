const { cmd } = require('../lib');
const filters = new Map();
 let recordedMessage = '';
const customFilters = new Map();

cmd({
   pattern: "setfilter",
   fromMe: true,
   desc: "Set a custom filter with trigger and response",
   category: "utility",
   type: "group"
 }, async (Void, citel, text) => {
   const args = text.split(' ');
   if (args.length < 3) {
     await citel.reply("Usage: setfilter 'trigger' 'response'");
     return;
   }

   const trigger = args[1].replace(/[\'\"\“]+/g, '');
   const response = args.slice(2).join(' ').replace(/[\'\"\“]+/g, '');

   if (customFilters.has(citel.jid)) {
     customFilters.get(citel.jid).set(trigger, response);
   } else {
     const filterMap = new Map();
     filterMap.set(trigger, response);
     customFilters.set(citel.jid, filterMap);
   }

   await citel.reply(`Filter set: "${trigger}" will trigger the response "${response}"`);
 });

// Create a message listener to check for custom filters
cmd({
   on: 'text',
   fromMe: false
 }, async (message, citel) => {
   if (customFilters.has(citel.jid)) {
     const filters = customFilters.get(citel.jid);
     const text = message.text;
     for (const [trigger, response] of filters) {
       if (text.includes(trigger)) {
         await citel.reply(response);
       }
     }
   }
 });



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
