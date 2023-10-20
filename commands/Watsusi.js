const { cmd } = require('../lib');

cmd({
  pattern: "save",
  fromMe: true,
  desc: "Forward replied message to yourself",
  category: "watsusi",
}, async (Void, citel, text) => {
  if (!citel.hasQuoted) return await citel.reply("_Reply to a message_");

  const quotedMessage = await citel.getQuotedMessage();

  if (quotedMessage) {
    await Void.sendMessage(Void.user.jid, { ...quotedMessage }, {
      contextInfo: {
        isForwarded: false,
      },
    });
    return await citel.reply("*Message saved successfully*");
  } else {
    await citel.reply("*Unable to retrieve the message*");
  }
});
