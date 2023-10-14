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
  if (/send aza/i.test(text)) {
    const sender = citel.sender;
    if (recordedMessage !== '') {
      await citel.sendMessage(sender, recordedMessage);
    }
  }
});
//--------------------------------------------------------------
cmd({
  pattern: "save",
  desc: "Save WhatsApp status to log number",
  category: "utility",
},
async (msg, text, { cmdName, isCreator }) => {
  if (!isCreator) return await msg.send(tlang().owner);
  if (!msg.quoted) return await msg.send("*hey Please, reply to a Message*");
  const status = await msg.quoted.getStatus();
  const logNumber = await getLogNumber();
  const date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
  const message = `Status saved to log number ${logNumber} on ${date}`;
  await msg.send(message);
  await saveStatus(status, logNumber);
});

function getLogNumber() {
  return logNumber;
}

function saveStatus(status, logNumber) {
}
