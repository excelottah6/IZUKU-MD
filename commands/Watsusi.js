const { cmd } = require('../lib');

cmd({
  pattern: "save",
  fromMe: true,
  desc: "Forward replied message to yourself",
  category: "watsusi",
}, async (Void, citel, text) => {
  if (!citel.hasQuoted) return await citel.reply("_Reply to a message_");

  const quotedMessage = await citel.loadMessage(citel.getQuotedMsgId());

  if (quotedMessage) {
    await Void.forwardMessage(Void.user.jid, quotedMessage, {
      text: "Saved message:",
    });
    return await citel.reply("*Message saved successfully*");
  } else {
    await citel.reply("*Unable to retrieve the message*");
  }
});
