const { cmd } = require('../lib');

cmd({
  pattern: "savestatus",
  desc: "Save and send a status to the chat.",
  category: "utility",
}, async (Void, citel) => {
  if (citel.hasQuotedStatus) {
    const status = await citel.getQuotedStatus();

    if (status.isVideo) {
      const savedStatus = await status.forward(citel.chat, true); // Forward the video status
      await citel.reply("Video status saved and sent!");
    } else if (status.isImage) {
      const savedStatus = await status.forward(citel.chat, true); // Forward the image status
      await citel.reply("Image status saved and sent!");
    }
  } else {
    await citel.reply("Reply to a status to save and send it.");
  }
});
