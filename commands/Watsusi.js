const moment = require("moment-timezone");
const Config = require('../config');
const { fancytext, tlang, tiny, botpic, prefix, cmd } = require("../lib");
const { forwardMessage } = require("../lib");

cmd({
  pattern: "save",
  desc: "Save WhatsApp message or status",
  category: "whatsapp",
  filename: __filename,
}, async (Void, citel) => {
  if (citel.hasQuoted) {
    const quotedJid = citel.getQuotedJid();
    if (quotedJid) {
      await Void.forwardMessages(citel.chat, [quotedJid], false);
    } else {
      await citel.reply("*Unable to retrieve the status or message jid*");
    }
  } else {
    await Void.forwardMessages(citel.chat, [citel.message], false);
  }
});
