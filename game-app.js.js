// game-app.js
const BlockchainGameEngineX = require('blockchain-game-engine-x');

const blockchainGame = new BlockchainGameEngineX();

// Sample data to add blocks to the blockchain
const gameData = ['Player 1 moves forward', 'Player 2 collects a power-up', 'Player 1 defeats the boss'];

// Adding blocks to the blockchain
gameData.forEach((data) => {
  blockchainGame.addBlock(data);
});

// Display the entire blockchain
console.log('Blockchain:', blockchainGame.getBlockchain());
