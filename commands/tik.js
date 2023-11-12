const TikTokScraper = require('tiktok-scraper');
const { cmd } = require('../lib');
cmd({
  pattern: 'tiktok',
  fromMe: true,
  catergory: 'downloader',
  desc: 'Download TikTok video without watermark',
},
async (Void, citel, text) => {
  const url = text.split(' ')[1];

  if (!url) {
    return citel.reply('Please provide a TikTok video URL.');
  }

  try {
    const videoMeta = await TikTokScraper.getVideoMeta(url);
    
    if (videoMeta) {
      // Check if the video has a noWatermark URL
      const downloadUrl = videoMeta.collector[0].videoUrlNoWaterMark || videoMeta.collector[0].videoUrl;

      if (downloadUrl) {
        // You can handle the download URL as needed, for example, send it as a reply
        citel.reply(`Download URL: ${downloadUrl}`);
      } else {
        citel.reply('No download URL found. The video may be private or have restrictions.');
      }
    } else {
      citel.reply('Unable to get information for the provided TikTok URL.');
    }
  } catch (error) {
    citel.reply(`Error: ${error.message}`);
  }
});
