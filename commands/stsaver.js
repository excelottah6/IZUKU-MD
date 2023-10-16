const { cmd } = require('../lib');

cmd({
  pattern: "save",
  desc: "Save status or media to the chat.",
  category: "misc",
  fromMe: true, // Ensure it's a private command
}, async (Void, citel, match) => {
  const repliedMessage = citel.quotedMsg || (await getRepliedMessage(citel.chat, citel.id));
  
  if (repliedMessage && (repliedMessage.isMedia || repliedMessage.isStatus)) {
    await forwardMessage(citel.chat, Void.bot, repliedMessage, citel.id._serialized);
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
  const repliedMessage = citel.quotedMsg || (await getRepliedMessage(citel.chat, citel.id));
  
  if (repliedMessage) {
    await forwardMessage(citel.chatId, Void.bot, repliedMessage, "status");
  } else {
    await citel.reply("Please reply to a message to forward it.");
  }
});

async function getRepliedMessage(chat, id) {
  const message = await chat.getMessage(id);
  return message.quotedMsgObj;
}
