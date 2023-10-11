const { cmd, owner } = require('../lib');
let recordedText = "";

cmd({
  pattern: "setaza",
  desc: "Record a text message",
  category: "utility",
}, async (Void, citel, text) => {
  if (citel.from === owner) {
    recordedText = text.trim();
    await citel.reply(`aza has been recorded: "${recordedText}"`);
  } else {
    await citel.reply("Sorry, only the owner can set the recorded message.");
  }
});

cmd({
  pattern: "send aza",
  desc: "Send the recorded text",
  category: "hidden",
}, async (Void, citel) => {
  if (recordedText) {
    await citel.reply(recordedText);
  } else {
    await citel.reply("No recorded text found.");
  }
});

cmd({
  pattern: "delaza",
  desc: "Delete the recorded text",
  category: "utility",
}, async (Void, citel) => {
  if (citel.from === owner) {
    recordedText = "";
    await citel.reply("aza has been deleted.");
  } else {
    await citel.reply("Sorry, only the owner can delete the recorded message.");
  }
});
