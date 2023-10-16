const { tlang,cmd } = require('../lib')
 const Config = require('../config')
 const prefix = Config.prefix
 const maker = require('mumaker')
 
     //---------------------------------------------------------------------------
 cmd({ pattern: "deep", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
     })
//------------------------------------------------------------------------------------------
