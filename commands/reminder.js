const { cmd } = require('some-library');
const schedule = require('node-schedule');

cmd({
    pattern: "remindme",
    desc: "Set a reminder for a task or event.",
    category: "utility",
}, (Void, citel, text) => {
    const reminderText = text.match[1]; // Get the reminder text from the command.
    
    schedule.scheduleJob('remindme', () => {
        citel.reply(`Reminder: "${reminderText}"`);
    });

    citel.reply(`Reminder set: "${reminderText}"`);
});
