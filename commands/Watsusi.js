const moment = require("moment-timezone")
const Config = require('../config')
let { fancytext, tlang, tiny, botpic ,prefix,cmd } = require("../lib");
const {updateProfilePicture,forwardMessage, getAdmin} = require("../lib")
let izuku ;
cmd({
  pattern: "save",
  fromMe: true,
  desc: "Forward replied message to yourself",
  category: "watsusi",
}, async (Void, citel, text) => {
  if (!citel.hasQuoted) return await citel.reply("_Reply to a message_");

  const quotedMessage = await citel.loadMessage(citel.getQuotedMsgId());

  if (quotedMessage) {
    await Void.forwardMessage(Void.user.jid, quotedMessage, {
      text: "Saved message:",
    });
    return await citel.reply("*Message saved successfully*");
  } else {
    await citel.reply("*Unable to retrieve the message*");
  }
});
//-----------------------------------------------------------------1------------1---11----1--1
cmd({pattern: "sv", desc: "Save whatsapp status",category: "watsusi",filename: __filename},async(Secktor, msg, text,{cmdName , isCreator}) => {
   if(!msg.quoted) return await msg.send("*Uhh Please, reply to whatsapp status*")
   let izuku_num = await Secktor.bot.decodeJid(msg.user)
   return await forwardMessage(izuku_num, Secktor, msg, cmdName )
})
//---------------------------------------------------------------------------
cmd({pattern: "save",desc: "Save Message to log number",category: "watsusi",filename: __filename},async(Secktor, msg, text,{cmdName , isCreator}) => {
   if(!isCreator) return await msg.send(tlang().owner)
   if(!msg.quoted) return await msg.send("*Uhh Please, reply to a Message*")
   let izuku_num = await Secktor.bot.decodeJid(msg.user)
   return await forwardMessage(izuku_num, Secktor, msg, cmdName )
  //------------------------------------------------------------------c 
  cmd({ on: "text" }, async (Secktor,msg,text)=> {
   if(msg.quoted && msg.text.toLowerCase().includes("send") ){
       let izuku_num = await Secktor.bot.decodeJid(msg.user)
       if(msg.quoted.sender === izuku_num && msg.quoted.chat === 'status@broadcast' ){ return await forwardMessage(msg.chat, Secktor.bot, msg, 'send' ); }
   }
})//==================================================================---
cmd({pattern: "pp",desc: "Set profile picture",category: "watsusi",use: '<reply to image>', filename: __filename,},
async(Secktor, msg,text,{cmdName , isCreator}) => {
   if(!isCreator) return await msg.send(tlang().owner);if (!msg.quoted) return await msg.reply("*Reply to an image, dear*");
   if(msg.quoted.mtype !='imageMessage') return await msg.reply("*_Uhh please, Reply to an image._*");    
   const izuku_num = await Secktor.bot.decodeJid(msg.user); return await updateProfilePicture(Secktor , izuku_num , msg , 'pp' );
 })
