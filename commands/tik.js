const { cmd } = require('../lib');
const axios = require('axios');

cmd({
  pattern: 'tiktok',
  fromMe: true,
  desc: 'Download TikTok video without watermark',
  catergory:'downloader',
},
async (Void, citel, text) => {
  const url = text.split(' ')[1];

  if (!url) {
    return citel.reply('Please provide a TikTok video URL.');
  }

  const apiUrl = `https://vihangayt.me/download/tiktok?url=${encodeURIComponent(url)}`;

  try {
    const response = await axios.get(apiUrl);

    if (response.data && response.data.video_url) {
      // You can handle the download URL as needed, for example, send it as a reply
      citel.reply(`Download URL: ${response.data.video_url}`);
    } else {
      citel.reply('Unable to fetch the download URL. The TikTok link may be invalid or the service is down.');
    }
  } catch (error) {
    citel.reply(`Error: ${error.message}`);
  }
});
