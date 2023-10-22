const { cmd, tlang, prefix } = require('../lib');
const { pokemonCharacters } = require('../lib/pokemon-data');
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  userId: String,
  username: String,
  pokemons: [String],
  inventory: [{ item: String, quantity: Number }],
  forSalePokemons: [String],
lastCatchTimestamp: Number, 
});
const cooldownInHours = 2;

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
  citel.reply("*welcome You are now registered as a player!🤑🤍*");
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
    // Include the updated XP value in the response
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
    return citel.reply("🚫 You must register as a player first using the 'register' command.");
  }

  // Get the current timestamp
  const currentTime = Date.now();

  // Check the timestamp of the last catch, if available
  if (player.lastCatchTimestamp) {
    // Calculate the time elapsed since the last catch in hours
    const timeElapsed = (currentTime - player.lastCatchTimestamp) / (1000 * 60 * 60); // in hours

    if (timeElapsed < cooldownInHours) {
      // Player needs to wait until the cooldown period is over
      const remainingTime = cooldownInHours - timeElapsed;
      return citel.reply(`⌛ You need to wait ${remainingTime.toFixed(0)} hours before you can catch another Pokémon.`);
    }
  }

  // Simulate a random Pokémon encounter (you can implement this differently)
  const randomPokemonName = getRandomPokemonName();

  if (!randomPokemonName) {
    return citel.reply("🌟 No Pokémon encountered this time. Try again later.");
  }

  if (player.pokemons.includes(randomPokemonName)) {
    return citel.reply(`👉 You already have a ${randomPokemonName}. Try to catch a different Pokémon.`);
  }

  player.pokemons.push(randomPokemonName);
  player.lastCatchTimestamp = currentTime; // Update the last catch timestamp
  await player.save();

  // Include the image URL of the caught Pokémon in the response
  const profile = pokemonCharacters[randomPokemonName];
  const { level, xp, image } = profile;

  const caption = `🎉 You caught a wild ${randomPokemonName}!\n\n*${randomPokemonName}'s Profile*\n\nLevel: ${level}\nXP: ${xp}`;

  if (image) {
    await citel.sendImage(citel.chat, image, { caption });
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
  desc: "Buy a Pokémon from another player",
  category: "pokemon",
  filename: __filename,
}, async (Void, citel, text) => {
  const buyerUserId = citel.sender;
  const buyer = await Player.findOne({ userId: buyerUserId });

  if (!buyer) {
    return citel.reply("You must register as a player first using the 'register' command.");
  }

  // Parse the Pokémon name and owner from the text
  const [pokemonNameToBuy, ownerUsername] = text.trim().split(" from ");

  if (!pokemonNameToBuy || !ownerUsername) {
    return citel.reply("Please specify the Pokémon to buy and the owner (e.g., .buy pikachu from @owner).");
  }

  // Check if the Pokémon exists in the marketplace
  if (!isPokemonInMarketplace(pokemonNameToBuy)) {
    return citel.reply(`The Pokémon '${pokemonNameToBuy}' is not available in the marketplace.`);
  }

  // Find the owner's player information
  const owner = await Player.findOne({ username: ownerUsername });

  if (!owner) {
    return citel.reply(`Player @${ownerUsername} not found. Make sure the username is correct.`);
  }

  // Check if the owner has put the Pokémon up for sale
  if (!isPokemonForSale(owner, pokemonNameToBuy)) {
    return citel.reply(`The Pokémon '${pokemonNameToBuy}' is not for sale by @${ownerUsername}.`);
  }

  // Calculate the price for the Pokémon
  const pokemonPrice = calculatePokemonPrice(pokemonNameToBuy);

  // Check if the buyer has enough currency to make the purchase
  if (buyer.currency < pokemonPrice) {
    return citel.reply("You don't have enough currency to buy this Pokémon.");
  }

  // Deduct the price from the buyer's currency and add the Pokémon to their collection
  buyer.currency -= pokemonPrice;
  buyer.pokemons.push(pokemonNameToBuy);

  // Remove the Pokémon from the owner's collection
  owner.pokemons = owner.pokemons.filter(pokemon => pokemon !== pokemonNameToBuy);

  // Save the changes to the database for both the buyer and the owner
  await buyer.save();
  await owner.save();

  citel.reply(`You bought a ${pokemonNameToBuy} from @${ownerUsername} for ${pokemonPrice} currency.`);
});

// Function to check if a Pokémon is available in the marketplace
function isPokemonInMarketplace(pokemonName) {
  // You can maintain an array of available Pokémon in your marketplace
  const availablePokemons = ["pikachu", "charizard", "bulbasaur", "squirtle", "jigglypuff"];
  
  // Check if the requested Pokémon is in the list of available Pokémon
  return availablePokemons.includes(pokemonName.toLowerCase());
}

// Function to calculate the price of a Pokémon
function calculatePokemonPrice(pokemonName) {
  // You can set different prices for different Pokémon
  const priceMap = {
    pikachu: 100,
    charizard: 500,
    bulbasaur: 200,
    squirtle: 300,
    jigglypuff: 150,
  };

  // Check if the requested Pokémon is in the price map
  const price = priceMap[pokemonName.toLowerCase()];

  // If the Pokémon is not found in the map, return a default price
  return price || 250; // Default price if not specified in the map
}

// Function to check if a Pokémon is available in the marketplace
function isPokemonInMarketplace(pokemonName) {
  // You can implement this based on the sellers who have put Pokémon for sale
  // Check if any player has the Pokémon for sale
  const sellersWithPokemon = players.filter((player) =>
    player.forSalePokemons && player.forSalePokemons.includes(pokemonName)
  );

  // Return true if any seller has the Pokémon for sale
  return sellersWithPokemon.length > 0;
}


cmd({
  pattern: "sell",
  desc: "Put a Pokémon up for sale in the marketplace",
  category: "pokemon",
  filename: __filename,
},
async (Void, citel, text) => {
  const sellerUserId = citel.sender;
  const seller = await Player.findOne({ userId: sellerUserId });

  if (!seller) {
    return citel.reply("You must register as a player first using the 'register' command.");
  }

  const args = text.split(" ");
  if (args.length < 1) {
    return citel.reply("Please specify the Pokémon you want to sell.");
  }

  const pokemonNameToSell = args[0].toLowerCase();

  // Check if the seller owns the specified Pokémon
  if (!seller.pokemons.includes(pokemonNameToSell)) {
    return citel.reply(`You don't own a ${pokemonNameToSell} to sell.`);
  }

  // Add the Pokémon to the list of Pokémon for sale
  seller.forSalePokemons = seller.forSalePokemons || [];
  seller.forSalePokemons.push(pokemonNameToSell);

  // Remove the Pokémon from the seller's collection
  seller.pokemons = seller.pokemons.filter((pokemon) => pokemon !== pokemonNameToSell);

  // Save the changes to the database
  await seller.save();

  citel.reply(`You have put your ${pokemonNameToSell} up for sale in the marketplace.`);
});


cmd({
  pattern: "mypokemon",
  desc: "List all your owned Pokémon",
  category: "pokemon",
  filename: __filename,
},
async (Void, citel) => {
  const playerUserId = citel.sender;
  const player = await Player.findOne({ userId: playerUserId });

  if (!player) {
    return citel.reply("🫠You must register as a player first using the 'register' command.");
  }

  const ownedPokemons = player.pokemons;

  if (ownedPokemons.length === 0) {
    return citel.reply("😕You don't have any Pokémon in your collection.");
  }

  const pokemonList = ownedPokemons.join(", ");
  citel.reply(`🚹Your owned Pokémon:\n${pokemonList}`);
});

cmd({
  pattern: "reward",
  desc: "Claim your daily reward",
  category: "pokemon",
  filename: __filename,
},
async (Void, citel, text) => {
  const player = await Player.findOne({ userId: citel.sender });

  if (!player) {
    return citel.reply("You must register as a player first using the 'register' command.");
  }

  // Check if the player has already claimed their daily reward today
  if (player.lastDailyClaim) {
    const lastClaimDate = new Date(player.lastDailyClaim);
    const currentDate = new Date();
    if (currentDate.getDate() === lastClaimDate.getDate()) {
      return citel.reply("You have already claimed your daily reward today.");
    }
  }

  // Award currency and update last claim date
  player.currency += 100; // Adjust the reward amount as needed
  player.lastDailyClaim = new Date();
  await player.save();

  citel.reply("You claimed your daily reward. You received 100 currency.");
});

cmd({
  pattern: "spin",
  desc: "Spin the wheel for a chance to win currency",
  category: "economy",
  filename: __filename,
},
async (Void, citel) => {
  const player = await Player.findOne({ userId: citel.sender });

  if (!player) {
    return citel.reply("You must register as a player first using the 'register' command.");
  }

  // Simulate a random reward (adjust as needed)
  const reward = Math.floor(Math.random() * 200) + 1; // Generates a random value between 1 and 200

  // Award the player and update their currency
  player.currency += reward;
  await player.save();

  citel.reply(`You spinned the wheel and won ${reward} currency!`);
});

cmd({
  pattern: "levelup",
  desc: "Use currency to level up a Pokémon",
  category: "pokemon",
  filename: __filename,
},
async (Void, citel, text) => {
  const player = await Player.findOne({ userId: citel.sender });

  if (!player) {
    return citel.reply("You must register as a player first using the 'register' command.");
  }

  const args = text.split(" ");
  if (args.length < 2) {
    return citel.reply("Please specify a Pokémon to level up and the amount of currency to spend.");
  }

  const pokemonName = args[0].toLowerCase();
  const currencyToSpend = parseInt(args[1]);

  // Check if the player owns the specified Pokémon
  if (!player.pokemons.includes(pokemonName)) {
    return citel.reply(`You don't own a ${pokemonName}.`);
  }

  // Check if the player has enough currency to spend
  if (player.currency < currencyToSpend) {
    return citel.reply("You don't have enough currency to level up this Pokémon.");
  }

  // Calculate the amount of XP to add based on the currency spent (you can adjust this formula)
  const xpToAdd = Math.floor(currencyToSpend / 10);

  // Update the Pokémon's XP and deduct the spent currency
  player.currency -= currencyToSpend;
  player.pokemonData[pokemonName].xp += xpToAdd;

  // Save the changes to the database
  await player.save();

  citel.reply(`You spent ${currencyToSpend} currency to level up your ${pokemonName} by ${xpToAdd} XP.`);
});

cmd({
  pattern: "searchpokemon",
  desc: "Search for the owner of a specific Pokémon",
  category: "pokemon",
  filename: __filename,
},
async (Void, citel, text) => {
  const player = await Player.findOne({ userId: citel.sender });

  if (!player) {
    return citel.reply("You must register as a player first using the 'register' command.");
  }

  const pokemonName = text.toLowerCase();

  // Check if the specified Pokémon exists in the player's collection
  if (player.pokemons.includes(pokemonName)) {
    return citel.reply(`You own a ${pokemonName}.`);
  } else {
    // Search for other players who own the specified Pokémon
    const otherPlayers = await Player.find({
      userId: { $ne: citel.sender }, // Exclude the current player
      pokemons: pokemonName,
    });

    if (otherPlayers.length > 0) {
      const playerList = otherPlayers.map((otherPlayer) => otherPlayer.username).join(", ");
      return citel.reply(`Players who own ${pokemonName}: ${playerList}`);
    } else {
      return citel.reply(`The Pokémon '${pokemonName}' is not owned by other players.`);
    }
  }
});

cmd({
  pattern: "marketplace",
  desc: "Check available Pokémon in the marketplace and their prices",
  category: "pokemon",
  filename: __filename,
},
async (Void, citel) => {
  // Get a list of players who have Pokémon for sale
  const sellersWithPokemonsForSale = players.filter((player) => player.forSalePokemons && player.forSalePokemons.length > 0);

  if (sellersWithPokemonsForSale.length === 0) {
    return citel.reply("There are no Pokémon available in the marketplace at the moment.");
  }

  const marketplaceInfo = sellersWithPokemonsForSale.map((seller) => {
    const availablePokemons = seller.forSalePokemons.join(", ");
    return `@${seller.userId} is selling: ${availablePokemons}`;
  });

  citel.reply(`Pokémon available in the marketplace:\n\n${marketplaceInfo.join("\n")}`);
});

