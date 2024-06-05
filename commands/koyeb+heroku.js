/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : @samapndey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/
const axios = require('axios');
const { tlang,cmd } = require('../lib')
const Config = require('../config') 
const appName = Config.HEROKU_APP_NAME;
const authToken = Config.HEROKU_API_KEY;
const fetch = require('node-fetch');
const { redeploy , getvar , delvar , getallvar , change_env , get_deployments} = require('../lib/koyeb')

//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "updatenow",
    desc: "update bot with main repo.",
    filename: __filename,
    category: "tools",
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
    desc: "get desired var from koyeb and Heroku.",
    filename: __filename,
    category: "tools",
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
    desc: "get all vars from koyeb and Heroku",
    filename: __filename,
    category: "tools",
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
cmd(
  {
    pattern: "setvar",
    desc: "set var in koyeb and Heroku",
    filename: __filename,
    category: "tools",
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
cmd(
  {
    pattern: "delvar",
    desc: "delete var from koyeb and Heroku",
    filename: __filename,
    category: "tools",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       if(!text) return citel.reply('Please provide key.\n_Eg: .delvar PORT_')
       let check = await get_deployments()
       if(check==='true') return citel.reply('_Please wait..._\n_Currently 2 instances are running in Koyeb,wait to stop one of them._')
       let data = await delvar(text)
       return citel.reply(data)
  })
//----------------------------------------------------------------------------------
cmd({
   pattern: "delsudo",
   desc: "Makes wa me of quoted or mentioned user.",
   category: "tools",
   filename: __filename
},
async(Void, citel, text) => {

if(!citel.quoted) return citel.reply(`*Please Reply A User*`);
let user = citel.quoted.sender.split('@')[0] ;
let  rm = ',' +user 
if (global.sudo.includes(rm)) global.sudo = global.sudo.replace(rm, '');
else return await citel.reply("User not found in the Sudo List\n Sudo Numbers : " + global.sudo );



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
return citel.reply(`*${user} Deleted Succesfully.*\nSudo Numbers : ${newVarValue}`);
})

.catch(error => {     return citel.reply('Error While Adding new Sudo :'+ error);      })

})     
//------------------------------------------------------------------------------------
function _0x31c7(_0x2c6d1d,_0x4025e7){const _0x4c364d=_0x4c36();return _0x31c7=function(_0x31c7fc,_0x2f571b){_0x31c7fc=_0x31c7fc-0x156;let _0x42be10=_0x4c364d[_0x31c7fc];return _0x42be10;},_0x31c7(_0x2c6d1d,_0x4025e7);}function _0x4c36(){const _0x23b1f5=['Anti-badword\x20feature\x20enabled.\x20Bad\x20word\x20set\x20to:\x20','10mpuJVe','3521502ReugyI','66fzrKws','reply','admin','4698968wKIJce','7427pHPInR','Anti-badword\x20feature\x20disabled.','trim','14771925PhKKNN','19187ejWHbx','6267384sCriDt','owner','ANTI_BAD_WORD','150415sLNJKa','2792IYhNNQ','off'];_0x4c36=function(){return _0x23b1f5;};return _0x4c36();}const _0x41cad7=_0x31c7;(function(_0x2efa75,_0x3ea2d9){const _0x2e637e=_0x31c7,_0x6d2bcd=_0x2efa75();while(!![]){try{const _0xc5882f=parseInt(_0x2e637e(0x162))/0x1*(parseInt(_0x2e637e(0x15a))/0x2)+parseInt(_0x2e637e(0x159))/0x3+parseInt(_0x2e637e(0x15d))/0x4+parseInt(_0x2e637e(0x166))/0x5+-parseInt(_0x2e637e(0x163))/0x6+-parseInt(_0x2e637e(0x15e))/0x7*(-parseInt(_0x2e637e(0x167))/0x8)+parseInt(_0x2e637e(0x161))/0x9*(-parseInt(_0x2e637e(0x158))/0xa);if(_0xc5882f===_0x3ea2d9)break;else _0x6d2bcd['push'](_0x6d2bcd['shift']());}catch(_0x38dc85){_0x6d2bcd['push'](_0x6d2bcd['shift']());}}}(_0x4c36,0xa9fa6),cmd({'pattern':'antiword','desc':'Set\x20or\x20disable\x20the\x20anti-badword\x20feature.','category':_0x41cad7(0x15c)},async(_0x192a37,_0x5f22a5,_0x1d6924,{isCreator:_0xf5b13c})=>{const _0x52ab91=_0x41cad7;if(!_0xf5b13c)return _0x5f22a5[_0x52ab91(0x15b)](tlang()[_0x52ab91(0x164)]);const _0x57c24a=_0x1d6924[_0x52ab91(0x160)]();if(!_0x57c24a)return _0x5f22a5[_0x52ab91(0x15b)]('Please\x20provide\x20a\x20bad\x20word\x20or\x20use\x20\x27ANTIBADWORD\x20OFF\x27\x20to\x20disable.');return _0x57c24a['toLowerCase']()===_0x52ab91(0x156)?(delete Config[_0x52ab91(0x165)],_0x5f22a5[_0x52ab91(0x15b)](_0x52ab91(0x15f))):(Config[_0x52ab91(0x165)]=_0x57c24a,_0x5f22a5[_0x52ab91(0x15b)](_0x52ab91(0x157)+_0x57c24a));}));
//-------------------------------------------------------------------------------------
cmd({
             pattern: "setsudo",
             desc: "Makes wa me of quoted or mentioned user.",
             category: "tools",
             filename: __filename
         },
  async(Void, citel, text) => {
if(!citel.quoted) return await citel.reply(`*Please Reply A User*`);
let user = citel.quoted.sender.split('@')[0]
if (global.sudo.includes(user)) return citel.reply("Number Already Exist In Sudo");
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
.then(data => { return citel.reply(`*${user} Added Succesfully.*\nSudo Numbers : ${newVarValue}`); })
.catch(error => citel.reply('Error While Adding new Sudo :'+ error));

         })
//-----------------------------------------------------------------------------
cmd({
             pattern: "getsudo",
             desc: "Makes wa me of quoted or mentioned user.",
             category: "tools",
             filename: __filename
         },
async(Void, citel, text) => {  return await  citel.reply(global.sudo);})