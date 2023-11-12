const { cmd } = require('../lib');
const axios = require('axios');

cmd({
  pattern: 'tiktok',
  fromMe: true,
  desc: 'Download TikTok video without watermark',
},
async (Void, citel, text) => {
  const url = text.split(' ')[1];

  if (!text) {
    return citel.reply('Please provide a TikTok video URL.');
  }

  const apiUrl = `https://vihangayt.me/download/tiktok?url=${encodeURIComponent(url)}`;

  try {
    const response = await axios.get(apiUrl);

    if (response.data && response.data.video_url) {
      // Download the video
      const videoResponse = await axios.get(response.data.video_url, { responseType: 'arraybuffer' });

      // Send the video as a media file
      await Void.sendMessage(citel.chat, { url: response.data.video_url }, MessageType.video, { quoted: citel.data });
    } else {
      citel.reply('Unable to fetch the download URL. The TikTok link may be invalid or the service is down.');
    }
  } catch (error) {
    citel.reply(`Error: ${error.message}`);
  }
});
