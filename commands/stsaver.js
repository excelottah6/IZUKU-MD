 const { cmd } = require('../lib');

cmd({
  pattern: "save",
  desc: "Save status to the chat.",
  category: "misc",
  fromMe: true, // Ensure it's a private command
}, async (Void, citel, match) => {
  if (citel.hasQuoted) {
    const quotedMessage = await citel.getQuotedMessage();
    
    if (quotedMessage.isStatus && quotedMessage.isMedia) {
      await forwardMessage(citel.chat, Void.bot, quotedMessage, citel.id._serialized);
    } else {
      await citel.reply("The quoted message is not a valid status with media.");
    }
  } else {
    await citel.reply("Please reply to a status to save it.");
  }
});


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
