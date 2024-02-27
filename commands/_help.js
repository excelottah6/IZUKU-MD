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
function _0x1018(_0x53e35d,_0x46e2e5){const _0x27d5e8=_0x27d5();return _0x1018=function(_0x1018cd,_0x47e659){_0x1018cd=_0x1018cd-0xa7;let _0x28b15b=_0x27d5e8[_0x1018cd];return _0x28b15b;},_0x1018(_0x53e35d,_0x46e2e5);}const _0xa536b8=_0x1018;(function(_0x3f42a3,_0x4d6304){const _0x2446dc=_0x1018,_0x2d3c85=_0x3f42a3();while(!![]){try{const _0x995402=-parseInt(_0x2446dc(0xda))/0x1*(-parseInt(_0x2446dc(0xe3))/0x2)+-parseInt(_0x2446dc(0xd0))/0x3*(parseInt(_0x2446dc(0xc3))/0x4)+-parseInt(_0x2446dc(0xb2))/0x5+parseInt(_0x2446dc(0xb9))/0x6*(parseInt(_0x2446dc(0xc1))/0x7)+-parseInt(_0x2446dc(0xa8))/0x8*(parseInt(_0x2446dc(0xbb))/0x9)+-parseInt(_0x2446dc(0xb7))/0xa*(-parseInt(_0x2446dc(0xe0))/0xb)+parseInt(_0x2446dc(0xc2))/0xc*(-parseInt(_0x2446dc(0xbf))/0xd);if(_0x995402===_0x4d6304)break;else _0x2d3c85['push'](_0x2d3c85['shift']());}catch(_0x3fdd5d){_0x2d3c85['push'](_0x2d3c85['shift']());}}}(_0x27d5,0xae7cc),Secktor[_0xa536b8(0xc9)]({'pattern':_0xa536b8(0xbd),'alias':['menu'],'desc':'Help\x20list','category':_0xa536b8(0xce),'react':'📡','filename':__filename},async(_0x112119,_0x295668,_0x59e00d)=>{const _0x2eb873=_0xa536b8,{commands:_0x4e4fde}=require('../lib');if(_0x59e00d[_0x2eb873(0xc6)]('\x20')[0x0]){let _0x26cd69=[];const _0x356b69=_0x4e4fde[_0x2eb873(0xd8)](_0x532afe=>_0x532afe[_0x2eb873(0xdb)]===_0x59e00d[_0x2eb873(0xc6)]('\x20')[0x0]['toLowerCase']());if(!_0x356b69)return await _0x295668[_0x2eb873(0xc8)](_0x2eb873(0xca));else _0x26cd69[_0x2eb873(0xb3)](_0x2eb873(0xbc)+_0x356b69[_0x2eb873(0xdb)]);if(_0x356b69[_0x2eb873(0xdc)])_0x26cd69[_0x2eb873(0xb3)](_0x2eb873(0xc5)+_0x356b69[_0x2eb873(0xdc)]);if(_0x356b69[_0x2eb873(0xdd)])_0x26cd69[_0x2eb873(0xb3)](_0x2eb873(0xe4)+_0x356b69[_0x2eb873(0xdd)]);if(_0x356b69[_0x2eb873(0xd2)])_0x26cd69[_0x2eb873(0xb3)](_0x2eb873(0xc7)+_0x356b69[_0x2eb873(0xd2)]);if(_0x356b69[_0x2eb873(0xcc)])_0x26cd69[_0x2eb873(0xb3)](_0x2eb873(0xa9)+prefix+_0x356b69['pattern']+'\x20'+_0x356b69[_0x2eb873(0xcc)]+_0x2eb873(0xcb));return await _0x295668[_0x2eb873(0xc8)](_0x26cd69[_0x2eb873(0xbe)]('\x0a'));}else{const _0x30568b={};_0x4e4fde['map'](async(_0x552bc7,_0x1bd513)=>{const _0x4ee60f=_0x2eb873;if(_0x552bc7[_0x4ee60f(0xdf)]===![]&&_0x552bc7[_0x4ee60f(0xdb)]!==undefined){if(!_0x30568b[_0x552bc7['category']])_0x30568b[_0x552bc7[_0x4ee60f(0xdc)]]=[];_0x30568b[_0x552bc7['category']][_0x4ee60f(0xb3)](_0x552bc7['pattern']);}});const _0x11a4dc=moment(moment())['format'](_0x2eb873(0xb6));moment['tz'][_0x2eb873(0xba)](_0x2eb873(0xaf))[_0x2eb873(0xb5)]('id');const _0x3ad74c=moment['tz']('Africa/Lagos')[_0x2eb873(0xe1)](_0x2eb873(0xd6));let _0x3fbe00=await sck1[_0x2eb873(0xcd)](),_0x36d16d='╔═══\x20¤\x20'+fancytext(Config[_0x2eb873(0xaa)][_0x2eb873(0xc6)]('\x20')[0x0],0x3a)+_0x2eb873(0xb0);_0x36d16d+='```'+(_0x2eb873(0xac)+_0x295668['pushName']+_0x2eb873(0xd7)+tlang()[_0x2eb873(0xab)]+_0x2eb873(0xde)+prefix+_0x2eb873(0xd5)+Config['ownername']+_0x2eb873(0xa7)+_0x4e4fde[_0x2eb873(0xad)]+_0x2eb873(0xc4)+_0x3fbe00+'\x0a│\x20│\x20Uptime:-\x20'+runtime(process['uptime']())+_0x2eb873(0xae)+formatp(os[_0x2eb873(0xd9)]()-os[_0x2eb873(0xd3)]())+'/'+formatp(os[_0x2eb873(0xd9)]())+_0x2eb873(0xb8)+_0x11a4dc+_0x2eb873(0xe2)+_0x3ad74c+'\x0a│\x20└────────────◆\x0a└──────────────\x0a\x0a')+_0x2eb873(0xcb);for(const _0x252142 in _0x30568b){_0x36d16d+=_0x2eb873(0xb1)+tiny(_0x252142)+'*\x20』\x0a';if(_0x59e00d['toLowerCase']()==_0x252142[_0x2eb873(0xc0)]()){_0x36d16d=_0x2eb873(0xb1)+tiny(_0x252142)+'*\x20』\x0a';for(const _0x18a462 of _0x30568b[_0x252142]){_0x36d16d+='│\x20'+fancytext(_0x18a462,0x1)+'\x0a';}_0x36d16d+=_0x2eb873(0xcf);break;}else{for(const _0x21f815 of _0x30568b[_0x252142]){_0x36d16d+='│\x20'+fancytext(_0x21f815,0x1)+'\x0a';}_0x36d16d+=_0x2eb873(0xcf);}}_0x36d16d+=_0x2eb873(0xd4)+prefix+_0x2eb873(0xb4)+prefix+_0x2eb873(0xd1);let _0x139e10={'image':{'url':await botpic()},'caption':_0x36d16d};return await _0x112119[_0x2eb873(0xe5)](_0x295668['chat'],_0x139e10);}}));function _0x27d5(){const _0x49a58e=['*✨Category:*\x20','split','*🗂Description:*\x20','reply','cmd','*😔No\x20Such\x20commands.*','```','use','countDocuments','general','└──────────────⊷\x0a','24ULgFnX','help\x20attp_\x0a*Made\x20by\x20🥷\x20Excel*\x20','desc','freemem','*⚡️Type:*\x20_','\x20]\x0a│\x20│\x20Owner:-\x20','DD/MM/YYYY','\x0a│\x20│\x20Theme:-\x20','find','totalmem','237465FwiIiV','pattern','category','alias','\x0a│\x20│\x20Prefix:-\x20[\x20','dontAddCommandList','79211IlbrFU','format','\x0a│\x20│\x20Date:-\x20','2BgUOCP','*⚡️Alias:*\x20','sendMessage','\x0a│\x20│\x20Plugins:-\x20','4808wNPIpS','*📡Usage:*\x0a\x20```','ownername','title','│\x20┌────────────◆\x0a│\x20│\x20User:-\x20','length','\x0a│\x20│\x20Mem:-\x20','Africa/LAGOS','¤\x20═══╗\x0a','╔════『\x20*','1664210iRiVWE','push','help\x20cmd_\x20name\x20to\x20know\x20more\x20about\x20specific\x20command.\x0a*Eg:*\x20_','locale','HH:mm:ss','1570ceCtRS','\x0a│\x20│\x20Time:-\x20','12MTwAeJ','setDefault','4167bwiAmu','*🍁Command:*\x20','help','join','91fjdlug','toLowerCase','3599848dVXjXp','233652keMfgg','467224IxOkmD','\x0a│\x20│\x20Users:-\x20'];_0x27d5=function(){return _0x49a58e;};return _0x27d5();}
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

