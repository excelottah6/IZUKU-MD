const { cmd, tlang, prefix } = require('../lib');
const { pokemonCharacters } = require('./pokemon-data');
const mongoose = require('mongoose');
const playerSchema = new mongoose.Schema({
  userId: String,
  username: String,
  pokemons: [String],
  inventory: [{ item: String, quantity: Number }] 
});

const Player = mongoose.model('Player', playerSchema);

cmd({
  pattern: "register",
  desc: "Register as a player",
  category: "pokemon",
  filename: __filename,
}, async (Void, citel) => {

  const existingPlayer = await Player.findOne({ userId: citel.sender });

  if (existingPlayer) {
    return citel.reply("You are already registered as a player.");
  }

  const newPlayer = new Player({
    userId: citel.sender,
    username: citel.senderName,
    pokemons: [],
    inventory: [],
  });

  await newPlayer.save();
  citel.reply("You are now registered as a player!");
});

cmd({
  pattern: "profile",
  desc: "Check a Pokémon's profile",
  category: "pokemon",
  filename: __filename,
},
async (Void, citel, text) => {
  const pokemonName = text.toLowerCase();
  const profile = pokemonCharacters[pokemonName];

  if (profile) {
    citel.reply(`*${pokemonName}'s Profile*\n\nLevel: ${profile.level}\nXP: ${profile.xp}`);
  } else {
    citel.reply(`Pokémon '${pokemonName}' not found in your collection.`);
  }
});
