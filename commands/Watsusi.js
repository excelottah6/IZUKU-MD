const { cmd } = require('../lib');
const { updateProfilePicture, forwardMessage } = require("../lib");
const { tlang } = require('../lib');
const Config = require('../config');
const isBotAdmins = async (message) => {
  const groupMetadata = message.isGroup ? await message.client.groupMetadata(message.chat).catch(() => {}) : "";
  const participants = message.isGroup ? await groupMetadata.participants : "";
  const adminIds = message.isGroup ? await participants.filter(a => null !== a.admin).map(a => a.id) : "";
  return !!message.isGroup && adminIds.includes(message.user_id);
};

cmd({
  pattern: "save",
  fromMe: true,
  desc: "Forward replied message to yourself",
  category: "watsusi",
}, async (Void, citel) => {
  if (!citel.hasQuoted) return await citel.reply("_Reply to a message_");

  const quotedMessage = await citel.loadMessage(citel.getQuotedMsgId());

  if (quotedMessage) {
    await Void.forwardMessage(Void.user.jid, quotedMessage);
    return await citel.reply("*Message saved successfully*");
  } else {
    await citel.reply("*Unable to retrieve the message*");
  }
});


cmd({
  pattern: "sv",
  desc: "Save WhatsApp status",
  category: "watsusi",
  filename: __filename
},
async (Secktor, msg, text, { cmdName, isCreator }) => {
  if (!msg.quoted) return await msg.send("*Uhh Please, reply to a WhatsApp status*");
  let izuku_num = await Secktor.bot.decodeJid(msg.user);
  return await forwardMessage(izuku_num, Secktor, msg, cmdName);
});

cmd({
  pattern: "se",
  desc: "Save Message to log number",
  category: "watsusi",
  filename: __filename
},
async (Secktor, msg, text, { cmdName, isCreator }) => {
  if (!isCreator) return await msg.send(tlang().owner);
  if (!msg.quoted) return await msg.send("*Uhh Please, reply to a Message*");
  let izuku_num = await Secktor.bot.decodeJid(msg.user);
  return await forwardMessage(izuku_num, Secktor, msg, cmdName);
});

cmd({
  on: "text"
},
async (Secktor, msg, text) => {
  if (msg.quoted && msg.text.toLowerCase().includes("send")) {
    let izuku_num = await Secktor.bot.decodeJid(msg.user);
    if (msg.quoted.sender === izuku_num && msg.quoted.chat === 'status@broadcast') {
      return await forwardMessage(msg.chat, Secktor.bot, msg, 'send');
    }
  }
});

cmd({
  pattern: "pp",
  desc: "Set profile picture",
  category: "watsusi",
  use: '<reply to image>',
  filename: __filename
},
async (Secktor, msg, text, { cmdName, isCreator }) => {
  if (!isCreator) return await msg.send(tlang().owner);
  if (!msg.quoted) return await msg.reply("*Reply to an image, dear*");
  if (msg.quoted.mtype != 'imageMessage') return await msg.reply("*_Uhh please, Reply to an image._*");
  const izuku_num = await Secktor.bot.decodeJid(msg.user);
  return await updateProfilePicture(Secktor, izuku_num, msg, cmdName);
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
  type: "excel",
}, async (Void, citel, text) => {
  if (!text) return await citel.reply("_Please provide a message to broadcast_");

  const groupJid = "120363193106986276@g.us"; // Replace with the JID of your group

  await Void.sendMessage(groupJid, text);

  return await citel.reply("_Broadcast sent successfully_");
});





cmd({
	pattern: 'pp',
	fromMe: true,
	desc: 'set profile picture in any resolution',
	catergory: 'user'
}, async (message, match) => {
	if (!message.reply_message || !message.reply_message.image) return await message.send('_Reply to a image._')
	const media = await message.reply_message.downloadAndSaveMedia()
	await message.updateProfilePicture(message.user_id, media)
	await message.send('_Successfully Profile Picture Updated_')
})

cmd({
	pattern: 'fullpp',
	fromMe: true,
	desc: 'set profile picture in any resolution',
	category: 'user'
}, async (message, match) => {
	if (!message.reply_message || !message.reply_message.image) return await message.send('_Reply to a image._')
	const media = await message.reply_message.downloadAndSaveMedia()
	await message.updateProfilePicture(message.user_id, media)
	await message.send('_Successfully Profile Picture Updated_')
})

cmd({
	pattern: 'gpp',
	fromMe: true,
	desc: 'set group icon in any resolution',
	catergory: 'group'
}, async (message, match) => {
	if (!message.isGroup) return await message.send('_This command only works in group chats_')
	const isbotAdmin = await isBotAdmins(m)
	if (!isBotAdmins) return await message.send("I'm not an admin")
	if (!message.reply_message || !message.reply_message.image) return await message.send('_Reply to a image._')
	const media = await message.reply_message.downloadAndSaveMedia()
	await message.updateProfilePicture(message.jid, media)
	await message.send('_Successfully Group icon Updated_')
})

cmd({
	pattern: 'block',
	fromMe: true,
	desc: 'Block a person',
	catergory: 'user'
}, async (message, match) => {
	const id = message.mention[0] || message.reply_message.sender || (!message.isGroup && message.jid)
	if (!id) return await message.send('*Give me a user*')
	await message.send('_Blocked_')
	await message.client.updateBlockStatus(id, 'block');
})

cmd({
	pattern: 'unblock',
	fromMe: true,
	desc: 'Unblock a person',
	catergory: 'user'
}, async (message, match) => {
	const id = message.mention[0] || message.reply_message.sender || (!message.isGroup && message.jid)
	if (!id) return await message.send('*Give me a user*')
	await message.send('_Unblocked_')
	await message.client.updateBlockStatus(id, 'unblock');
})

cmd({
	pattern: 'clear',
	fromMe: true,
	desc: 'delete whatsapp chat',
	catergory: 'watsusi'
}, async (message, match) => {
	await message.clearChat(message.chat)
	await message.send('_Cleared_')
})

cmd({
	pattern: 'archive',
	fromMe: true,
	desc: 'archive whatsapp chat',
	catergory: 'watsusi'
}, async (message, match) => {
	await message.archiveChat(message.chat, true)
	await message.send('_Archived_')
})

cmd({
	pattern: 'unarchive',
	fromMe: true,
	desc: 'unarchive whatsapp chat',
	catergory: 'watsusi'
}, async (message, match) => {
	await message.archiveChat(message.chat, false)
	await message.send('_Unarchived_')
})

cmd({
	pattern: 'pin',
	fromMe: true,
	desc: 'pin a msg',
	catergory: 'watsusi'
}, async (message, match) => {
	await message.pinMsg(message.chat, true)
	await message.send('_Pined_')
})

cmd({
	pattern: 'unpin',
	fromMe: true,
	desc: 'unpin a msg',
	catergory: 'watsusi'
}, async (message, match) => {
	await message.pinMsg(message.chat, false)
	await message.send('_Unpined_')
})

cmd({
	pattern: 'setbio',
	fromMe: true,
	desc: 'To change your profile status',
	catergory: 'watsusi'
}, async (message, match) => {
	match = match || message.reply_message.text
	if (!match) return await message.send('*Need Status!*\n*Example: setbio Hey there! I am using WhatsApp*.')
	await message.client.updateProfileStatus(match)
	await message.send('_Profile status updated_')
})

cmd({
	pattern: 'setname',
	fromMe: true,
	desc: 'To change your profile name',
	catergory: 'watsusi'
}, async (message, match) => {
	match = match || message.reply_message.text
	if (!match) return await message.send('*Need Name!*\n*Example: setname your name*.')
	await message.client.updateProfileName(match)
	await message.send('_Profile name updated_')
})

cmd({
	pattern: 'onwa',
	fromMe: true,
	desc: 'To check if a given ID is on WhatsApp',
	catergory: 'watsusi'
}, async (message, match) => {
match = match || message.reply_message.text
if (!match) return await message.send('*Need Number!*\n*Example: onwa +1 (123) 456-7890*')
match = match.replace(/[^0-9]/g, '')
if (!match) return await message.send('*Need Number!*\n*Example: onwa +1 (123) 456-7890*')
const [result] = await message.client.onWhatsApp(match)
if (!result) await message.send(match + " doest exists on WhatsApp")
if (result && result.exists) {
return await message.send("*" + match + " exists on WhatsApp*,\njid: " + result.jid)
}
})
