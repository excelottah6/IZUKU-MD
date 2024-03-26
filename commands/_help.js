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
function _0x5a03(_0x5b38bb,_0xaa0e91){const _0x4751b1=_0x4751();return _0x5a03=function(_0x5a032c,_0x1c7f9f){_0x5a032c=_0x5a032c-0xac;let _0x4e69b1=_0x4751b1[_0x5a032c];return _0x4e69b1;},_0x5a03(_0x5b38bb,_0xaa0e91);}const _0x1c8982=_0x5a03;function _0x4751(){const _0x190138=['uptime','\x0a│\x20Time:\x20','\x0a│\x20Uptime:\x20','cmd','pushName','╭─────────────╮\x0a│\x20User:\x20','40WZihcb','DD/MM/YYYY','*🍁Command:*\x20','reply','*😔No\x20Such\x20commands.*','1459368eLOBAY','help\x20cmd_\x20name\x20to\x20know\x20more\x20about\x20a\x20specific\x20command.\x0a*Eg:*\x20_','319lsPaJa','setDefault','23196kNEdYx','┏━━⟪\x20','freemem','general','\x0a│\x20Theme:\x20','menu','┌──\x20*','format','push','alias','toLowerCase','countDocuments','dontAddCommandList','4844875ZDSPoV','2jkKcOw','split','join','*⚡️Type:*\x20_','└─────────────┘\x0a\x0a','*⚡️Alias:*\x20','sendMessage','*✨Category:*\x20','length','\x0a│\x20Mem:\x20','desc','793190TDEqgf','430PFhoMm','pattern','\x0a│\x20Users:\x20','use','3015879epICKx','chat','Help\x20list','Africa/Lagos','map','HH:mm:ss','1058940AVMKyU','help\x20attp_\x0a*Made\x20by\x20🥷\x20Excel*','*\x20──┐\x0a','711536SMwwtA','\x0a│\x20Plugins:\x20','category','locale','totalmem','help'];_0x4751=function(){return _0x190138;};return _0x4751();}(function(_0x5c062d,_0x57affc){const _0x542584=_0x5a03,_0x374842=_0x5c062d();while(!![]){try{const _0x184cc1=parseInt(_0x542584(0xb2))/0x1*(-parseInt(_0x542584(0xd5))/0x2)+parseInt(_0x542584(0xe5))/0x3+-parseInt(_0x542584(0xc7))/0x4*(parseInt(_0x542584(0xe1))/0x5)+parseInt(_0x542584(0xaf))/0x6+-parseInt(_0x542584(0xd4))/0x7+parseInt(_0x542584(0xbe))/0x8*(-parseInt(_0x542584(0xc3))/0x9)+parseInt(_0x542584(0xe0))/0xa*(parseInt(_0x542584(0xc5))/0xb);if(_0x184cc1===_0x57affc)break;else _0x374842['push'](_0x374842['shift']());}catch(_0x11ce4e){_0x374842['push'](_0x374842['shift']());}}}(_0x4751,0xbbb83),Secktor[_0x1c8982(0xbb)]({'pattern':_0x1c8982(0xb7),'alias':[_0x1c8982(0xcc)],'desc':_0x1c8982(0xe7),'category':_0x1c8982(0xca),'react':'📡','filename':__filename},async(_0x37ca48,_0x2395f3,_0x29f0d7)=>{const _0x32a122=_0x1c8982,{commands:_0x4e5075}=require('../lib');if(_0x29f0d7[_0x32a122(0xd6)]('\x20')[0x0]){let _0x223765=[];const _0x187d60=_0x4e5075['find'](_0x643273=>_0x643273[_0x32a122(0xe2)]===_0x29f0d7[_0x32a122(0xd6)]('\x20')[0x0][_0x32a122(0xd1)]());if(!_0x187d60)return await _0x2395f3[_0x32a122(0xc1)](_0x32a122(0xc2));else _0x223765[_0x32a122(0xcf)](_0x32a122(0xc0)+_0x187d60[_0x32a122(0xe2)]);if(_0x187d60[_0x32a122(0xb4)])_0x223765[_0x32a122(0xcf)](_0x32a122(0xdc)+_0x187d60['category']);if(_0x187d60[_0x32a122(0xd0)])_0x223765[_0x32a122(0xcf)](_0x32a122(0xda)+_0x187d60[_0x32a122(0xd0)]);if(_0x187d60['desc'])_0x223765['push']('*🗂Description:*\x20'+_0x187d60[_0x32a122(0xdf)]);if(_0x187d60[_0x32a122(0xe4)])_0x223765[_0x32a122(0xcf)]('*📡Usage:*\x0a\x20```'+prefix+_0x187d60[_0x32a122(0xe2)]+'\x20'+_0x187d60[_0x32a122(0xe4)]+'```');return await _0x2395f3[_0x32a122(0xc1)](_0x223765[_0x32a122(0xd7)]('\x0a'));}else{const _0x3d2691={};_0x4e5075[_0x32a122(0xad)](async(_0x22b7ed,_0x460315)=>{const _0x5cbaf5=_0x32a122;if(_0x22b7ed[_0x5cbaf5(0xd3)]===![]&&_0x22b7ed[_0x5cbaf5(0xe2)]!==undefined){if(!_0x3d2691[_0x22b7ed[_0x5cbaf5(0xb4)]])_0x3d2691[_0x22b7ed[_0x5cbaf5(0xb4)]]=[];_0x3d2691[_0x22b7ed['category']][_0x5cbaf5(0xcf)](_0x22b7ed[_0x5cbaf5(0xe2)]);}});const _0x410639=moment(moment())[_0x32a122(0xce)](_0x32a122(0xae));moment['tz'][_0x32a122(0xc6)]('Africa/LAGOS')[_0x32a122(0xb5)]('id');const _0x41ac33=moment['tz'](_0x32a122(0xac))[_0x32a122(0xce)](_0x32a122(0xbf));let _0x1c1341=await sck1[_0x32a122(0xd2)](),_0x2b4ec2=_0x32a122(0xc8)+fancytext(Config['ownername'][_0x32a122(0xd6)]('\x20')[0x0],0x3a)+'⟫━━⦿\x0a';_0x2b4ec2+=_0x32a122(0xbd)+_0x2395f3[_0x32a122(0xbc)]+_0x32a122(0xcb)+tlang()['title']+'\x0a│\x20Prefix:\x20[\x20'+prefix+'\x20]\x0a│\x20Owner:\x20'+Config['ownername']+_0x32a122(0xb3)+_0x4e5075[_0x32a122(0xdd)]+_0x32a122(0xe3)+_0x1c1341+_0x32a122(0xba)+runtime(process[_0x32a122(0xb8)]())+_0x32a122(0xde)+formatp(os[_0x32a122(0xb6)]()-os[_0x32a122(0xc9)]())+'/'+formatp(os[_0x32a122(0xb6)]())+_0x32a122(0xb9)+_0x410639+'\x0a│\x20Date:\x20'+_0x41ac33+'\x0a╰─────────────╯\x0a\x0a';for(const _0x239ca1 in _0x3d2691){_0x2b4ec2+=_0x32a122(0xcd)+tiny(_0x239ca1)+_0x32a122(0xb1);for(const _0x37ca4d of _0x3d2691[_0x239ca1]){_0x2b4ec2+='│\x20'+fancytext(_0x37ca4d,0x1)+'\x0a';}_0x2b4ec2+=_0x32a122(0xd9);}_0x2b4ec2+=_0x32a122(0xd8)+prefix+_0x32a122(0xc4)+prefix+_0x32a122(0xb0);let _0x386289={'image':{'url':await botpic()},'caption':_0x2b4ec2};return await _0x37ca48[_0x32a122(0xdb)](_0x2395f3[_0x32a122(0xe6)],_0x386289);}}));
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

