const fs = require('fs');
const crypto = require('crypto');

function readCodeFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`Error reading ${filePath}: ${error.message}`);
    process.exit(1);
  }
}

const originalHash1 = '3afab2798c10261a6b834822ee20786cf26b736b239d473707766e77a91c5391';
const originalHash2 = '34b84f6aadc935944c53e5ab7148907ce946c5b483d678f9eb90d6ec12c2c8cc';
const originalHash3 = '9f83beb68b868b63dec40f3a34654972be2d9fd5f74ef48e99c20fe399fdd4d8';

const code1 = readCodeFile('./commands/fun.js');
const code2 = readCodeFile('./commands/general.js');
const code3 = readCodeFile('../config.js');

const hash1 = crypto.createHash('sha256').update(code1).digest('hex');
const hash2 = crypto.createHash('sha256').update(code2).digest('hex');
const hash3 = crypto.createHash('sha256').update(code3).digest('hex');

if (hash1 !== originalHash1 || hash2 !== originalHash2 || hash3 !== originalHash3) {
  console.log('Modified code detected. This bot will not run.');
  process exit(1);
} else {
  console.log('Code integrity verified. Proceeding with the bot functionality.');
}
