const { cmd } = require('../lib');
// Listen for incoming messages
cmd({ on: "text" }, async (Void, citel, text) => {
  // Check if the received message contains "aza" or "send aza" (case-insensitive).
  if (/(\baza\b|\bsend aza\b)/i.test(text)) {
    const userId = citel.sender; // Get the sender's ID.

    if (recordedText[userId]) {
      const recordedMessage = recordedText[userId]; // Get the recorded message for this user.
      await citel.reply(recordedMessage); // Send the recorded message as a reply.
    } else {
      await citel.reply("No recorded message found."); // Let the user know if no recorded message is found.
    }
  }

  // Check if the received message contains "setaza:" followed by a message.
  if (/setaza:(.*)/i.test(text)) {
    const userId = citel.sender; // Get the sender's ID.
    const newMessage = text.match(/setaza:(.*)/i)[1].trim(); // Extract the new message from the received text.

    recordedText[userId] = newMessage; // Set the new recorded message for this user.
    await citel.reply("Aza message set successfully!"); // Confirm to the user that the message was set.
  }

  // Check if the received message contains "deleteaza".
  if (/deleteaza/i.test(text)) {
    const userId = citel.sender; // Get the sender's ID.

    if (recordedText[userId]) {
      delete recordedText[userId]; // Delete the recorded message for this user.
      await citel.reply("Aza message deleted successfully!"); // Confirm to the user that the message was deleted.
    } else {
      await citel.reply("No recorded message found."); // Let the user know if no recorded message is found.
    }
  }
});
