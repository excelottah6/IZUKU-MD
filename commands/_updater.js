/**
██╗███████╗██╗   ██╗██╗  ██╗██╗   ██╗    ███╗   ███╗██████╗ 
██║╚══███╔╝██║   ██║██║ ██╔╝██║   ██║    ████╗ ████║██╔══██╗
██║  ███╔╝ ██║   ██║█████╔╝ ██║   ██║    ██╔████╔██║██║  ██║
██║ ███╔╝  ██║   ██║██╔═██╗ ██║   ██║    ██║╚██╔╝██║██║  ██║
██║███████╗╚██████╔╝██║  ██╗╚██████╔╝    ██║ ╚═╝ ██║██████╔╝
╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝     ╚═╝     ╚═╝╚═════╝ 
                                                            
 Copyright (C) 2023.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Izuku-Md
 * @author : excelottah <https://github.com/excelottah6>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const DB = require('../lib/scraper')
const { execSync } = require('child_process')
const { tlang, Config, prefix,cmd } = require('../lib')
    //---------------------------------------------------------------------------
cmd({
    pattern: "update",
    desc: "Shows repo's refreshed commits.",
    category: "misc",
    filename: __filename
},
async (Void, citel, text, { isCreator }) => {
    if (!isCreator) return citel.reply('This command is only for my owner')
    let commits = await DB.syncgit()
    if (commits.total === 0) {
        let asciiBorder = '╔══════════════════════════╗\n';
        asciiBorder += '║    Updater - IZUKU MD    ║\n';
        asciiBorder += '╚══════════════════════════╝\n';

        citel.reply(`${asciiBorder}Hey ${citel.pushName}. You have the latest version installed.`);
    } else {
        let update = await DB.sync()
        let asciiBorder = '╔══════════════════════════╗\n';
        asciiBorder += '║    Updater - IZUKU MD    ║\n';
        asciiBorder += '╚══════════════════════════╝\n';

        let buttonMessage = {
            text: `${asciiBorder}${update}`,
            footer: 'UPDATER',
            headerType: 4
        };
        return await Void.sendMessage(citel.chat, buttonMessage);
    }
}
)

  
