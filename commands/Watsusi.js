const moment = require("moment-timezone");
const Config = require('../config');
const { fancytext, tlang, tiny, botpic, prefix, cmd } = require("../lib");
const { forwardMessage } = require("../lib");

cmd({
  pattern: "save",
  desc: "Save WhatsApp status",
  category: "whatsapp",
  filename: __filename
}, async (Void, citel, text) => {
  if (!citel.hasQuotedMsg) return await citel.reply("*Please, reply to a WhatsApp status to save it*");
  const quotedJid = citel.getQuotedMsg().jid;
  if (quotedJid) {
    await Void.forwardMessages(citel.chat, [quotedJid], false);
  } else {
    await citel.reply("*Unable to retrieve the status jid*");
  }
});
