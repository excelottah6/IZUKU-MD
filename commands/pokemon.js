const { cmd, tlang, prefix } = require('../lib');
const { cmd } = require('../lib');
const { pokemonCharacters } = require('./pokemon-data');
const mongoose = require('mongoose');
const Player = mongoose.model('Player');
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
  pattern: "pokefile",
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

cmd({
  pattern: "catch",
  desc: "Catch a Pokémon",
  category: "pokemon",
  filename: __filename,
},
async (Void, citel, text) => {
  const playerUserId = citel.sender;
  const player = await Player.findOne({ userId: playerUserId });

  if (!player) {
    return citel.reply("You must register as a player first using the 'register' command.");
  }

  // Simulate a random Pokémon encounter (you can implement this differently)
  const randomPokemonName = getRandomPokemonName();

  if (!randomPokemonName) {
    return citel.reply("No Pokémon encountered this time. Try again later.");
  }

  if (player.pokemons.includes(randomPokemonName)) {
    return citel.reply(`You already have a ${randomPokemonName}. Try to catch a different Pokémon.`);
  }

  player.pokemons.push(randomPokemonName);
  await player.save();

  citel.reply(`You caught a wild ${randomPokemonName}!`);

  function getRandomPokemonName() {
    // Simulate a random encounter; you can implement this differently
    const availablePokemonNames = Object.keys(pokemonCharacters);
    const randomIndex = Math.floor(Math.random() * availablePokemonNames.length);
    return availablePokemonNames[randomIndex];
  }
});
