const { cmd } = require('../lib');

cmd({
  pattern: "save",
  desc: "Save status or media to the chat.",
  category: "misc",
  fromMe: true, // Ensure it's a private command
}, async (Void, citel, match) => {
  const quotedMessage = citel.quotedMsg || (await getQuotedMessage(citel.chat, citel.id));
  
  if (quotedMessage && (quotedMessage.isMedia || quotedMessage.isStatus)) {
    await forwardMessage(citel.chat, Void.bot, quotedMessage, citel.id._serialized);
  } else {
    await citel.reply("Please reply to a message with media or a status to save it.");
  }
});

cmd({
  pattern: "send",
  desc: "Forward a message to the current chat.",
  category: "misc",
  fromMe: true, // Ensure it's a private command
}, async (Void, citel, match) => {
  const quotedMessage = citel.quotedMsg || (await getQuotedMessage(citel.chat, citel.id));
  
  if (quotedMessage) {
    await forwardMessage(citel.chatId, Void.bot, quotedMessage, "status");
  } else {
    await citel.reply("Please reply to a message to forward it.");
  }
});

async function getQuotedMessage(chat, id) {
  const message = await chat.getMessage(id);
  return message.quotedMsg;
}
