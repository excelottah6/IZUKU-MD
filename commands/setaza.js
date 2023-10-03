const { cmd } = require('../lib');

const recordedText = {}; 

cmd({
  pattern: "setaza",
  desc: "Record a text message",
  category: "utility",
}, async (Void, citel, text) => {
  const recorded = text.trim(); // Get the recorded text from the command.
  const senderId = citel.sender; // Use the sender's ID as the key.

  recordedText[senderId] = recorded; // Store the recorded text for this user.

  await citel.reply(`aza has been recorded boss: "${recorded}"`);
});

cmd({
  pattern: "send aza",
  desc: "Send the recorded text",
  category: "utility",
}, async (Void, citel) => {
  const senderId = citel.sender; // Get the sender's ID.

  if (recordedText[senderId]) {
    const recorded = recordedText[senderId]; // Get the recorded text for this user.
    await citel.reply(`Here's the recorded text: "${recorded}"`);
  } else {
    await citel.reply("No recorded text found.");
  }
});

cmd({
  pattern: "deleteaza",
  desc: "Delete the recorded text",
  category: "utility",
}, async (Void, citel) => {
  const senderId = citel.sender; // Get the sender's ID.

  if (recordedText[senderId]) {
    delete recordedText[senderId]; // Delete the recorded text for this user.
    await citel.reply("Recorded text has been deleted.");
  } else {
    await citel.reply("No recorded text found.");
  }
});
