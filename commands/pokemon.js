const { cmd, tlang, prefix } = require('../lib');
const { pokemonCharacters } = require('../lib/pokemon-data');
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  userId: String,
  username: String,
  pokemons: [String],
  inventory: [{ item: String, quantity: Number }],
lastCatchTimestamp: Number, 
});
const cooldownInHours = 24;

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
async (Void, citel) => {
  const playerUserId = citel.sender;
  const player = await Player.findOne({ userId: playerUserId });

  if (!player) {
    return citel.reply("You must register as a player first using the 'register' command.");
  }

  // Get the current timestamp
  const currentTime = Date.now();

  // Check the timestamp of the last catch, if available
  if (player.lastCatchTimestamp) {
    // Calculate the time elapsed since the last catch
    const timeElapsed = (currentTime - player.lastCatchTimestamp) / (1000 * 60 * 60); // in hours

    if (timeElapsed < cooldownInHours) {
      // Player needs to wait until the cooldown period is over
      const remainingTime = cooldownInHours - timeElapsed;
      return citel.reply(`You need to wait ${remainingTime.toFixed(2)} hours before you can catch another Pokémon.`);
    }
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
  player.lastCatchTimestamp = currentTime; // Update the last catch timestamp
  await player.save();

  // Include the image URL of the caught Pokémon in the response
  const profile = pokemonCharacters[randomPokemonName];
  const { level, xp, image } = profile;

  const caption = `You caught a wild ${randomPokemonName}!\n\n*${randomPokemonName}'s Profile*\n\nLevel: ${level}\nXP: ${xp}`;

  if (image) {
    await Void.sendImage(citel.chat, image, { caption });
  } else {
    citel.reply(caption);
  }

  function getRandomPokemonName() {
    // Simulate a random encounter; you can implement this differently
    const availablePokemonNames = Object.keys(pokemonCharacters);
    const randomIndex = Math.floor(Math.random() * availablePokemonNames.length);
    return availablePokemonNames[randomIndex];
  }
});

cmd({
  pattern: "buy",
  desc: "Buy a Pokémon from the marketplace",
  category: "pokemon",
  filename: __filename,
}, async (Void, citel, text) => {
  const buyerUserId = citel.sender;
  const buyer = await Player.findOne({ userId: buyerUserId });

  if (!buyer) {
    return citel.reply("You must register as a player first using the 'register' command.");
  }
  const pokemonNameToBuy = text.trim().toLowerCase();

  // Check if the Pokémon exists in the marketplace (you can implement this)
  if (!isPokemonInMarketplace(pokemonNameToBuy)) {
    return citel.reply(`The Pokémon '${pokemonNameToBuy}' is not available in the marketplace.`);
  }

  // Calculate the price for the Pokémon (you can implement this)
  const pokemonPrice = calculatePokemonPrice(pokemonNameToBuy);

  // Check if the buyer has enough currency to make the purchase
  if (buyer.currency < pokemonPrice) {
    return citel.reply("You don't have enough currency to buy this Pokémon.");
  }

  // Deduct the price from the buyer's currency and add the Pokémon to their collection
  buyer.currency -= pokemonPrice;
  buyer.pokemons.push(pokemonNameToBuy);


  await buyer.save();

  citel.reply(`You bought a ${pokemonNameToBuy} for ${pokemonPrice} currency.`);
});

cmd({
  pattern: "sell",
  desc: "Sell a Pokémon from your collection",
  category: "pokemon",
  filename: __filename,
}, async (Void, citel, text) => {
  const sellerUserId = citel.sender;
  const seller = await Player.findOne({ userId: sellerUserId });

  if (!seller) {
    return citel.reply("You must register as a player first using the 'register' command.");
  }

  // Parse the Pokémon name to sell from the text
  const pokemonNameToSell = text.trim().toLowerCase();

  // Check if the seller has the Pokémon in their collection
  if (!seller.pokemons.includes(pokemonNameToSell)) {
    return citel.reply(`You don't have a ${pokemonNameToSell} to sell.`);
  }

  // Calculate the selling price for the Pokémon (you can implement this)
  const pokemonSellingPrice = calculateSellingPrice(pokemonNameToSell);

  // Add the selling price to the seller's currency and remove the Pokémon from their collection
  seller.currency += pokemonSellingPrice;
  seller.pokemons = seller.pokemons.filter(pokemon => pokemon !== pokemonNameToSell);

  // Save the changes to the database
  await seller.save();

  citel.reply(`You sold your ${pokemonNameToSell} for ${pokemonSellingPrice} currency.`);
});
