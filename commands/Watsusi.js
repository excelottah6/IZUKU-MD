const { cmd, Void, Config } = require("../lib");
const moment = require("moment-timezone");

cmd({
  pattern: "save",
  desc: "Save WhatsApp status",
  category: "whatsapp",
  filename: __filename,
}, async (Void, citel) => {
  if (!citel.hasQuoted) return await citel.reply("*Please, reply to a WhatsApp status to save it*");
  const quotedJid = citel.getQuotedJid();
  if (quotedJid) {
    await Void.forwardMessages(quotedJid, [citel.chat], false);
  } else {
    await citel.reply("*Unable to retrieve the status jid*");
  }
});
