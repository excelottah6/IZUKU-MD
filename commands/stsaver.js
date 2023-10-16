const { cmd } = require('../lib');

cmd({
  pattern: "save",
  desc: "Save status or media to the chat.",
  category: "misc",
  fromMe: true, // Ensure it's a private command
}, async (Void, citel, match) => {
  if (citel.hasQuotedMsg) {
    const quotedMessage = await citel.getQuotedMessage();
    
    if (quotedMessage.isMedia) {
      await forwardMessage(citel.chat, Void.bot, quotedMessage, citel.id._serialized);
    } else {
      await citel.reply("The quoted message does not contain media.");
    }
  } else {
    await citel.reply("Please reply to a message with media to save it.");
  }
});


cmd({
  pattern: "send",
  desc: "Forward a message to the current chat.",
  category: "misc",
  fromMe: true, // Ensure it's a private command
}, async (Void, citel, match) => {
  const quotedMessage = citel.quotedMsg;
  if (quotedMessage) {
    await forwardMessage(citel.chatId, Void.bot, quotedMessage, "status");
  } else {
    await citel.reply("Please reply to a message to forward it.");
  }
});
