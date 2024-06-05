 const {cmd , Config , prefix,getBuffer,tlang,fetchJson } = require('../lib')
 const fetch = require('node-fetch')

cmd({
  pattern: "insta",
  desc: "Download Instagram video",
  category: "downloader",
  filename: __filename
},
async (Void, citel, match) => {
  try {
    let instaUrl = match.trim();
    if (!instaUrl) {
      return citel.reply('Please provide an Instagram video URL to download.');
    }

    let apiUrl = `https://api.maher-zubair.tech/download/instagram?url=${encodeURIComponent(instaUrl)}`;
    let response = await axios.get(apiUrl);
    let data = response.data;

    if (data && data.result && data.result.length > 0) {
      let { thumbnail, url } = data.result[0];

      await Void.sendMessage(citel.chat, {
        video: { url: url },
        caption: `Here is your Instagram video download link.`,
        contextInfo: {
          externalAdReply: {
            title: "Instagram Video",
            body: 'Touch here to download.',
            renderLargerThumbnail: true,
            thumbnailUrl: thumbnail,
            mediaType: 2,
            mediaUrl: url,
            sourceUrl: url
          }
        }
      });
    } else {
      await Void.sendMessage(citel.chat, { text: '*No result found.*', options: { isBold: true } });
    }
  } catch (error) {
    await Void.sendMessage(citel.chat, { text: `*An error occurred:* ${error.message || error}`, options: { isBold: true } });
  }
});