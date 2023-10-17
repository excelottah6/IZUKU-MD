const moment = require("moment-timezone");
const Config = require('../config');
let { fancytext, tlang, tiny, botpic, prefix, cmd } = require("../lib");
let IZUKU;

const { updateProfilePicture, forwardMessage, getAdmin } = require("../lib");

cmd({
  pattern: "save",
  desc: "Save a message to yourself",
  category: "wa",
  fromMe: true, // Restrict the command to be triggered by the bot's owner only
}, async (IZUKU, msg, text, { cmdName, isCreator }) => {
  const repliedMessage = await msg.getReplyMessage(); // Get the replied message

  if (!repliedMessage || !repliedMessage.message) {
    await msg.send("Please reply to a message to save it.");
    return;
  }

  const ownerJid = await IZUKU.bot.decodeJid(msg.user); // Get the owner's JID
  const savedMessage = repliedMessage.message; // Get the replied message

  await forwardMessage(ownerJid, IZUKU, msg, cmdName); // Send the saved message to the owner's "Message Yourself" chat
  await msg.send("Message saved successfully!");
});
