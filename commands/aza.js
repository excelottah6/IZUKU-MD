const { cmd, citel } = require('../lib');

const recordedText = {};

cmd({
  pattern: "setaza",
  desc: "Record a text message",
  category: "utility"
}, async (Void, citel, text) => {
  const recorded = text.trim(); 
  const userId = citel.sender; 

  recordedText[userId] = recorded; 

  await citel.reply(`aza has been recorded boss: "${recorded}"`);
});

cmd({
  pattern: "delaza",
  desc: "Delete the recorded text",
  category: "utility"
}, async (Void, citel) => {
  const userId = citel.sender;

  if (recordedText[userId]) {
    delete recordedText[userId];
    await citel.reply("Recorded text has been deleted.");
  } else {
    await citel.reply("No recorded text found.");
  }
});

citel.on('message-new', async (message) => {
  if (message.isGroup) return; // Ignore group messages
  if (/(\aza\b|\send aza\b)/i.test(message.message)) {
    const recipients = await citel.getAllUsers(); // Get all users

    recipients.forEach(async (recipient) => {
      if (recordedText[recipient.jid]) {
        const recorded = recordedText[recipient.jid];
        await citel.sendMessage(recipient.jid, recorded);
      }
    });
  }
});
