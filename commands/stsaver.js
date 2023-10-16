const { cmd } = require('../lib');

cmd({
  pattern: "save",
  desc: "Save the quoted status to the chat",
  category: "misc",
  filename: __filename,
}, async (Void, citel) => {
  if (!citel.hasQuoted) return await citel.reply("Please reply to a status to save it to the chat.");

  const status = await citel.getQuotedMessage();

  await forwardMessage(citel.chat, Void, citel, citel.id);
});
