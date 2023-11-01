const fs = require('fs');
const crypto = require('crypto');

// Read the contents of the critical code sections
const code1 = fs.readFileSync('group.js', 'utf8');
const code2 = fs.readFileSync('client.js', 'utf8');
const code3 = fs.readFileSync('index.js', 'utf8');

// Calculate hashes of these code sections
const hash1 = crypto.createHash('sha256').update(code1).digest('hex');
const hash2 = crypto.createHash('sha256').update(code2).digest('hex');
const hash3 = crypto.createHash('sha256').update(code3).digest('hex');

// Predefined hashes for the original code
const originalHash1 = 'your-original-hash1';
const originalHash2 = 'your-original-hash2';
const originalHash3 = 'your-original-hash3';


if (hash1 !== originalHash1 || hash2 !== originalHash2 || hash3 !== originalHash3) {
  console.log('STUPID MOTHERFUCKER Modified code detected. This bot will not run.');
} else {
}
