Blockchain Game App

## Overview
This application utilizes the BlockchainGameEngineX library to simulate a blockchain-based game. It demonstrates how game actions, such as player movements and interactions, can be recorded as blocks on a blockchain, providing a transparent and tamper-proof history of in-game events.

## Installation
Before running the application, ensure you have Node.js installed on your system. You can then proceed with the following setup steps:

Install Dependencies: Run the following command in the terminal to install the necessary Node.js dependencies:

npm install blockchain-game-engine-x
Running the Application: Navigate to the directory containing game-app.js and run the following command:

node game-app.js

## How It Works
The application creates an instance of a blockchain dedicated to game actions. It then simulates three game events:

Player 1 moves forward.
Player 2 collects a power-up.
Player 1 defeats the boss.
Each action is added as a separate block to the blockchain. Finally, the application prints the entire blockchain, showcasing the chain of events in the game.
