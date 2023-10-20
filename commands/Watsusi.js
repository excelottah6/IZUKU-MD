const { cmd } = require("../lib");

cmd({
  pattern: "save",
  fromMe: true, 
  desc: "Save WhatsApp status",
  category: "watsusi",
  filename: __filename,
}, async (Void, citel, text) => {
  const contact = citel.sender; 
  const status = await Void.client.StatusMessage(contact, 'recent');
  if (status) {
    if (status.type === 'image' || status.type === 'video') {
      await Void.sendMessage(citel.sender, status);  
      await citel.reply("Status saved successfully!");
    } else if (status.type === 'text') {
      await citel.reply(status.text); 
    } else {
      await citel.reply("No recent image, video, or text status found to save.");
    }
  } else {
    await citel.reply("No recent status found to save.");
  }
});
