const { exec } = require("child_process");
const fs = require("fs");
const { cmd } = require("./lib");
cmd({
    pattern: "mp4",
    desc: "Converts a replied animated sticker to a video.",
    category: "converter",
    usage: '<reply to any animated sticker>',
    fromMe: true,
}, async (Void, citel) => {
    const { reply_message } = citel;

    if (!reply_message || !reply_message.sticker) {
        return await citel.reply("_Reply to an animated sticker!_");
    }

    try {
        const stickerData = await reply_message.download();
        const videoPath = await convertStickerToVideo(stickerData); // Implement this function

        if (videoPath) {
            await Void.sendMessage(citel.chat, { video: videoPath }, { quoted: citel });
        } else {
            await citel.reply("*Failed to convert sticker to video.*");
        }
    } catch (error) {
        console.error("Error converting sticker to video:", error);
        await citel.reply("*Failed to convert sticker to video.*");
    }
});

async function convertStickerToVideo(stickerData) {
    const tempFolder = "./temp";
    const inputSticker = `${tempFolder}/input.webp`;
    const outputVideo = `${tempFolder}/output.mp4`;

    try {
        if (!fs.existsSync(tempFolder)) {
            fs.mkdirSync(tempFolder);
        }

        fs.writeFileSync(inputSticker, stickerData);

        exec(`ffmpeg -ignore_unknown -i ${inputSticker} ${outputVideo}`, (err, stdout, stderr) => {
            if (err) {
                console.error("Error converting sticker:", err);
            }

            if (fs.existsSync(outputVideo)) {
                return outputVideo;
            } else {
                return null;
            }
        });
    } catch (error) {
        console.error("Error during conversion:", error);
        return null;
    }
}
