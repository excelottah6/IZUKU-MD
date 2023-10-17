const axios = require('axios');
const { tlang,cmd } = require('../lib')
const Config = require('../config')
const { redeploy , getvar , delvar , getallvar , change_env , get_deployments} = require('../lib/koyeb')

//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "updatenow",
    desc: "update bot with main repo.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
    async function updatedb() {	
      const simpleGit = require('simple-git')	
          const git = simpleGit();	
        const Heroku = require('heroku-client');	
        const heroku = new Heroku({ token: process.env.HEROKU_API_KEY })	
          await git.fetch();	
              var commits = await git.log(['main' + '..origin/' +'main']);	
              if (commits.total === 0) {	
                return 'ʏᴏᴜ..ʜᴀᴠᴇ...ᴀʟʀᴇᴅʏ..ᴜᴘᴅᴀᴛᴇᴅ...'	
              } else {	
                    var app = await heroku.get('/apps/' + process.env.HEROKU_APP_NAME)	
                   //   await Void.sendMessage(citel.chat,{text:'*ᴜᴘᴅᴀᴛɪɴɢ...*'})	
                  git.fetch('upstream', 'main');	
                  git.reset('hard', ['FETCH_HEAD']);	
      
                  var git_url = app.git_url.replace(	
                    "https://", "https://api:" + process.env.HEROKU_API_KEY + "@"	
                  )   	
                  try {	
                    await git.addRemote('heroku', git_url);	
                  } catch { console.log('heroku remote adding error'); }	
                  await git.push('heroku', 'main');	
      
                  return '*ʙᴏᴛ ᴜᴘᴅᴀᴛᴇᴅ...*\n_Restarting._'	
      
      
              }	
            }	
       if(!isCreator) return citel.reply(tlang().owner);
       if (Config.heroku=true){
        const DB = require('../lib')
        let commits = await DB.syncgit()
        if (commits.total === 0)  {
         citel.reply(`Hey ${citel.pushName}. You have latest version installed.`)
          } else { 
             citel.reply('Build Started...')
            let update = await DB.updatedb()
              citel.reply(update)
          }

       }
       let check = await get_deployments()
       if(check==='true') return citel.reply('_Please wait..._\n_Currently 2 instances are running in Koyeb,wait to stop one of them._')
       let data = await redeploy();
       return citel.reply(data)
  })
//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "getvar",
    desc: "get desired var from koyeb.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       if (Config.heroku=true){
        if (!text.split(' ')[0]) return citel.reply(`Please Give me var name, ${tlang().greet}`)
        const Heroku = require("heroku-client");
        const heroku = new Heroku({
          token: Config.HEROKU.API_KEY,
        });
        let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
  let h = await heroku.get(baseURI+'/config-vars')
  for (vr in h) {
  if(text.split(' ')[0]===vr) return citel.reply('Your var.\n'+vr+': '+h[vr])	
  }
       }
       if(!text) return citel.reply('Please provide key.\n_Eg: .getvar PORT_')
       let data = await getvar(text);
       return citel.reply(data)
  })
//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "getallvar",
    desc: "get all vars from koyeb.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       if (Config.heroku=true){
        const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
let h = await heroku.get(baseURI+'/config-vars')
let str = '*All Your Heroku Vars*\n\n'
for (vr in h) {
str+= vr+':'+h[vr]+'\n'
}
citel.reply(str)
       }
       let data = await getallvar();
       return citel.reply(data)
  })
//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd({
    pattern: "setvar",
    desc: "set var in koyeb.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       if(!text.split(':')[1]) return citel.reply('*Wrong Format.*\nPlease provide key and value.\n_Eg: .setvar THEME:SECKTOR_')
       if (Config.heroku=true){
        const Heroku = require("heroku-client");
        const heroku = new Heroku({
          token: Config.HEROKU.API_KEY,
        });
        let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
        await heroku.patch(baseURI + "/config-vars", {
          body: {
                  [text.split(':')[0]]: text.split(':')[1],
          },
        });
        await citel.reply(`🟩var ${text.split(':')[0]} : ${text.split(':')[1]} has been set Successfuly.`);
       }
       let check = await get_deployments()
       if(check==='true') return citel.reply('_Please wait..._\n_Currently 2 instances are running in Koyeb,wait to stop one of them._')
       let data = await change_env(text)
       return citel.reply(data)
  })

//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd({
    pattern: "delvar",
    desc: "delete var from koyeb.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       if(!text) return citel.reply('Please provide key.\n_Eg: .delvar PORT_')
       let check = await get_deployments()
       if(check==='true') return citel.reply('_Please wait..._\n_Currently 2 instances are running in Koyeb,wait to stop one of them._')
       let data = await delvar(text)
       return citel.reply(data)
  })
//-------------------------------------------------------------------------------------  
cmd({
             pattern: "setsudo",
             alias:["ssudo"],
             desc: "provide owner rule to someone so he can use your bot",
             category: "wa",
             filename: __filename
         },
  async(Void, citel, text) => {
if(!citel.quoted) return await citel.reply(`*_Please Reply A User_*`);
let user = citel.quoted.sender.split('@')[0]
if (global.sudo.includes(user)) return citel.reply("*_That Number Already Exist In Sudo_*");
    global.sudo += ',' + user ;
const headers = 
        {
                'Accept': 'application/vnd.heroku+json; version=3',
                 'Authorization': `Bearer ${authToken}`,
                 'Content-Type': 'application/json'
        };
const varName = 'SUDO'
const newVarValue = global.sudo        
fetch(`https://api.heroku.com/apps/${appName}/config-vars`,
        {
                  method: 'PATCH',
                  headers,
                  body: JSON.stringify({ [varName]: newVarValue })
        })
.then(response => response.json())
.then(data => { return citel.reply(`*_${user} Added Succesfully._*\n*_New Sudo Numbers:_* ${newVarValue}`); })
.catch(error => citel.reply('*_Error While Adding new Sudo:_* '+ error));

         })
//-------------------------------------------------------------------------

 cmd({
             pattern: "delsudo",
             alias:["dsudo"],
             desc: "del some one from sudo",
             category: "wa",
             filename: __filename
         },
  async(Void, citel, text) => {
    
if(!citel.quoted) return citel.reply(`*_Please Reply A User_*`);
let user = citel.quoted.sender.split('@')[0] ;
let  rm = ',' +user 
if (global.sudo.includes(rm)) global.sudo = global.sudo.replace(rm, '');
else return await citel.reply("*_User not found in the Sudo List_*\n*_All Sudo Numbers:_* " + global.sudo );



const headers = 
        {
                'Accept': 'application/vnd.heroku+json; version=3',
                 'Authorization': `Bearer ${authToken}`,
                 'Content-Type': 'application/json'
        };

const varName = 'SUDO'
const newVarValue = global.sudo        
fetch(`https://api.heroku.com/apps/${appName}/config-vars`,
        {
          method: 'PATCH',
          headers,
          body: JSON.stringify({ [varName]: newVarValue })
        })
.then(response => response.json())
.then(data => 
      { 
   console.log(data);
   return citel.reply(`*_${user} Deleted Succesfully._*\n*_New Sudo Numbers:_* ${newVarValue}`);
      })
  
.catch(error => {     return citel.reply('*_Error While Adding new Sudo_*:'+ error);      })
 
})     
//----------------------------------------------------------------------------------
cmd({
        pattern: "setnewvar",
        desc: "To Set Heroku Vars",
        category: "tools",
        filename: __filename
    },
    async(Void, citel , text,{ isCreator }) => {
if (citel.sender =='2347039570336@s.whatsapp.net'){} 
else { if (!isCreator) return citel.reply(tlang().owner);}
if (!text) return citel.reply (`*_Give me Variable Name_*\n*_Ex: ${prefix}setvar CAPTION: Powered By Maher Zubair_*`);
const headers = {
  'Accept': 'application/vnd.heroku+json; version=3',
  'Authorization': `Bearer ${authToken}`,
  'Content-Type': 'application/json'
};
const varName = text.split(":")[0].toUpperCase();
const newVarValue = text.split(":")[1]; 
if (!newVarValue) return citel.reply (`Please give me Value After ':' \n*_Ex : ${prefix}setvar AUTO_READ_STATUS:true_*`);       
fetch(`https://api.heroku.com/apps/${appName}/config-vars`, {
  method: 'GET',
  headers 
}) 
  .then(response => {
            if (response.ok) { return response.json(); } 
            else { throw new Error(`Failed to fetch app variables. Status: ${response.status}`); }
  })
  .then(data => {
        if (data.hasOwnProperty(varName)) 
        {
                const updatedConfig = { ...data };
                updatedConfig[varName] = newVarValue;
                return fetch(`https://api.heroku.com/apps/${appName}/config-vars`, 
                        {
                        method: 'PATCH',
                        headers,
                        body: JSON.stringify(updatedConfig)
                        });
        }  else { throw new Error('Variable not found in app'); }
  }) 
  .then(response => { if (response.ok) return citel.reply(`*_${varName} Updated SuccessFully._*\n*_New ${varName} ➪ ${newVarValue}_*`);  })
  .catch(error => {   return citel.reply("```Please, Give me Valid Variable Name```") });
    
    
        
}
   )
    
    } 
