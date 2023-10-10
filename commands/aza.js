const { cmd } = require('../lib');

const recordedText = {};

cmd({
  pattern: "setaza",
  desc: "Record a text message",
  category: "utility",
}, async (Void, citel, text) => {
  const recorded = text.trim();
  const userId = citel.sender;

  recordedText[userId] = recorded;

  await citel.reply(`aza has been recorded boss: "${recorded}"`);
});

cmd({
  pattern: "delaza",
  desc: "Delete the recorded text",
  category: "utility",
}, async (Void, citel) => {
  const userId = citel.sender;

  if (recordedText[userId]) {
    delete recordedText[userId];
    await citel.reply("Recorded text has been deleted.");
  } else {
    await citel.reply("No recorded text found.");
  }
});

cmd({
  on: "text",
}, async (Void, citel, text) => {
  if (/(\baza\b|\bsend aza\b)/i.test(text)) {
    const recorded = recordedText[citel.sender];

    if (recorded) {
      await citel.reply(recorded);
    } else {
      await citel.reply("No recorded text found.");
    }
  }
});
