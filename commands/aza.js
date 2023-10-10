const { cmd } = require('../lib');

const recordedText = {};

cmd({
  pattern: /(\bsend\s+aza\b)/i,
  desc: 'Automatically respond to messages containing "send aza"',
  category: 'utility',
}, async (Void, citel, text) => {
  const senderId = citel.sender;

  if (recordedText[senderId]) {
    const recorded = recordedText[senderId];

    await citel.reply(recorded);
  } else {
    await citel.reply('No recorded text found. Use the "setaza" command to record a message.');
  }
});

cmd({
  pattern: "setaza",
  desc: "Record a text message",
  category: "utility",
}, async (Void, citel, text) => {
  const senderId = citel.sender;
  const recorded = text.trim();

  recordedText[senderId] = recorded;

  await citel.reply(`Message recorded. Use the "delaza" command to delete it.`);
});

cmd({
  pattern: "delaza",
  desc: "Delete the recorded text",
  category: "utility",
}, async (Void, citel) => {
  const senderId = citel.sender;

  if (recordedText[senderId]) {
    delete recordedText[senderId];

    await citel.reply('Recorded text has been deleted.');
  } else {
    await citel.reply('No recorded text found.');
  }
});
