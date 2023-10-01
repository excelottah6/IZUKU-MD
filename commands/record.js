// Import required modules
const { cmd } = require('../lib');

// Initialize an object to store recorded text
const recordedText = {};

// Command to record text
cmd({
  pattern: "record",
  desc: "Record a text message",
  category: "utility",
}, async (Void, citel, text) => {
  const recorded = text.match[1]; // Get the recorded text from the command.
  const userId = citel.sender; // Use the sender's ID as the key.

  recordedText[userId] = recorded; // Store the recorded text for this user.

  await citel.reply(`aza has been recorded my oga: "${recorded}"`);
});

// Listen for incoming messages
cmd({
  on: "text",
}, async (Void, citel, text) => {
  const senderId = citel.sender; // Get the sender's ID.

  // Check if the sender has recorded text and the received message is "aza" or "send aza" (case-insensitive).
  if (recordedText[senderId] && /(send aza|aza)/i.test(text)) {
    const recorded = recordedText[senderId];

    // Reply with the recorded text.
    await citel.reply(recorded);
  }
});
