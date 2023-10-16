const { cmd } = require('../lib');

cmd({
  pattern: "save",
  desc: "Save status to the chat.",
  category: "misc",
  filename: __filename,
  fromMe: true, // Ensure it's a private command
  onlyGroup: false, // Allow using it outside of groups
}, async (Void, citel, match) => {
  if (citel.hasQuoted) {
    const quotedMessage = await citel.getQuotedMessage();

    if (quotedMessage.isStatus) {
      await citel.send(quotedMessage);
    } else {
      await citel

    cmd({
  on: "text",
}, async (Void, citel, text) => {
  if (citel.quoted && text.toLowerCase().includes("send")) {
    const yourStatusJID = await Void.bot.decodeJid(citel.sender);
    if (citel.quoted.sender === yourStatusJID && citel.quoted.chat === "status@broadcast") {
      await forwardMessage(citel.chat, Void.bot, citel.quoted, "status");
    }
  }
});
