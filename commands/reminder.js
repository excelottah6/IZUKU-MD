const { cmd } = require('../lib');
const schedule = require('node-schedule');

// Create a map to store user-specific reminders
const userReminders = new Map();

// Command for setting reminders
cmd({
    pattern: "setreminder",
    desc: "Set a reminder for a task or event.",
    category: "utility",
}, async (Void, citel, match) => {
    const reminderText = match[1].trim(); // Get the reminder text from the matched pattern.
    const userId = citel.sender; // Get the user's ID.

    // Reply to the user and ask for the time input
    await citel.reply(`Please enter the time for the reminder (e.g., "in 5 minutes" or "at 3:00 PM").`);

    // Listen for the user's time input
    citel.ev.on('message.new', async (message) => {
        if (message.sender === userId) {
            const timeInput = message.text.trim();

            // Schedule the reminder using node-schedule
            const job = schedule.scheduleJob(timeInput, () => {
                // When the scheduled time arrives, send the reminder message
                citel.reply(`Reminder: "${reminderText}"`);
            });

            // Store the reminder job for later use (e.g., for canceling)
            if (!userReminders.has(userId)) {
                userReminders.set(userId, []);
            }
            userReminders.get(userId).push(job);

            // Confirm to the user that the reminder has been set
            await citel.reply(`Reminder set: "${reminderText}" at ${timeInput}`);

            // Stop listening for further time input
            citel.ev.removeAllListeners('message.new');
        }
    });
});

// Command for canceling reminders
cmd({
    pattern: "cancelreminder",
    desc: "Cancel your scheduled reminders.",
    category: "utility",
}, async (Void, citel) => {
    const userId = citel.sender;

    if (userReminders.has(userId)) {
        const userJobs = userReminders.get(userId);
        userJobs.forEach((job) => {
            job.cancel(); // Cancel the scheduled reminder
        });
        userReminders.delete(userId); // Remove the user's reminders
        await citel.reply("All your scheduled reminders have been canceled.");
    } else {
        await citel.reply("You don't have any scheduled reminders.");
    }
});
