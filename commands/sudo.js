const Config = require('../config')
let { cmd, fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const axios = require('axios');
const appName = Config.HEROKU_APP_NAME;
const authToken = Config.HEROKU_API_KEY;
const fetch = require('node-fetch');

if(Config.HEROKU_APP_NAME && Config.HEROKU_API_KEY ){
        
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
                  body:JSON.stringify({ [varName]: newVarValue })
        })
.then(response => response.json())
.then(data => { return citel.reply(`*_${user} Added Succesfully._*\n*_New Sudo Numbers:_* ${newVarValue}`); })
.catch(error => citel.reply('*_Error While Adding new Sudo:_* '+ error));
  })
//--------------------------------------------------------------------------------------------------------
