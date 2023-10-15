const { cmd } = require('../lib');

cmd({
  pattern: "savestatus",
  desc: "Save and send a status to the chat.",
  category: "utility",
}, async (Void, citel) => {
  if (citel.hasQuotedStatus) {
    const status = await citel.getQuotedStatus();

    if (status.isVideo || status.isImage) {
      const savedStatus = await status.forward(citel.chat, false); // Forward the status
      await citel.reply("Status saved and sent!");
      
      // Send the saved status back to the chat
      const savedStatusMessage = await citel.sendMessage(citel.chat, savedStatus, { linkPreview: null });
    } else {
      await citel.reply("Sorry, I can only save and send image or video statuses.");
    }
  } else {
    await citel.reply("Reply to a status to save and send it.");
  }
});
