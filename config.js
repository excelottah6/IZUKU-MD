const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/excelottah6/IZUKU-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '2347063381682'
global.devs = '2347063381682';
global.website = 'https://github.com/excelottah6/IZUKU-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "IZUKU;;; eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJsSGozd1h0VllkTnNLMVdvQWswbVJuMlMzTS82OTV1WG5VOFR6a3dWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiekR3NDJrK2ZLczRQWFFMenltOU9KS1FCVkJIT1RtVXNYM2pXUWNxRDkzZz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRnVxOVBYNnBsZk5yT0lmTjdUWWNQN2tUUGY3UlJFQThram5ncEFhM2xNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmMkgxV2tsMFBGNkRWTlRFcUNtVGpYaVVtR2pTYy82Rkkvb1NOVElSTXdrPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFBOTNNaWV0SjUwcDdvK0VKcDNieWE0Y1pISlhLZ0lsN09IRnU4QVQ3MGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFWYmRtSVBWMUJoeElNejBYM1l0QVJCOEt3S20wbktvVmFqTzF0S2RJUWs9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrdFU4R1ptYUZpVE92OU03eHM3SW05Z3J3RkhadWNKSHhtcGQrVElFVzlwZkZ5R2J3bnVuazAwajRvSit6VU9ndHVKckhlQVVsbDVDVWJUV2s5OGxndz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE4NCwiYWR2U2VjcmV0S2V5IjoiVjJMbXE3R2NYRGNsOURTU29ERGdmYVdqdHVtMFF3Z2JuRVFwQTd5Mll0cz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZzJiR2VDX0lRS0dZSUhsc0xfQkdfdyIsInBob25lSWQiOiI3MTdjZWQ1OC1jZTBjLTQ4ODctYjBiZS1jMTQ2YTM4OTU1MGUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnY5dStKbmY1a0oycGhLV3BzR1cxZmdiVHNVPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMRXMyRTJFNzNKTmI0eHZBNGQ5V2hGTDNQOFE9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJbXVqcFVIRUl6ZytLMEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHQVlhZ0FkNk5HVXlIUEMxckl4cWJFekt1RXlBQ0k1NGZEQlNmV2kvaHhnPSIsImFjY291bnRTaWduYXR1cmUiOiJEdFJKS0lzWnlCM1NMZTVHLy9ucVUxemR3aHJnUVZNaFdHMzdzOXFvK0pWMHNORm11anhybjZodkh1R0YwY2ZVYlNpM2VFSmhNQXFHZGxBV21Ba0NBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieGJESWNmVStzOGJsbzFaTk1EYzdORFBsdFBEa1M1RGZLRlF6K0hzTitUV0k0Z0RSZldieXA1d2lFNTlHZmhpSWlZYjQ5bk1FME9ESElMUXZ1Q2U3aWc9PSJ9LCJtZSI6eyJpZCI6IjIzNDcwNjMzODE2ODI6M0BzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDYzMzgxNjgyOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmdHR29BSGVqUmxNaHp3dGF5TWFteE15cmhNZ0FpT2VId3dVbjFvdjRjWSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNjk2Mjk1OH0=",
  botname:   process.env.BOT_NAME === undefined ? 'IZUKU BOT' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'excel' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'excel' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'IZUKU-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? false : process.env.TYPING,
recordingpresence:  process.env.RECORDING === undefined ? false : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'IZUKU',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
