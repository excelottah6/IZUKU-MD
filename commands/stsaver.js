const { ezcmd } = require('../lib');

ezcmd({
  pattern: "save",
  desc: "Save a message",
  category: "utility",
}, async (Void, citel) => {
  if (citel.hasQuotedMsg) {
    const quotedMsg = await citel.getQuotedMessage();
    if (quotedMsg) {
      await citel.reply(quotedMsg.body);
    } else {
      await citel.reply("No message to save.");
    }
  } else {
    await citel.reply("Please reply to the message you want to save with .save.");
  }
});
