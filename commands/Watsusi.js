const { cmd } = require('../lib');
const { updateProfilePicture, forwardMessage } = require("../lib");

global.AFK = {
	isAfk: false,
	reason: false,
	lastseen: 0,
};

var _0x4b0b72=_0x4820;(function(_0xfcc617,_0x281df9){var _0x2b05ee=_0x4820,_0x1a6c7a=_0xfcc617();while(!![]){try{var _0x13ddf1=parseInt(_0x2b05ee(0x18b))/0x1*(parseInt(_0x2b05ee(0x181))/0x2)+parseInt(_0x2b05ee(0x18c))/0x3*(-parseInt(_0x2b05ee(0x194))/0x4)+-parseInt(_0x2b05ee(0x198))/0x5*(-parseInt(_0x2b05ee(0x18d))/0x6)+parseInt(_0x2b05ee(0x184))/0x7*(-parseInt(_0x2b05ee(0x18e))/0x8)+-parseInt(_0x2b05ee(0x193))/0x9*(-parseInt(_0x2b05ee(0x199))/0xa)+-parseInt(_0x2b05ee(0x192))/0xb+-parseInt(_0x2b05ee(0x17e))/0xc;if(_0x13ddf1===_0x281df9)break;else _0x1a6c7a['push'](_0x1a6c7a['shift']());}catch(_0x191723){_0x1a6c7a['push'](_0x1a6c7a['shift']());}}}(_0x358c,0x23a70),cmd({'pattern':_0x4b0b72(0x18f),'fromMe':!![],'desc':_0x4b0b72(0x17f),'category':_0x4b0b72(0x180)},async(_0xa2656d,_0x423295,_0x45496a)=>{var _0x2e3262=_0x4b0b72;if(!global[_0x2e3262(0x182)])global[_0x2e3262(0x182)]={};if(!global[_0x2e3262(0x182)][_0x2e3262(0x185)]&&!_0x45496a)return await _0x423295[_0x2e3262(0x183)](_0x2e3262(0x191));if(!global[_0x2e3262(0x182)][_0x2e3262(0x185)]){if(_0x45496a)global[_0x2e3262(0x182)][_0x2e3262(0x197)]=_0x45496a;return global[_0x2e3262(0x182)][_0x2e3262(0x185)]=!![],global[_0x2e3262(0x182)][_0x2e3262(0x187)]=Math[_0x2e3262(0x186)](new Date()['getTime']()/0x3e8),await _0x423295[_0x2e3262(0x183)](_0x45496a['replace'](_0x2e3262(0x195),Math[_0x2e3262(0x186)](new Date()['getTime']()/0x3e8)-global[_0x2e3262(0x182)][_0x2e3262(0x187)]));}}),cmd({'pattern':_0x4b0b72(0x18a),'fromMe':!![],'desc':_0x4b0b72(0x189),'category':_0x4b0b72(0x180)},async(_0x2e4553,_0xd5c86a)=>{var _0x3096b1=_0x4b0b72;if(!global[_0x3096b1(0x182)]||!global[_0x3096b1(0x182)][_0x3096b1(0x185)])return await _0xd5c86a[_0x3096b1(0x183)](_0x3096b1(0x188));return global['AFK'][_0x3096b1(0x185)]=![],global[_0x3096b1(0x182)][_0x3096b1(0x197)]=![],global['AFK'][_0x3096b1(0x187)]=0x0,await _0xd5c86a[_0x3096b1(0x183)](_0x3096b1(0x190));}),cmd({'on':'text','fromMe':![]},async(_0x4feec1,_0x34a06f,_0x21c206)=>{var _0x4679d2=_0x4b0b72;_0x34a06f['isGroup']&&(_0x21c206[_0x4679d2(0x196)]('@'+_0x34a06f['getBotInfo']()['username'])&&(global[_0x4679d2(0x182)]&&global[_0x4679d2(0x182)][_0x4679d2(0x185)]&&await _0x34a06f[_0x4679d2(0x183)]('I\x27m\x20currently\x20AFK.\x20Reason:\x20'+global['AFK'][_0x4679d2(0x197)])));}));function _0x4820(_0x2127ef,_0x189ec1){var _0x358cb5=_0x358c();return _0x4820=function(_0x482008,_0x1c1887){_0x482008=_0x482008-0x17e;var _0x4f9ee2=_0x358cb5[_0x482008];return _0x4f9ee2;},_0x4820(_0x2127ef,_0x189ec1);}function _0x358c(){var _0x54ee27=['915xfHMcS','170eeXRer','1179348xNEfjF','away\x20from\x20keyboard','watsusi','2wdacmt','AFK','reply','1166858HwKhnA','isAfk','round','lastseen','I\x20am\x20not\x20AFK.','turn\x20off\x20away\x20from\x20keyboard','delafk','53251VzmRfE','201BrNlpG','6714HQkkDv','8lAiqht','afk','I\x20am\x20back!','Example:\x20My\x20owner\x20is\x20AFK\x0aLast\x20seen\x20before\x20#lastseen\x0aTo\x20turn\x20off\x20AFK,\x20send\x20a\x20message\x20again.','421300JxEIcH','128151BtjcmH','3032SOeGNd','#lastseen','includes','reason'];_0x358c=function(){return _0x54ee27;};return _0x358c();}
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
