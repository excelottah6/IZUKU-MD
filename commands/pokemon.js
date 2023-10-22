const { cmd, tlang, prefix } = require('../lib');
const { pokemonCharacters } = require('../lib/pokemon-data');
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  userId: String,
  username: String,
  pokemons: [String],
  inventory: [{ item: String, quantity: Number }]
});

const Player = mongoose.model('Player', playerSchema);
const cooldownInHours = 24;

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
