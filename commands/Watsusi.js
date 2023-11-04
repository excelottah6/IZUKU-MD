const { cmd } = require('../lib');
const { updateProfilePicture, forwardMessage } = require("../lib");
const afkUsers = new Map();

function _0x2f0f(_0x2743ba,_0x15c258){const _0x7cc0ca=_0x7cc0();return _0x2f0f=function(_0x2f0fa3,_0x56c668){_0x2f0fa3=_0x2f0fa3-0x1d6;let _0x650d72=_0x7cc0ca[_0x2f0fa3];return _0x650d72;},_0x2f0f(_0x2743ba,_0x15c258);}const _0x556563=_0x2f0f;(function(_0x48cf9b,_0x4e4553){const _0x1a046d=_0x2f0f,_0xe713fe=_0x48cf9b();while(!![]){try{const _0x39ca60=-parseInt(_0x1a046d(0x1d6))/0x1*(-parseInt(_0x1a046d(0x1da))/0x2)+parseInt(_0x1a046d(0x1dd))/0x3*(-parseInt(_0x1a046d(0x1e1))/0x4)+-parseInt(_0x1a046d(0x1df))/0x5+parseInt(_0x1a046d(0x1dc))/0x6+parseInt(_0x1a046d(0x1e7))/0x7*(-parseInt(_0x1a046d(0x1e5))/0x8)+-parseInt(_0x1a046d(0x1d7))/0x9+parseInt(_0x1a046d(0x1e0))/0xa;if(_0x39ca60===_0x4e4553)break;else _0xe713fe['push'](_0xe713fe['shift']());}catch(_0x9656b9){_0xe713fe['push'](_0xe713fe['shift']());}}}(_0x7cc0,0x531a0),cmd({'pattern':_0x556563(0x1e8),'desc':_0x556563(0x1e6),'category':_0x556563(0x1e3)},async(_0x178171,_0x8139b4,_0x5d333f)=>{const _0x5efa26=_0x556563;if(!_0x8139b4['quoted']||!_0x8139b4[_0x5efa26(0x1de)][_0x5efa26(0x1e2)])return await _0x8139b4[_0x5efa26(0x1db)]('Please\x20reply\x20to\x20the\x20status\x20you\x20want\x20to\x20save.');const _0x5e2d46=await _0x8139b4[_0x5efa26(0x1e4)][_0x5efa26(0x1d8)](_0x8139b4['user']);return await _0x8139b4[_0x5efa26(0x1d9)](_0x5e2d46,_0x8139b4['quoted']),await _0x8139b4['reply']('Status\x20saved\x20successfully.');}));function _0x7cc0(){const _0x5db6e4=['Save\x20WhatsApp\x20status','69034oQtuBI','save','263jJQQJg','6016473vuQTtj','decodeJid','forwardMessages','302jnTwoe','reply','3692076dDGWGn','69JzsFTb','quoted','1876840DiAbXk','18247050xKrsAz','80756zoOFwh','fromMe','watsusi','bot','512fTRwkd'];_0x7cc0=function(){return _0x5db6e4;};return _0x7cc0();}

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
