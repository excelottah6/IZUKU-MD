const { cmd } = require('../lib')

cmd({
  pattern: "save",
  desc: "Save status to the chat.",
  category: "misc",
  fromMe: true, // Ensure it's a private command
  onlyGroup: false, // Allow using it outside of groups
}, async (Void, citel, match) => {
  if (citel.hasQuoted) {
    const quotedMessage = await citel.getQuotedMessage();

    if (quotedMessage.isStatus) {
      await citel.send(quotedMessage);
    } else {
      await citel
