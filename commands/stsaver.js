const { cmd } = require('../lib');

async function handleCommands(Void, citel) {

  const quotedMessage = citel.quotedMsg || (await getQuotedMessage(citel.chatId, citel.id));

  console.log('Quoted message: ', quotedMessage);

  cmd({
    pattern: "save", 
    fromMe: true,
  }, async (Void, citel) => {

    if (quotedMessage) {

      console.log('Is status?: ', quotedMessage.isStatus);

      if (quotedMessage.isStatus || quotedMessage.isMedia) {
        try {
          await forwardMessage(citel.chatId, Void.bot, quotedMessage);
        } catch (err) {
          console.log('Error forwarding: ', err);
        }
      } else {
        await citel.reply("Please reply to a message with media or a status to save it.");  
      }

    } else {
      await citel.reply("Please reply to a message to save it.");
    }

  });

}

async function getQuotedMessage(chatId, id) {
  // message retrieval logic
  const message = await chat.getMessage(id); 
  return message.quotedMsg;
}

handleCommands();
