const { cmd } = require('../lib');

let antiLinkEnabled = true; // Enable anti-link by default
let antiSpamEnabled = true; // Enable anti-spam by default

cmd({
  pattern: "antilink on",
  desc: "Enable anti-link feature.",
  category: "group",
  fromMe: true,
}, async (Void, citel) => {
  antiLinkEnabled = true;
  await citel.reply("Anti-link feature has been enabled.");
});

cmd({
  pattern: "antilink off",
  desc: "Disable anti-link feature.",
  category: "group",
  fromMe: true,
}, async (Void, citel) => {
  antiLinkEnabled = false;
  await citel.reply("Anti-link feature has been disabled.");
});

cmd({
  pattern: "antispam on",
  desc: "Enable anti-spam feature.",
  category: "group",
  fromMe: true,
}, async (Void, citel) => {
  antiSpamEnabled = true;
  await citel.reply("Anti-spam feature has been enabled.");
});

cmd({
  pattern: "antispam off",
  desc: "Disable anti-spam feature.",
  category: "group",
  fromMe: true,
}, async (Void, citel) => {
  antiSpamEnabled = false;
  await citel.reply("Anti-spam feature has been disabled.");
});

cmd({
  on: "text",
}, async (Void, citel, text) => {
  const userId = citel.sender;

  if (antiLinkEnabled && hasLink(text)) {
    await citel.deleteMessage();
    await citel.reply("Link removed: Links are not allowed.");
    return;
  }

  if (antiSpamEnabled && isSpam(userId, text)) {
    await citel.deleteMessage();
    await citel.reply("Spam detected: Please avoid sending repetitive messages.");
  }
});

// Function to check for links
function hasLink(text) {
  const linkRegex = /https?:\/\/\S+/i;
  return linkRegex.test(text);
}

// Function to check for spam and limit consecutive messages
function isSpam(userId, text) {
  if (lastMessages.has(userId)) {
    const consecutiveMessages = lastMessages.get(userId);
    consecutiveMessages.push(text);

    if (consecutiveMessages.length > maxConsecutiveMessages) {
      consecutiveMessages.shift(); // Remove the oldest message
    } else {
      lastMessages.set(userId, consecutiveMessages);
      return false;
    }
  }

  lastMessages.set(userId, [text]);
  return true;
}
