const activeAntilinkChats = new Set(); // Set to store active antilink chats

// Function to check if antilink is active for a given chatId
function isAntilinkActive(chatId) {
  return activeAntilinkChats.has(chatId);
}

// Message event handler
Void.on("message-new", async (message) => {
  if (message.isGroup) {
    const chatId = message.chat;
    const isAntilinkActive = isAntilinkActive(chatId);

    if (isAntilinkActive && message.text.includes("http")) {
      // Message contains a link, delete it
      await Void.deleteMessage(chatId, message.id);

      // Remove the sender from the group
      await Void.groupRemove(chatId, [message.sender]);
    }
  }
});

// Command to activate or deactivate antilink
cmd({
  pattern: "antilink (on|off)",
  desc: "activates or deactivates antilink.",
  category: "group",
  filename: __filename,
},
async (Void, citel, match) => {
  if (!citel.isGroup) return citel.reply(tlang().group);
  const groupAdmins = await getAdmin(Void, citel);
  const botNumber = await Void.decodeJid(Void.user.id);
  const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
  const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
  if (!isAdmins) return citel.reply(tlang().admin);
  if (!isBotAdmins) return citel.reply(tlang().botadmin);

  const antilinkStatus = match[1]; // "on" or "off"

  if (antilinkStatus === "on") {
    // Activate antilink
    activeAntilinkChats.add(citel.chat);
    citel.reply("Antilink activated. Messages containing links will be deleted, and the sender will be removed.");
  } else if (antilinkStatus === "off") {
    // Deactivate antilink
    activeAntilinkChats.delete(citel.chat);
    citel.reply("Antilink deactivated.");
  } else {
    citel.reply("Invalid antilink status. Please use 'on' or 'off'.");
  }
});
