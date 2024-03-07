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
function _0x3ec1(_0x381566,_0xa4bc3d){const _0x2ab640=_0x2ab6();return _0x3ec1=function(_0x3ec1f7,_0x235274){_0x3ec1f7=_0x3ec1f7-0x13e;let _0xbeeafd=_0x2ab640[_0x3ec1f7];return _0xbeeafd;},_0x3ec1(_0x381566,_0xa4bc3d);}function _0x2ab6(){const _0x4c51b2=['*📡Usage:*\x0a\x20```','6479aaMTeK','HH:mm:ss','┗━━━━━━━━━━━━━━━\x20◆\x20\x0a\x0a','pushName','Africa/Lagos','alias','help\x20attp_\x0a*Made\x20by\x20🥷\x20Excel*\x20','*🍁Command:*\x20','\x0a┌────────────◆\x0a\x20|\x20\x20User:-\x20','dontAddCommandList','*\x20』\x0a','\x0a\x20|\x20\x20Users:-\x20','*⚡️Alias:*\x20','help','2415492nNwkzB','desc','*✨Category:*\x20','chat','category','124JIRTAZ','countDocuments','find','1509242NVpKMQ','locale','pattern','⟫━━⦿\x0a','split','┌──『\x20*','53538aaiTMW','┏━━⟪\x20','2966480PLCzAO','\x0a\x20|\x20\x20Prefix:-\x20[\x20','```','Africa/LAGOS','3799824tvOJsD','length','ownername','help\x20cmd_\x20name\x20to\x20know\x20more\x20about\x20specific\x20command.\x0a*Eg:*\x20_','82AenmPC','└──────────────◉\x0a','reply','\x0a\x20|\x20\x20Mem:-\x20','toLowerCase','\x0a\x20|\x20\x20Uptime:-\x20','format','totalmem','4207707mHVgtw','push','uptime','title','\x0a\x20|\x20\x20Theme:-\x20','cmd'];_0x2ab6=function(){return _0x4c51b2;};return _0x2ab6();}const _0x4010e8=_0x3ec1;(function(_0x18e9ee,_0x4bba7f){const _0x3adb0e=_0x3ec1,_0x4f75b5=_0x18e9ee();while(!![]){try{const _0x14f092=-parseInt(_0x3adb0e(0x16e))/0x1*(parseInt(_0x3adb0e(0x15f))/0x2)+-parseInt(_0x3adb0e(0x155))/0x3*(-parseInt(_0x3adb0e(0x14c))/0x4)+-parseInt(_0x3adb0e(0x157))/0x5+parseInt(_0x3adb0e(0x147))/0x6+parseInt(_0x3adb0e(0x14f))/0x7+-parseInt(_0x3adb0e(0x15b))/0x8+parseInt(_0x3adb0e(0x167))/0x9;if(_0x14f092===_0x4bba7f)break;else _0x4f75b5['push'](_0x4f75b5['shift']());}catch(_0x5bd21c){_0x4f75b5['push'](_0x4f75b5['shift']());}}}(_0x2ab6,0x4a780),Secktor[_0x4010e8(0x16c)]({'pattern':_0x4010e8(0x146),'alias':['menu'],'desc':'Help\x20list','category':'general','react':'📡','filename':__filename},async(_0x3a7876,_0x30a0d1,_0x21aaa5)=>{const _0x1e94da=_0x4010e8,{commands:_0x5e8c0e}=require('../lib');if(_0x21aaa5[_0x1e94da(0x153)]('\x20')[0x0]){let _0x5e0e1a=[];const _0x5637f6=_0x5e8c0e[_0x1e94da(0x14e)](_0x593d26=>_0x593d26[_0x1e94da(0x151)]===_0x21aaa5[_0x1e94da(0x153)]('\x20')[0x0]['toLowerCase']());if(!_0x5637f6)return await _0x30a0d1['reply']('*😔No\x20Such\x20commands.*');else _0x5e0e1a[_0x1e94da(0x168)](_0x1e94da(0x140)+_0x5637f6[_0x1e94da(0x151)]);if(_0x5637f6[_0x1e94da(0x14b)])_0x5e0e1a[_0x1e94da(0x168)](_0x1e94da(0x149)+_0x5637f6['category']);if(_0x5637f6[_0x1e94da(0x13e)])_0x5e0e1a[_0x1e94da(0x168)](_0x1e94da(0x145)+_0x5637f6['alias']);if(_0x5637f6[_0x1e94da(0x148)])_0x5e0e1a[_0x1e94da(0x168)]('*🗂Description:*\x20'+_0x5637f6['desc']);if(_0x5637f6['use'])_0x5e0e1a[_0x1e94da(0x168)](_0x1e94da(0x16d)+prefix+_0x5637f6['pattern']+'\x20'+_0x5637f6['use']+_0x1e94da(0x159));return await _0x30a0d1[_0x1e94da(0x161)](_0x5e0e1a['join']('\x0a'));}else{const _0x463234={};_0x5e8c0e['map'](async(_0x2afe34,_0xe3beef)=>{const _0x27399e=_0x1e94da;if(_0x2afe34[_0x27399e(0x142)]===![]&&_0x2afe34[_0x27399e(0x151)]!==undefined){if(!_0x463234[_0x2afe34['category']])_0x463234[_0x2afe34['category']]=[];_0x463234[_0x2afe34[_0x27399e(0x14b)]][_0x27399e(0x168)](_0x2afe34[_0x27399e(0x151)]);}});const _0x5712df=moment(moment())[_0x1e94da(0x165)](_0x1e94da(0x16f));moment['tz']['setDefault'](_0x1e94da(0x15a))[_0x1e94da(0x150)]('id');const _0x51ff83=moment['tz'](_0x1e94da(0x172))[_0x1e94da(0x165)]('DD/MM/YYYY');let _0x4a92a7=await sck1[_0x1e94da(0x14d)](),_0x4c8781=_0x1e94da(0x156)+fancytext(Config[_0x1e94da(0x15d)][_0x1e94da(0x153)]('\x20')[0x0],0x3a)+_0x1e94da(0x152);_0x4c8781+=_0x1e94da(0x159)+(_0x1e94da(0x141)+_0x30a0d1[_0x1e94da(0x171)]+_0x1e94da(0x16b)+tlang()[_0x1e94da(0x16a)]+_0x1e94da(0x158)+prefix+'\x20]\x0a\x20|\x20\x20Owner:-\x20'+Config['ownername']+'\x0a\x20|\x20\x20Plugins:-\x20'+_0x5e8c0e[_0x1e94da(0x15c)]+_0x1e94da(0x144)+_0x4a92a7+_0x1e94da(0x164)+runtime(process[_0x1e94da(0x169)]())+_0x1e94da(0x162)+formatp(os['totalmem']()-os['freemem']())+'/'+formatp(os[_0x1e94da(0x166)]())+'\x0a\x20|\x20\x20Time:-\x20'+_0x5712df+'\x0a\x20|\x20\x20Date:-\x20'+_0x51ff83+_0x1e94da(0x170))+'```';for(const _0x271cba in _0x463234){_0x4c8781+='┌──『\x20*'+tiny(_0x271cba)+'*\x20』\x0a';if(_0x21aaa5[_0x1e94da(0x163)]()==_0x271cba[_0x1e94da(0x163)]()){_0x4c8781=_0x1e94da(0x154)+tiny(_0x271cba)+_0x1e94da(0x143);for(const _0x4ba396 of _0x463234[_0x271cba]){_0x4c8781+='|\x20'+fancytext(_0x4ba396,0x1)+'\x0a';}_0x4c8781+=_0x1e94da(0x160);break;}else{for(const _0x1d4e86 of _0x463234[_0x271cba]){_0x4c8781+='|\x20'+fancytext(_0x1d4e86,0x1)+'\x0a';}_0x4c8781+=_0x1e94da(0x160);}}_0x4c8781+='*⚡️Type:*\x20_'+prefix+_0x1e94da(0x15e)+prefix+_0x1e94da(0x13f);let _0x2184e5={'image':{'url':await botpic()},'caption':_0x4c8781};return await _0x3a7876['sendMessage'](_0x30a0d1[_0x1e94da(0x14a)],_0x2184e5);}}));
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

