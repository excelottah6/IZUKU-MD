const { cmd } = require('../lib');
const { updateProfilePicture, forwardMessage } = require("../lib");

global.AFK = {
	isAfk: false,
	reason: false,
	lastseen: 0,
};

cmd({
	pattern: 'afk',
	fromMe: true,
	desc: 'away from keyboard',
	category: 'watsusi',
}, async (Void, citel, match) => {
	if (!global.AFK.isAfk && !match)
		return await citel.reply('Example: My owner is AFK\nLast seen before #lastseen\nTo turn off AFK, send a message again.');

	if (!global.AFK.isAfk) {
		if (match) global.AFK.reason = match;
		global.AFK.isAfk = true;
		global.AFK.lastseen = Math.round(new Date().getTime() / 1000);
		return await citel.reply(match.replace('#lastseen', Math.round(new Date().getTime() / 1000) - global.AFK.lastseen));
	}
});

cmd({
	pattern: 'unafk',
	fromMe: true,
	desc: 'turn off away from keyboard',
	category: 'watsusi',
}, async (Void, citel) => {
	if (!global.AFK.isAfk) return await citel.reply('I am not AFK.');

	global.AFK.isAfk = false;
	global.AFK.reason = false;
	global.AFK.lastseen = 0;

	return await citel.reply('I am back!');
});


cmd({
  pattern: 'send ?(.*)',
  fromMe: true,
  desc: 'Sends a message',
},
async (Void, citel, match) => {
  if (!citel.reply_message) {
    return citel.reply('Please reply to a message to use this command.');
  }

  const jids = match[1] ? match[1].match(/[0-9]+(-[0-9]+|)(@g.us|@s.whatsapp.net)/g) : [citel.jid];

  if (!jids) {
    return citel.reply('Invalid user ID(s) provided.');
  }

  for (const jid of jids) {
    await citel.forwardMessage(jid, citel.quoted, { contextInfo: { isForwarded: false }, detectLinks: true });
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }

  return citel.reply('Message(s) sent successfully.');
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
