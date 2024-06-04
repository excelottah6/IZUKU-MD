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
 * @project_name : Izuku-Md
 * @author : excel <https://github.com/excelottah6>
 * @description : Izuku,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

//---------------------------------------------------------------------------
const {cmd,tlang,sleep} = require('../lib')
const fetch = require('node-fetch')
cmd({
        pattern: "restart",
        desc: "To restart bot",
        category: "tools",
        filename: __filename
    },
    async(Void, citel,text,{ isCreator }) => {
   if (!isCreator) return citel.reply(tlang().owner)
            const { exec } = require("child_process")
            citel.reply('Restarting')
            await sleep(2000)
            exec('pm2 restart all')
    }
);

cmd({
    pattern: "setsudo",
    desc: "Makes wa me of quoted or mentioned user.",
    category: "tools",
    filename: __filename
},
async(Void, citel, text) => {
if(!citel.quoted) return await citel.reply(*Please Reply A User*);
let user = citel.quoted.sender.split('@')[0]
if (global.sudo.includes(user)) return citel.reply("Number Already Exist In Sudo");
global.sudo += ',' + user ;
const headers = 
{
       'Accept': 'application/vnd.heroku+json; version=3',
        'Authorization': Bearer ${authToken},
        'Content-Type': 'application/json'
};
const varName = 'SUDO'
const newVarValue = global.sudo        
fetch(https://api.heroku.com/apps/${appName}/config-vars,
{
         method: 'PATCH',
         headers,
         body: JSON.stringify({ [varName]: newVarValue })
})
.then(response => response.json())
.then(data => { return citel.reply(*${user} Added Succesfully.*\nSudo Numbers : ${newVarValue}); })
.catch(error => citel.reply('Error While Adding new Sudo :'+ error));

})

cmd({
    pattern: "cpu",
    desc: "To check bot status",
    category: "general",
    filename: __filename,
  },
  async(Void, citel) => {
    const os = require('os')
    const speed = require('performance-now')
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
            return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => 
        {
            last.total += cpu.total
            last.speed += cpu.speed / length
            last.times.user += cpu.times.user
            last.times.nice += cpu.times.nice
            last.times.sys += cpu.times.sys
            last.times.idle += cpu.times.idle
            last.times.irq += cpu.times.irq
            return last
        },{ speed: 0,total: 0,times: {user: 0,nice: 0,sys: 0,idle: 0,irq: 0 } }
        )
      let timestamp = speed()
      let latensi = speed() - timestamp
      neww = performance.now()
      oldd = performance.now()
                    
      respon = `
    Response Speed ${latensi.toFixed(1)}Sec / ${(oldd - neww).toFixed(1)}ms
    Runtime : ${runtime(process.uptime())}`
    
  
    let resp2 = `💻 Info Server
    RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
    
    NodeJS Memory Usaage
    ${Object.keys(used).map((key, _, arr) => ${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}).join('\n')}
    
    ${cpus[0] ? `Total CPU Usage
    ${cpus[0].model.trim()} (${cpu.speed} MHZ)
    ${Object.keys(cpu.times).map(type => - ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%).join('\n')}
    CPU Core(s) Usage (${cpus.length} Core CPU)
    ${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)
    ${Object.keys(cpu.times).map(type => - ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%).join('\n')}).join('\n\n')} : ''}
        `.trim()
  
        return await citel.reply(respon+resp2 )
  })
  
  cmd({
              pattern: "whois",
              desc: "Makes photo of replied sticker.",
              category: "user",
              use: '<reply to any person>',
              filename: __filename
          },
  async(Void, citel, text) => {
              if (!citel.quoted) return citel.reply(Please Reply To A Person);
              var bio = await Void.fetchStatus(citel.quoted.sender);
              var bioo = bio.status;
              var setAt = bio.setAt.toString();
              
              var words = setAt.split(" ");
              if(words.length > 3){ setAt= words.slice(0, 5).join(' ') ; }
               
              var num = citel.quoted.sender.split('@')[0];
              let pfp;
              try  {  pfp = await Void.profilePictureUrl(citel.quoted.sender, "image"); } 
              catch (e) { pfp = await Void.profilePictureUrl(citel.sender, "image") ||  'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ; }    //|| 'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ;  }
              
              let username = await sck1.findOne({ id: citel.quoted.sender });
              var tname = username.name;
  
              
           return await Void.sendMessage(citel.chat, {
                  image: {   url: pfp  },
                  caption: `
  ╔════◇
  ║ 『Person's  Information』
  ║ 
  ║ 🚹Name : ${tname}
  ║ 👤Num : ${num}
  ║ 💻Bio    :  ${bioo}
  ║ 🕡SetAt : ${setAt}
  ╚════════════════╝
  `,
              },{quoted:citel});
  
          }
      )
  
  cmd({
               pattern: "getpp",
               desc: "Get Profile Pic For Given User",
               category: "user",
               filename: __filename
           },
           async(Void, citel, text) => {
  
  if (!citel.quoted) return citel.reply (*Please Reply To A User*)
      let pfp;
       try  {  pfp = await Void.profilePictureUrl(citel.quoted.sender, "image"); } 
       catch (e) {  return citel.reply("Profile Pic Not Fetched") } 
  //const ppUrl = await Void.profilePictureUrl(citel.quoted.sender, 'image')
    
                  let buttonMessaged = {
  
                              quoted: "2347039570336@s.whatsapp.net", 
                              contextInfo: { forwardingScore: 1999999, isForwarded: false },
                              image: { url: pfp },
                              caption: '  ---Profile Pic Is Here---\n'+Config.caption,
                              footer: tlang().footer,
                              headerType: 4,
                     
                  };
                  return await Void.sendMessage(citel.chat, buttonMessaged,{quoted:citel});
  
  
           }
       )
  
  cmd({
          pattern: "blocklist",
          desc: "get list of all Blocked Numbers",
          category: "user",
          filename: __filename,
          use: '<text>',
      },
      async(Void, citel, text , {isCreator}) => {
          if(!isCreator) return await citel.reply(tlang().owner);
          try {
              const data = await Void.fetchBlocklist();
              if (data.length === 0) return await citel.reply(Uhh Dear, You don't have any Blocked Numbers.);
              let txt = \n*≡ List*\n\n*_Total Users:* ${data.length}_\n\n┌─⊷ \t*BLOCKED USERS*\n;
              for (let i = 0; i < data.length; i++) {      txt += ▢ ${i + 1}:- wa.me/${data[i].split("@")[0]}\n;    }
              txt += "└───────────";
              return await Void.sendMessage(citel.chat, { text: txt });
            } catch (err) {
              console.error(err);
              return await citel.reply('*Error while getting Blocked Numbers.\nError: *' + err);
            }
      }
      )
  
  
  
  cmd({
    pattern: 'ascii',
    desc: 'Generate ASCII art for the given text.',
  category:"fun",
  },
  async (Void, citel, text) => {
    try {
      if (!text) {
        await citel.reply('Please provide text for ASCII art.');
        return;
      }
  
      const url = https://asciified.thelicato.io/api/v2/ascii?text=${encodeURIComponent(text)};
      const response = await axios.get(url);
  
      if (response.data && response.data.trim() !== '') {
        await Void.sendMessage(citel.chat, { text: \\\${response.data}\\\`` });
      } else {
        await Void.sendMessage(citel.chat, 'Failed to generate ASCII art for the given text.');
      }
    } catch (error) {
      console.error('Error in ASCII art command:', error);
      await citel.reply(An error occurred while generating ASCII art: ${error.message});
    }
  });
  
  cmd({
      pattern: "vcf",
      desc: "Saves contacts of all group members in a VCF file and sends it in the group.",
      category: "group",
      filename: __filename,
  },
  async (Void, citel, text, { isCreator }) => {
      try {
          if (!citel.isGroup) return citel.reply(tlang().group);
  const fs = require('fs');
          const groupMetadata = await Void.groupMetadata(citel.chat).catch((e) => null);
  
          if (!groupMetadata || !groupMetadata.participants) {
              return citel.reply('Failed to fetch group metadata or participants list.');
          }
  
          const participants = groupMetadata.participants;
  
          const vcfData = [];
          for (const participant of participants) {
              const number = participant.id.split('@')[0];
              vcfData.push(BEGIN:VCARD\nVERSION:3.0\nFN:${number}\nTEL;TYPE=CELL:${number}\nEND:VCARD);
          }
  
          const groupName = groupMetadata.subject || Group ${citel.chat};
          const vcfFileName = group_contacts_${groupName}.vcf;
          const vcfFilePath = ./${vcfFileName};
          
          fs.writeFileSync(vcfFilePath, vcfData.join('\n'));
  
          const message = *ALL MEMBERS CONTACT SAVED*\nGroup: *${groupName}*\nContact: *${participants.length}*;
  
          
          const vcfFile = fs.readFileSync(vcfFilePath);
  
          
          await Void.sendMessage(citel.chat, { document: vcfFile, mimetype: 'text/vcard', filename: vcfFileName, caption: message });
  
          fs.unlinkSync(vcfFilePath); 
  
      } catch (error) {
          console.error('Error processing vcf command:', error);
          return citel.reply('An error occurred while processing the vcf command.');
      }
  });

  cmd({
  pattern: "cpu",
  desc: "To check bot status",
  category: "general",
  filename: __filename,
},
async(Void, citel) => {
  const os = require('os')
  const speed = require('performance-now')
      const used = process.memoryUsage()
      const cpus = os.cpus().map(cpu => {
          cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
          return cpu
      })
      const cpu = cpus.reduce((last, cpu, _, { length }) => 
      {
          last.total += cpu.total
          last.speed += cpu.speed / length
          last.times.user += cpu.times.user
          last.times.nice += cpu.times.nice
          last.times.sys += cpu.times.sys
          last.times.idle += cpu.times.idle
          last.times.irq += cpu.times.irq
          return last
      },{ speed: 0,total: 0,times: {user: 0,nice: 0,sys: 0,idle: 0,irq: 0 } }
      )
    let timestamp = speed()
    let latensi = speed() - timestamp
    neww = performance.now()
    oldd = performance.now()
                  
    respon = `
  Response Speed ${latensi.toFixed(1)}Sec / ${(oldd - neww).toFixed(1)}ms
  Runtime : ${runtime(process.uptime())}`
  

  let resp2 = `💻 Info Server
  RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
  
  NodeJS Memory Usaage
  ${Object.keys(used).map((key, _, arr) => ${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}).join('\n')}
  
  ${cpus[0] ? `Total CPU Usage
  ${cpus[0].model.trim()} (${cpu.speed} MHZ)
  ${Object.keys(cpu.times).map(type => - ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%).join('\n')}
  CPU Core(s) Usage (${cpus.length} Core CPU)
  ${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)
  ${Object.keys(cpu.times).map(type => - ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%).join('\n')}).join('\n\n')} : ''}
      `.trim()

      return await citel.reply(respon+resp2 )
})

cmd({
            pattern: "whois",
            desc: "Makes photo of replied sticker.",
            category: "user",
            use: '<reply to any person>',
            filename: __filename
        },
async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(Please Reply To A Person);
            var bio = await Void.fetchStatus(citel.quoted.sender);
            var bioo = bio.status;
            var setAt = bio.setAt.toString();
            
            var words = setAt.split(" ");
            if(words.length > 3){ setAt= words.slice(0, 5).join(' ') ; }
             
            var num = citel.quoted.sender.split('@')[0];
            let pfp;
            try  {  pfp = await Void.profilePictureUrl(citel.quoted.sender, "image"); } 
            catch (e) { pfp = await Void.profilePictureUrl(citel.sender, "image") ||  'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ; }    //|| 'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ;  }
            
            let username = await sck1.findOne({ id: citel.quoted.sender });
            var tname = username.name;

            
         return await Void.sendMessage(citel.chat, {
                image: {   url: pfp  },
                caption: `
╔════◇
║ 『Person's  Information』
║ 
║ 🚹Name : ${tname}
║ 👤Num : ${num}
║ 💻Bio    :  ${bioo}
║ 🕡SetAt : ${setAt}
╚════════════════╝
`,
            },{quoted:citel});

        }
    )

cmd({
             pattern: "getpp",
             desc: "Get Profile Pic For Given User",
             category: "user",
             filename: __filename
         },
         async(Void, citel, text) => {

if (!citel.quoted) return citel.reply (*Please Reply To A User*)
    let pfp;
     try  {  pfp = await Void.profilePictureUrl(citel.quoted.sender, "image"); } 
     catch (e) {  return citel.reply("Profile Pic Not Fetched") } 
//const ppUrl = await Void.profilePictureUrl(citel.quoted.sender, 'image')
  
                let buttonMessaged = {

                            quoted: "2347039570336@s.whatsapp.net", 
                            contextInfo: { forwardingScore: 1999999, isForwarded: false },
                            image: { url: pfp },
                            caption: '  ---Profile Pic Is Here---\n'+Config.caption,
                            footer: tlang().footer,
                            headerType: 4,
                   
                };
                return await Void.sendMessage(citel.chat, buttonMessaged,{quoted:citel});


         }
     )

cmd({
        pattern: "blocklist",
        desc: "get list of all Blocked Numbers",
        category: "user",
        filename: __filename,
        use: '<text>',
    },
    async(Void, citel, text , {isCreator}) => {
        if(!isCreator) return await citel.reply(tlang().owner);
        try {
            const data = await Void.fetchBlocklist();
            if (data.length === 0) return await citel.reply(Uhh Dear, You don't have any Blocked Numbers.);
            let txt = \n*≡ List*\n\n*_Total Users:* ${data.length}_\n\n┌─⊷ \t*BLOCKED USERS*\n;
            for (let i = 0; i < data.length; i++) {      txt += ▢ ${i + 1}:- wa.me/${data[i].split("@")[0]}\n;    }
            txt += "└───────────";
            return await Void.sendMessage(citel.chat, { text: txt });
          } catch (err) {
            console.error(err);
            return await citel.reply('*Error while getting Blocked Numbers.\nError: *' + err);
          }
    }
    )



cmd({
  pattern: 'ascii',
  desc: 'Generate ASCII art for the given text.',
category:"fun",
},
async (Void, citel, text) => {
  try {
    if (!text) {
      await citel.reply('Please provide text for ASCII art.');
      return;
    }

    const url = https://asciified.thelicato.io/api/v2/ascii?text=${encodeURIComponent(text)};
    const response = await axios.get(url);

    if (response.data && response.data.trim() !== '') {
      await Void.sendMessage(citel.chat, { text: \\\${response.data}\\\`` });
    } else {
      await Void.sendMessage(citel.chat, 'Failed to generate ASCII art for the given text.');
    }
  } catch (error) {
    console.error('Error in ASCII art command:', error);
    await citel.reply(An error occurred while generating ASCII art: ${error.message});
  }
});

cmd({
    pattern: "vcf",
    desc: "Saves contacts of all group members in a VCF file and sends it in the group.",
    category: "group",
    filename: __filename,
},
async (Void, citel, text, { isCreator }) => {
    try {
        if (!citel.isGroup) return citel.reply(tlang().group);
const fs = require('fs');
        const groupMetadata = await Void.groupMetadata(citel.chat).catch((e) => null);

        if (!groupMetadata || !groupMetadata.participants) {
            return citel.reply('Failed to fetch group metadata or participants list.');
        }

        const participants = groupMetadata.participants;

        const vcfData = [];
        for (const participant of participants) {
            const number = participant.id.split('@')[0];
            vcfData.push(BEGIN:VCARD\nVERSION:3.0\nFN:${number}\nTEL;TYPE=CELL:${number}\nEND:VCARD);
        }

        const groupName = groupMetadata.subject || Group ${citel.chat};
        const vcfFileName = group_contacts_${groupName}.vcf;
        const vcfFilePath = ./${vcfFileName};
        
        fs.writeFileSync(vcfFilePath, vcfData.join('\n'));

        const message = *ALL MEMBERS CONTACT SAVED*\nGroup: *${groupName}*\nContact: *${participants.length}*;

        
        const vcfFile = fs.readFileSync(vcfFilePath);

        
        await Void.sendMessage(citel.chat, { document: vcfFile, mimetype: 'text/vcard', filename: vcfFileName, caption: message });

        fs.unlinkSync(vcfFilePath); 

    } catch (error) {
        console.error('Error processing vcf command:', error);
        return citel.reply('An error occurred while processing the vcf command.');
    }
});

cmd({
  pattern: "insta",
  desc: "Download Instagram video",
  category: "downloader",
  filename: __filename
},
async (Void, citel, match) => {
  try {
    let instaUrl = match.trim();
    if (!instaUrl) {
      return citel.reply('Please provide an Instagram video URL to download.');
    }

    let apiUrl = https://api.maher-zubair.tech/download/instagram?url=${encodeURIComponent(instaUrl)};
    let response = await axios.get(apiUrl);
    let data = response.data;

    if (data && data.result && data.result.length > 0) {
      let { thumbnail, url } = data.result[0];

      await Void.sendMessage(citel.chat, {
        video: { url: url },
        caption: Here is your Instagram video download link.,
        contextInfo: {
          externalAdReply: {
            title: "Instagram Video",
            body: 'Touch here to download.',
            renderLargerThumbnail: true,
            thumbnailUrl: thumbnail,
            mediaType: 2,
            mediaUrl: url,
            sourceUrl: url
          }
        }
      });
    } else {
      await Void.sendMessage(citel.chat, { text: 'No result found.', options: { isBold: true } });
    }
  } catch (error) {
    await Void.sendMessage(citel.chat, { text: *An error occurred:* ${error.message || error}, options: { isBold: true } });
  }
});

cmd({
             pattern: "cal",
             desc: "Adds readmore in given text.",
             category: "misc",
             filename: __filename
         },
         async(Void, citel, text) => {
let func  =  text.split(";")[0];
let num1  =  +text.split(";")[1];
let num2  =  +text.split(";")[2];

var c1 = num1.toString();
var c2 = num2.toString();
if(c1=="NaN" || c2 ==  "NaN") return citel.reply("Numbers Are Not In Formate, Try Again") 
if (!text)
{
let txt="--------------- CALCULATOR ----------------\n";
 txt +=" \nChoose An Operator From List  ";
 txt +="\nFor Addittion    :  add ";
 txt +="\nFor Subtraction :  sub";
 txt +="\nFor  Multiply     :  mul";
 txt +="\nFor division       :  div";
 txt += \n\n  Likewise :  ${prefix}calc add;10;50;   
  return citel.reply(txt)
}
else if (func == "add" )  {  let result = num1+num2;
return citel.reply (${num1} + ${ num2}  = ${result} );
}
else if (func == "sub" ) { let result = num1-num2;
return citel.reply (${num1} - ${ num2}  = ${result} );
}
else if (func == "mul" ) { let result = num1*num2;
return citel.reply (${num1} * ${ num2}  = ${result} );
}
else if (func == "div" ) { let result = num1/num2;
return citel.reply (${num1} / ${ num2}  = ${result} );
}
else
 {
return citel.reply(`Give me Query Like :  ${prefix}calc add;10;50 `);
}
 
         }
     )

     cmd({
             pattern: "getp",
             desc: "Get Profile Pic For Given User",
             category: "user",
             filename: __filename
         },
         async(Void, citel, text) => {

if (!citel.quoted) return citel.reply (*Please Reply To A User*)
    let pfp;
     try  {  pfp = await Void.profilePictureUrl(citel.quoted.sender, "image"); } 
     catch (e) {  return citel.reply("Profile Pic Not Fetched") } 
//const ppUrl = await Void.profilePictureUrl(citel.quoted.sender, 'image')
  
                let buttonMessaged = {

                            quoted: "923184474176@s.whatsapp.net", 
                            contextInfo: { forwardingScore: 1999999, isForwarded: false },
                            image: { url: pfp },
                            caption: '  ---Profile Pic Is Here---\n'+Config.caption,
                            footer: tlang().footer,
                            headerType: 4,
                   
                };
                return await Void.sendMessage(citel.chat, buttonMessaged,{quoted:citel});


         }
     )

cmd({
        pattern: "blocklist",
        desc: "get list of all Blocked Numbers",
        category: "user",
        filename: __filename,
        use: '<text>',
    },
    async(Void, citel, text , {isCreator}) => {
        if(!isCreator) return await citel.reply(tlang().owner);
        try {
            const data = await Void.fetchBlocklist();
            if (data.length === 0) return await citel.reply(Uhh Dear, You don't have any Blocked Numbers.);
            let txt = \n*≡ List*\n\n*_Total Users:* ${data.length}_\n\n┌─⊷ \t*BLOCKED USERS*\n;
            for (let i = 0; i < data.length; i++) {      txt += ▢ ${i + 1}:- wa.me/${data[i].split("@")[0]}\n;    }
            txt += "└───────────";
            return await Void.sendMessage(citel.chat, { text: txt });
          } catch (err) {
            console.error(err);
            return await citel.reply('*Error while getting Blocked Numbers.\nError: *' + err);
          }
    }
    )

    const axios = require("axios");

cmd({
  pattern: 'ascii',
  desc: 'Generate ASCII art for the given text.',
},
async (Void, citel, text) => {
  try {
    if (!text) {
      await citel.reply('Please provide text for ASCII art.');
      return;
    }

    const url = https://asciified.thelicato.io/api/v2/ascii?text=${encodeURIComponent(text)};
    const response = await axios.get(url);

    if (response.data && response.data.trim() !== '') {
      await Void.sendMessage(citel.chat, { text: \\\${response.data}\\\`` });
    } else {
      await Void.sendMessage(citel.chat, 'Failed to generate ASCII art for the given text.');
    }
  } catch (error) {
    console.error('Error in ASCII art command:', error);
    await citel.reply(An error occurred while generating ASCII art: ${error.message});
  }
});



cmd({
    pattern: "technews",
    desc: "Get details about the latest news.",
},
async (Void, citel) => {
    try {
        let apiUrl = "https://api.maher-zubair.tech/details/tnews";
        let response = await axios.get(apiUrl);
        let data = response.data;

        if (data && data.result) {
            let { title, link, img, desc } = data.result;

            let thumbnail = await axios.get(img, { responseType: 'arraybuffer' });
            let thumbnailBuffer = Buffer.from(thumbnail.data);

            const contextInfo = {
                externalAdReply: {
                    title: title,
                    body: 'Powered by IZUKU-MD',
                    thumbnailUrl: img,
                    renderLargerThumbnail: true,
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: link
                }
            };

            await Void.sendMessage(citel.chat, { text: *${title}*\n\n${desc}\n\nRead more: ${link}, contextInfo: contextInfo });
        } else {
            citel.reply("No details found.");
        }
    } catch (error) {
        console.error(error);
        citel.reply(*An error occurred while processing your request:* ${error.message || error});
    }
});

cmd({
  pattern: "wouldyourather",
  desc: "Would You Rather question",
  category: "fun",
  filename: __filename
},
async (Void, citel, match) => {
  try {
    let apiUrl = 'https://api.popcat.xyz/wyr';
    let response = await axios.get(apiUrl);
    let data = response.data;

    if (data && data.ops1 && data.ops2) {
      let { ops1, ops2 } = data;
      let imageUrl = 'https://telegra.ph/file/b7861f3b2d9136fb78295.jpg';

      await Void.sendMessage(citel.chat, {
        text: *Would You Rather:*\n1. ${ops1}\n2. ${ops2},
        contextInfo: {
          externalAdReply: {
            title: "Would You Rather",
            body: 'Powered by IZUKU-MD',
            renderLargerThumbnail: true,
            thumbnail: { url: imageUrl },
            mediaType: 1,
            mediaUrl: '',
            sourceUrl: ''
          }
        }
      });
    } else {
      await Void.sendMessage(citel.chat, { text: 'No question found.', options: { isBold: true } });
    }
  } catch (error) {
    await Void.sendMessage(citel.chat, { text: *An error occurred:* ${error.message || error}, options: { isBold: true } });
  }
});


cmd({
  pattern: "genimage",
  desc: "Fetch AI generated image",
  category: "ai",
  filename: __filename
},
async (Void, citel, match) => {
  try {
    let query = match.trim();
    if (!query) {
      return citel.reply('Please provide a query for the AI.');
    }

    let apiUrl = https://api.maher-zubair.tech/ai/photoleap?q=${encodeURIComponent(query)};
    let response = await axios.get(apiUrl);
    let data = response.data;

    if (data && data.result) {
      let imageUrl = data.result;

      await Void.sendMessage(citel.chat, {
        image: { url: imageUrl },
        caption: *Generated Image for:* ${query},
        contextInfo: {
          externalAdReply: {
            title: "AI Generated Image",
            body: "Powered by IZUKU-MD",
            renderLargerThumbnail: true,
            thumbnailUrl: "https://telegra.ph/file/4acb84ceefff1c9410aca.jpg",
            mediaType: 1,
            mediaUrl: imageUrl,
            sourceUrl: imageUrl
          }
        }
      });
    } else {
      await Void.sendMessage(citel.chat, { text: 'No result found.', options: { isBold: true } });
    }
  } catch (error) {
    await Void.sendMessage(citel.chat, { text: *An error occurred:* ${error.message || error}, options: { isBold: true } });
  }
});



cmd({
  pattern: "itunes",
  desc: "Fetch song details from iTunes",
  category: "search",
  filename: __filename
},
async (Void, citel, match) => {
  try {
    let songName = match.trim();
    if (!songName) {
      return citel.reply('Please provide a song name to fetch the details.');
    }

    let apiUrl = https://api.popcat.xyz/itunes?q=${encodeURIComponent(songName)};
    let response = await axios.get(apiUrl);
    let data = response.data;

    if (data && data.name) {
      let { url, name, artist, album, release_date, price, length, genre, thumbnail } = data;

      await Void.sendMessage(citel.chat, {
        text: *Title:* ${name}\n*Artist:* ${artist}\n*Album:* ${album}\n*Release Date:* ${release_date}\n*Price:* ${price}\n*Length:* ${length}\n*Genre:* ${genre}\n*URL:* ${url},
        contextInfo: {
          externalAdReply: {
            title: name,
            body: Artist: ${artist}\nPowered by IZUKU-MD,
            renderLargerThumbnail: true,
            thumbnailUrl: thumbnail,
            mediaType: 1,
            mediaUrl: url,
            sourceUrl: url
          }
        }
      });
    } else {
      await Void.sendMessage(citel.chat, { text: 'No details found.', options: { isBold: true } });
    }
  } catch (error) {
    await Void.sendMessage(citel.chat, { text: *An error occurred:* ${error.message || error}, options: { isBold: true } });
  }
});

