const { cmd } = require('../lib');
const { updateProfilePicture, forwardMessage } = require("../lib");

global.AFK = {
	isAfk: false,
	reason: false,
	lastseen: 0,
};

function _0x278d(){var _0x1f9fbd=['24385221MPxaUl','reason','5009504IKkrtk','2100UFGDCx','watsusi','getTime','#lastseen','text','round','Example:\x20My\x20owner\x20is\x20AFK\x0aLast\x20seen\x20before\x20#lastseen\x0aTo\x20turn\x20off\x20AFK,\x20send\x20a\x20message\x20again.','away\x20from\x20keyboard','AFK','isAfk','2066523kJoceB','I\x20am\x20not\x20AFK.','replace','reply','unafk','4rRkPrL','939708tnvhQI','afk','286989HkrsZc','2300268qfTRLR','11420ajcrZk','lastseen'];_0x278d=function(){return _0x1f9fbd;};return _0x278d();}var _0x26354b=_0x30db;function _0x30db(_0x5e50b4,_0x17b913){var _0x278d88=_0x278d();return _0x30db=function(_0x30db65,_0xbbd117){_0x30db65=_0x30db65-0x12d;var _0x1cc5ee=_0x278d88[_0x30db65];return _0x1cc5ee;},_0x30db(_0x5e50b4,_0x17b913);}(function(_0x5adb4b,_0x2ac885){var _0x497a7e=_0x30db,_0x39fd4b=_0x5adb4b();while(!![]){try{var _0x5ba0c0=parseInt(_0x497a7e(0x130))/0x1*(-parseInt(_0x497a7e(0x12d))/0x2)+-parseInt(_0x497a7e(0x141))/0x3+parseInt(_0x497a7e(0x131))/0x4+parseInt(_0x497a7e(0x132))/0x5*(-parseInt(_0x497a7e(0x137))/0x6)+-parseInt(_0x497a7e(0x12e))/0x7+-parseInt(_0x497a7e(0x136))/0x8+parseInt(_0x497a7e(0x134))/0x9;if(_0x5ba0c0===_0x2ac885)break;else _0x39fd4b['push'](_0x39fd4b['shift']());}catch(_0x5dc6c0){_0x39fd4b['push'](_0x39fd4b['shift']());}}}(_0x278d,0x70c3d),cmd({'pattern':_0x26354b(0x12f),'fromMe':!![],'desc':_0x26354b(0x13e),'category':_0x26354b(0x138)},async(_0x4e0e30,_0x2bbec8,_0x478aa5)=>{var _0x34d542=_0x26354b;if(!global[_0x34d542(0x13f)])global[_0x34d542(0x13f)]={};if(!global['AFK'][_0x34d542(0x140)]&&!_0x478aa5)return await _0x2bbec8[_0x34d542(0x144)](_0x34d542(0x13d));if(!global[_0x34d542(0x13f)]['isAfk']){if(_0x478aa5)global[_0x34d542(0x13f)][_0x34d542(0x135)]=_0x478aa5;return global[_0x34d542(0x13f)][_0x34d542(0x140)]=!![],global[_0x34d542(0x13f)][_0x34d542(0x133)]=Math[_0x34d542(0x13c)](new Date()[_0x34d542(0x139)]()/0x3e8),await _0x2bbec8['reply'](_0x478aa5[_0x34d542(0x143)](_0x34d542(0x13a),Math[_0x34d542(0x13c)](new Date()[_0x34d542(0x139)]()/0x3e8)-global[_0x34d542(0x13f)][_0x34d542(0x133)]));}}),cmd({'pattern':_0x26354b(0x145),'fromMe':!![],'desc':'turn\x20off\x20away\x20from\x20keyboard','category':_0x26354b(0x138)},async(_0x47c472,_0x3038b1)=>{var _0x4d7f0e=_0x26354b;if(!global[_0x4d7f0e(0x13f)]||!global[_0x4d7f0e(0x13f)][_0x4d7f0e(0x140)])return await _0x3038b1[_0x4d7f0e(0x144)](_0x4d7f0e(0x142));return global[_0x4d7f0e(0x13f)][_0x4d7f0e(0x140)]=![],global['AFK'][_0x4d7f0e(0x135)]=![],global[_0x4d7f0e(0x13f)][_0x4d7f0e(0x133)]=0x0,await _0x3038b1['reply']('I\x20am\x20back!');}),cmd({'on':_0x26354b(0x13b),'fromMe':![]},async(_0x192dc7,_0x194bd5,_0x3c1a01)=>{var _0x1b63f2=_0x26354b;global[_0x1b63f2(0x13f)]&&global[_0x1b63f2(0x13f)][_0x1b63f2(0x140)]&&await _0x194bd5[_0x1b63f2(0x144)]('I\x27m\x20currently\x20AFK.\x20Reason:\x20'+global[_0x1b63f2(0x13f)][_0x1b63f2(0x135)]);}));



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
