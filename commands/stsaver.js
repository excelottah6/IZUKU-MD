cmd({
  pattern: "save",
  desc: 'Save WhatsApp status to log number',
  category: 'whatsapp',
  filename: __filename,
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
