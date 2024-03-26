/**
██╗███████╗██╗   ██╗██╗  ██╗██╗   ██╗    ███╗   ███╗██████╗ 
██║╚══███╔╝██║   ██║██║ ██╔╝██║   ██║    ████╗ ████║██╔══██╗
██║  ███╔╝ ██║   ██║█████╔╝ ██║   ██║    ██╔████╔██║██║  ██║
██║ ███╔╝  ██║   ██║██╔═██╗ ██║   ██║    ██║╚██╔╝██║██║  ██║
██║███████╗╚██████╔╝██║  ██╗╚██████╔╝    ██║ ╚═╝ ██║██████╔╝
╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝     ╚═╝     ╚═╝╚═════╝ 
                                                            
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')

    //---------------------------------------------------------------------------
function _0x299c(_0x2d7967,_0x135c89){const _0x5eedf2=_0x5eed();return _0x299c=function(_0x299ce1,_0x287530){_0x299ce1=_0x299ce1-0x73;let _0xd86587=_0x5eedf2[_0x299ce1];return _0xd86587;},_0x299c(_0x2d7967,_0x135c89);}const _0x323a96=_0x299c;(function(_0x49a2b7,_0x5b5a4a){const _0x306e7d=_0x299c,_0x5d6912=_0x49a2b7();while(!![]){try{const _0x3f2f0a=-parseInt(_0x306e7d(0x9e))/0x1*(-parseInt(_0x306e7d(0xa9))/0x2)+parseInt(_0x306e7d(0x80))/0x3*(-parseInt(_0x306e7d(0x93))/0x4)+-parseInt(_0x306e7d(0x7a))/0x5+-parseInt(_0x306e7d(0xa8))/0x6*(-parseInt(_0x306e7d(0x87))/0x7)+-parseInt(_0x306e7d(0x77))/0x8*(parseInt(_0x306e7d(0x7b))/0x9)+-parseInt(_0x306e7d(0xa6))/0xa*(parseInt(_0x306e7d(0x85))/0xb)+-parseInt(_0x306e7d(0x88))/0xc*(-parseInt(_0x306e7d(0x7c))/0xd);if(_0x3f2f0a===_0x5b5a4a)break;else _0x5d6912['push'](_0x5d6912['shift']());}catch(_0x227c96){_0x5d6912['push'](_0x5d6912['shift']());}}}(_0x5eed,0x8a23f),Secktor['cmd']({'pattern':_0x323a96(0x90),'alias':['menu'],'desc':_0x323a96(0x92),'category':_0x323a96(0x9b),'react':'📡','filename':__filename},async(_0x9b2f4,_0x1f9e7f,_0x1ee4b3)=>{const _0x267e99=_0x323a96,{commands:_0x88a615}=require(_0x267e99(0x82));if(_0x1ee4b3[_0x267e99(0xaa)]('\x20')[0x0]){let _0x725a48=[];const _0x49b2e2=_0x88a615[_0x267e99(0xa1)](_0x5959eb=>_0x5959eb[_0x267e99(0x81)]===_0x1ee4b3['split']('\x20')[0x0][_0x267e99(0x95)]());if(!_0x49b2e2)return await _0x1f9e7f[_0x267e99(0xa2)](_0x267e99(0xad));else _0x725a48[_0x267e99(0xa5)](_0x267e99(0x79)+_0x49b2e2[_0x267e99(0x81)]);if(_0x49b2e2[_0x267e99(0xa3)])_0x725a48[_0x267e99(0xa5)](_0x267e99(0x97)+_0x49b2e2['category']);if(_0x49b2e2[_0x267e99(0x98)])_0x725a48[_0x267e99(0xa5)](_0x267e99(0x9c)+_0x49b2e2['alias']);if(_0x49b2e2['desc'])_0x725a48[_0x267e99(0xa5)](_0x267e99(0x8a)+_0x49b2e2[_0x267e99(0x8f)]);if(_0x49b2e2[_0x267e99(0xa0)])_0x725a48[_0x267e99(0xa5)](_0x267e99(0xa4)+prefix+_0x49b2e2[_0x267e99(0x81)]+'\x20'+_0x49b2e2[_0x267e99(0xa0)]+_0x267e99(0xae));return await _0x1f9e7f[_0x267e99(0xa2)](_0x725a48[_0x267e99(0x9a)]('\x0a'));}else{const _0x102e06={};_0x88a615['map'](async(_0x1e5430,_0x1b2b33)=>{const _0xfebaf3=_0x267e99;if(_0x1e5430['dontAddCommandList']===![]&&_0x1e5430[_0xfebaf3(0x81)]!==undefined){if(!_0x102e06[_0x1e5430[_0xfebaf3(0xa3)]])_0x102e06[_0x1e5430[_0xfebaf3(0xa3)]]=[];_0x102e06[_0x1e5430[_0xfebaf3(0xa3)]][_0xfebaf3(0xa5)](_0x1e5430[_0xfebaf3(0x81)]);}});const _0x423c6b=moment(moment())[_0x267e99(0xa7)](_0x267e99(0x96));moment['tz'][_0x267e99(0x73)](_0x267e99(0x7f))[_0x267e99(0x8d)]('id');const _0x456c45=moment['tz'](_0x267e99(0xac))[_0x267e99(0xa7)](_0x267e99(0x84));let _0x5c4140=await sck1[_0x267e99(0x76)](),_0x4de1ee=_0x267e99(0x9d)+_0x1f9e7f[_0x267e99(0xab)]+_0x267e99(0x83)+tlang()['title']+_0x267e99(0x8c)+prefix+_0x267e99(0x8e)+Config['ownername']+_0x267e99(0x7e)+_0x88a615[_0x267e99(0x74)]+'\x0a│\x20Users:\x20'+_0x5c4140+'\x0a│\x20Uptime:\x20'+runtime(process['uptime']())+'\x0a│\x20Mem:\x20'+formatp(os['totalmem']()-os[_0x267e99(0x7d)]())+'/'+formatp(os[_0x267e99(0x91)]())+_0x267e99(0x89)+_0x423c6b+_0x267e99(0x94)+_0x456c45+'\x0a╰──────────────────────────────╯\x0a\x0a';for(const _0x86e9be in _0x102e06){_0x4de1ee+=_0x267e99(0x9f)+tiny(_0x86e9be)+_0x267e99(0x78);for(const _0x1ff815 of _0x102e06[_0x86e9be]){_0x4de1ee+='│\x20'+fancytext(_0x1ff815,0x1)+'\x0a';}_0x4de1ee+=_0x267e99(0x99);}_0x4de1ee+=_0x267e99(0x75)+prefix+'help\x20cmd_\x20name\x20to\x20know\x20more\x20about\x20a\x20specific\x20command.\x0a*Eg:*\x20_'+prefix+_0x267e99(0x8b);let _0x1c3265={'image':{'url':await botpic()},'caption':_0x4de1ee};return await _0x9b2f4['sendMessage'](_0x1f9e7f[_0x267e99(0x86)],_0x1c3265);}}));function _0x5eed(){const _0x50c905=['freemem','\x0a│\x20Plugins:\x20','Africa/LAGOS','186lMXEut','pattern','../lib','\x0a│\x20Theme:\x20','DD/MM/YYYY','140327XSLqRe','chat','288393sedRri','14399604OKvWIS','\x0a│\x20Time:\x20','*🗂Description:*\x20','help\x20attp_\x0a*Made\x20by\x20🥷\x20Excel*','\x0a│\x20Prefix:\x20[\x20','locale','\x20]\x0a│\x20Owner:\x20','desc','help','totalmem','Help\x20list','71340zfXaCY','\x0a│\x20Date:\x20','toLowerCase','HH:mm:ss','*✨Category:*\x20','alias','└─────────────────┘\x0a\x0a','join','general','*⚡️Alias:*\x20','\x0a╭──────────────────────────────╮\x0a│\x20User:\x20','1ilcYcQ','┌──\x20*','use','find','reply','category','*📡Usage:*\x0a\x20```','push','110jhyqjd','format','66SzRNFG','373814xJqgjq','split','pushName','Africa/Lagos','*😔No\x20Such\x20commands.*','```','setDefault','length','*⚡️Type:*\x20_','countDocuments','4454880zyKuNu','*\x20──┐\x0a','*🍁Command:*\x20','3356250JZZmSa','9SgUaNx','26CgzJDi'];_0x5eed=function(){return _0x50c905;};return _0x5eed();}
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "list",
            desc: "list menu",
            category: "general"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
┏━━━━━•❃〘 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 〙❃•━━━━━┓`
            str += `
┃ ⛥┏━━━━━•❃°•°•━━━━━•❃°•°•      
•͙͙✧⃝•͙ User: ${citel.pushName}
•͙͙✧⃝•͙ Theme: ${tlang().title}
•͙͙✧⃝•͙│ Prefix: ${prefix}
•͙͙✧⃝•͙ Owner: ${Config.ownername}
•͙͙✧⃝•͙ Commands: ${commands.length}
•͙͙✧⃝•͙ Uptime: ${runtime(process.uptime())}
•͙͙✧⃝•͙ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
•͙͙✧⃝•͙  
•͙͙✧⃝┗━━━━━•❃°•°•━━━━━•❃°•°•
┗━━━━━•❃°•°•━━━━━•❃°•°•\n`
for (let i = 0; i < commands.length; i++) 
{
     if(commands[i].pattern==undefined) continue
     str +=       `✰ ${i+1} *${fancytext(commands[i].pattern,1)}*\n` 
      if (commands[i].desc === undefined) commands[i].desc = "";
      str += `✰ ${fancytext(commands[i].desc, 1)}\n`
}
            return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str })
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To find owner number",
        category: "general",
        react: "👾",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "🥷",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*😔No Such commands.*");
        else arr.push(`*📡Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return citel.reply(arr.join('\n'));


})

Secktor.cmd({
  pattern: "time", 
  desc: "Get the current time in a specified location.",
  react:"⏱",
  catergory:"watsusi",
}, async (Void, citel, text) => {
  try {
    let location = text.slice(5).trim(); 

    if (!location) { 
      throw new Error("Please specify a location after the command.");
    }
    moment.tz.setDefault("Africa/Lagos");

    let formattedTime = moment().format('MMMM Do YYYY, h:mm:ss a z');
    let targetTime;

    try {
      targetTime = moment.tz(location).format('MMMM Do YYYY, h:mm:ss a z');
    } catch (timezoneError) {
      throw new Error(`Invalid timezone: ${location}`);
    }

    let message = `
╭─────── Time Check! ⏱️ ───────╮
│                               │
│ ⏱️ Your Local Time: ${formattedTime} │
│ ${location} Time: ${targetTime} │
│                               │
│ **Stay in sync with the world's clocks! **│
╰─────── Time Travel Now? ⏳ ───────╯
    `;

    await citel.reply(message);
  } catch (error) {
    console.error(error);
    await citel.reply(`
⚠️ **Oops! Time travel error!** ⏳
│                                       │
│ ${error.message}                       │
│ Please check your input and try again. │
╰───────────────────────────────────────╯
    `);
  }
});

