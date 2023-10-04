const { bot, cmd } = require('../lib');

// Initialize an object to store recorded text
const recordedText = {};

// Command to record text
cmd({
  pattern: "setaza",
  desc: "Record a text message",
  category: "utility",
}, async (Void, citel, text) => {
  const recorded = text.trim(); // Get the recorded text from the command.
  const userId = citel.sender; // Use the sender's ID as the key.

  recordedText[userId] = recorded; // Store the recorded text for this user.

  await citel.reply(`aza has been recorded boss: "${recorded}"`);
});

// Command to delete recorded text
cmd({
  pattern: "delaza",
  desc: "Delete the recorded text",
  category: "utility",
}, async (Void, citel) => {
  const userId = citel.sender; // Get the sender's ID.

  if (recordedText[userId]) {
    delete recordedText[userId]; // Remove the recorded text for this user.
    await citel.reply("Recorded text has been deleted.");
  } else {
    await citel.reply("No recorded text found.");
  }
});

// Listen for incoming messages
cmd({
  on: "text",
}, async (Void, citel, text) => {
  // Check if the received message contains "aza" or "send aza" (case-insensitive)
  const lowercasedText = text.toLowerCase();
  if (lowercasedText.includes("aza") || lowercasedText.includes("send aza")) {
    for (const userId in recordedText) {
      const recorded = recordedText[userId]; // Get the recorded text for this user.

      if (recorded) {
        await bot.sendMessage(userId, `Here's our account number: ${recorded}`); // Send the account number to the user.
      }
    }
  }
});
