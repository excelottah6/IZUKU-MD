const { cmd } = require('../lib');

cmd({
  pattern: "save",
  desc: "Save status to the chat.",
  category: "misc",
  fromMe: true, 
}, async (Void, citel, match) => {
  if (citel.hasQuoted) {
    const quotedMessage = await citel.getQuotedMessage();

    if (quotedMessage.isStatus) {
      await citel.send(quotedMessage);
    }
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
