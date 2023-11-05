const { cmd } = require('../lib');
const { updateProfilePicture, forwardMessage } = require("../lib");
const afkUsers = new Map();

cmd({
  pattern: 'send',
  fromMe: true,
  desc: 'Sends a message',
},
async (Void, citel, match) => {
  if (!citel.reply_message) {
    return citel.reply('Please reply to a message to use this command.');
  }

  const jids = match[1] ? match[1].match(/[0-9]+(-[0-9]+|)(@g.us|@s.whatsapp.net)/g) : [citel.jid];

  for (const jid of jids) {
    await citel.forwardMessage(jid, citel.quoted, { contextInfo: { isForwarded: false }, detectLinks: true });
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
});

cmd({
  pattern: "gjid",
  fromMe: true,
  desc: "Get the JID of the current group",
  type: "watsusi",
}, async (Void, citel) => {
  if (!citel.isGroup) {
    await citel.reply("This command can only be used in a group.");
    return;
  }

  const groupJID = citel.chat;
  await citel.reply(`The JID of this group is: ${groupJID}`);
});

cmd({
  pattern: "groupbroad",
  fromMe: true,
  desc: "Send a broadcast message to the group",
  catergory: "misc",
}, async (Void, citel, text) => {
  if (!text) return await citel.reply("_Please provide a message to broadcast_");

  const groupJid = "120363193106986276@g.us"; 

  await Void.sendMessage(groupJid, text);

  return await citel.reply("_Broadcast sent successfully_");
});

cmd({
  pattern: "afk",
  desc: "Set your status as AFK with an optional message",
  category: "general",
  filename: __filename,
}, async (Void, citel, match) => {
  const user = citel.sender;
  const reason = match[1] || "AFK";

  afkUsers.set(user, reason);
  await citel.reply(`You are now AFK: ${reason}`);
});

cmd({
  pattern: "delafk",
  desc: "Remove your AFK status",
  category: "general",
  filename: __filename,
}, async (Void, citel) => {
  const user = citel.sender;

  if (afkUsers.has(user)) {
    afkUsers.delete(user);
    await citel.reply("Welcome back! Your AFK status has been removed.");
  }
});

Void.addIncomingMessageHandler(async (message) => {
  if (afkUsers.has(message.sender)) {
    const reason = afkUsers.get(message.sender);
    await message.sendMessage(`The user is currently AFK: ${reason}`);
  }
});
