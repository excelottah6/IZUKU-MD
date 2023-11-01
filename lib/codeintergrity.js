const fs = require('fs');
const crypto = require('crypto');

// Read the contents of the critical code sections
const code1 = fs.readFileSync('./commands/fun.js', 'utf8');
const code2 = fs.readFileSync('./lib/client.js', 'utf8');
const code3 = fs.readFileSync('./config.js', 'utf8');

// Calculate hashes of these code sections
const hash1 = crypto.createHash('sha256').update(code1).digest('hex');
const hash2 = crypto.createHash('sha256').update(code2).digest('hex');
const hash3 = crypto.createHash('sha256').update(code3).digest('hex');

// Predefined hashes for the original code
const originalHash1 = 'IZUKU';
const originalHash2 = 'IZUKU;;;';
const originalHash3 = 'IZUKU-Md';


if (hash1 !== originalHash1 || hash2 !== originalHash2 || hash3 !== originalHash3) {
  console.log('STUPID MOTHERFUCKER Modified code detected. This bot will not run.');
} else {
}
