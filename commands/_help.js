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
const _0x90acd9=_0x510e;function _0x510e(_0x1213a0,_0x1a1f6c){const _0x4dca6a=_0x4dca();return _0x510e=function(_0x510e9e,_0x15b9ba){_0x510e9e=_0x510e9e-0x147;let _0x29f899=_0x4dca6a[_0x510e9e];return _0x29f899;},_0x510e(_0x1213a0,_0x1a1f6c);}function _0x4dca(){const _0x2b5a11=['cmd','../lib','dontAddCommandList','\x20]\x0a│\x20│\x20Owner:-\x20','ownername','1620sukwUG','\x0a│\x20│\x20Mem:-\x20','map','join','18905755zdxfww','¤\x20═══╗\x0a','```','231FpqtAz','help\x20attp_\x0a*Made\x20by\x20🥷\x20Excel*\x20','*⚡️Alias:*\x20','│\x20┌────────────◆\x0a│\x20│\x20User:-\x20','4439727NofTfr','\x0a│\x20│\x20Date:-\x20','301262YZVedw','*😔No\x20Such\x20commands.*','\x0a│\x20└────────────◆\x0a└──────────────\x0a\x0a','8bDECWY','desc','DD/MM/YYYY','sendMessage','HH:mm:ss','totalmem','format','3713254FzxuVo','reply','title','push','use','countDocuments','\x0a│\x20│\x20Theme:-\x20','└──────────────⊷\x0a','*\x20』\x0a','Africa/Lagos','1672989cUVOWv','freemem','length','╔════『\x20*','7757220ABUGTy','1jIrTXz','toLowerCase','\x0a│\x20│\x20Users:-\x20','Africa/LAGOS','split','menu','26232RdwJSV','*🍁Command:*\x20','\x0a│\x20│\x20Prefix:-\x20[\x20','Help\x20list','\x0a│\x20│\x20Plugins:-\x20','pattern','*✨Category:*\x20','╔═══\x20¤\x20','locale','category','12CvypNa','10LWetNA','find'];_0x4dca=function(){return _0x2b5a11;};return _0x4dca();}(function(_0x10e583,_0x26b611){const _0x3e1d80=_0x510e,_0xd8f2d9=_0x10e583();while(!![]){try{const _0x772de=parseInt(_0x3e1d80(0x16b))/0x1*(parseInt(_0x3e1d80(0x15c))/0x2)+parseInt(_0x3e1d80(0x166))/0x3*(-parseInt(_0x3e1d80(0x17b))/0x4)+parseInt(_0x3e1d80(0x16a))/0x5+parseInt(_0x3e1d80(0x171))/0x6*(parseInt(_0x3e1d80(0x14c))/0x7)+parseInt(_0x3e1d80(0x155))/0x8*(parseInt(_0x3e1d80(0x150))/0x9)+-parseInt(_0x3e1d80(0x17c))/0xa*(-parseInt(_0x3e1d80(0x149))/0xb)+parseInt(_0x3e1d80(0x183))/0xc*(-parseInt(_0x3e1d80(0x152))/0xd);if(_0x772de===_0x26b611)break;else _0xd8f2d9['push'](_0xd8f2d9['shift']());}catch(_0x12f626){_0xd8f2d9['push'](_0xd8f2d9['shift']());}}}(_0x4dca,0xeb13c),Secktor[_0x90acd9(0x17e)]({'pattern':'help','alias':[_0x90acd9(0x170)],'desc':_0x90acd9(0x174),'category':'general','react':'📡','filename':__filename},async(_0x1e0d95,_0x5e322b,_0x3db689)=>{const _0xa8d630=_0x90acd9,{commands:_0x16f86d}=require(_0xa8d630(0x17f));if(msg['split']('\x20')[0x0]){let _0x3c8656=[];const _0x5905f2=_0x16f86d[_0xa8d630(0x17d)](_0x4ad357=>_0x4ad357['pattern']===_0x3db689[_0xa8d630(0x16f)]('\x20')[0x0][_0xa8d630(0x16c)]());if(!_0x5905f2)return await _0x5e322b[_0xa8d630(0x15d)](_0xa8d630(0x153));else _0x3c8656[_0xa8d630(0x15f)](_0xa8d630(0x172)+_0x5905f2[_0xa8d630(0x176)]);if(_0x5905f2['category'])_0x3c8656[_0xa8d630(0x15f)](_0xa8d630(0x177)+_0x5905f2[_0xa8d630(0x17a)]);if(_0x5905f2['alias'])_0x3c8656[_0xa8d630(0x15f)](_0xa8d630(0x14e)+_0x5905f2['alias']);if(_0x5905f2[_0xa8d630(0x156)])_0x3c8656['push']('*🗂Description:*\x20'+_0x5905f2['desc']);if(_0x5905f2[_0xa8d630(0x160)])_0x3c8656['push']('*📡Usage:*\x0a\x20```'+prefix+_0x5905f2[_0xa8d630(0x176)]+'\x20'+_0x5905f2[_0xa8d630(0x160)]+'```');return await _0x5e322b['reply'](_0x3c8656[_0xa8d630(0x148)]('\x0a'));}else{const _0x5a1b88={};_0x16f86d[_0xa8d630(0x147)](async(_0x132b45,_0x4260a2)=>{const _0x5d333f=_0xa8d630;if(_0x132b45[_0x5d333f(0x180)]===![]&&_0x132b45[_0x5d333f(0x176)]!==undefined){if(!_0x5a1b88[_0x132b45[_0x5d333f(0x17a)]])_0x5a1b88[_0x132b45[_0x5d333f(0x17a)]]=[];_0x5a1b88[_0x132b45[_0x5d333f(0x17a)]]['push'](_0x132b45['pattern']);}});const _0x1733f8=moment(moment())[_0xa8d630(0x15b)](_0xa8d630(0x159));moment['tz']['setDefault'](_0xa8d630(0x16e))[_0xa8d630(0x179)]('id');const _0x1c6551=moment['tz'](_0xa8d630(0x165))[_0xa8d630(0x15b)](_0xa8d630(0x157));let _0x4b0e34=await sck1[_0xa8d630(0x161)](),_0x2610fd=_0xa8d630(0x178)+fancytext(Config['ownername'][_0xa8d630(0x16f)]('\x20')[0x0],0x3a)+_0xa8d630(0x14a);_0x2610fd+=_0xa8d630(0x14b)+(_0xa8d630(0x14f)+_0x5e322b['pushName']+_0xa8d630(0x162)+tlang()[_0xa8d630(0x15e)]+_0xa8d630(0x173)+prefix+_0xa8d630(0x181)+Config[_0xa8d630(0x182)]+_0xa8d630(0x175)+_0x16f86d[_0xa8d630(0x168)]+_0xa8d630(0x16d)+_0x4b0e34+'\x0a│\x20│\x20Uptime:-\x20'+runtime(process['uptime']())+_0xa8d630(0x184)+formatp(os[_0xa8d630(0x15a)]()-os[_0xa8d630(0x167)]())+'/'+formatp(os[_0xa8d630(0x15a)]())+'\x0a│\x20│\x20Time:-\x20'+_0x1733f8+_0xa8d630(0x151)+_0x1c6551+_0xa8d630(0x154))+_0xa8d630(0x14b);for(const _0x25ed74 in _0x5a1b88){_0x2610fd+=_0xa8d630(0x169)+tiny(_0x25ed74)+'*\x20』\x0a';if(_0x3db689[_0xa8d630(0x16c)]()==_0x25ed74['toLowerCase']()){_0x2610fd=_0xa8d630(0x169)+tiny(_0x25ed74)+_0xa8d630(0x164);for(const _0x3c716d of _0x5a1b88[_0x25ed74]){_0x2610fd+='│\x20'+fancytext(_0x3c716d,0x1)+'\x0a';}_0x2610fd+=_0xa8d630(0x163);break;}else{for(const _0x26e9c4 of _0x5a1b88[_0x25ed74]){_0x2610fd+='│\x20'+fancytext(_0x26e9c4,0x1)+'\x0a';}_0x2610fd+=_0xa8d630(0x163);}}_0x2610fd+='*⚡️Type:*\x20_'+prefix+'help\x20cmd_\x20name\x20to\x20know\x20more\x20about\x20specific\x20command.\x0a*Eg:*\x20_'+prefix+_0xa8d630(0x14d);let _0x1fba1b={'image':{'url':await botpic()},'caption':_0x2610fd};return await _0x1e0d95[_0xa8d630(0x158)](_0x5e322b['chat'],_0x1fba1b);}}));
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

