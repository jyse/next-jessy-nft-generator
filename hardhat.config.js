require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

// compile the contract
// npm install --save-dev @nomicfoundation/hardhat-toolbox
// run npx hardhat compile

// testing contract
// npx hardhat test

// npx hardhat run scripts/deploy.js --network polygon_mumbai
// https://mumbai.polygonscan.com/ => you can check the deployment status of your contract here!

// to quickly verify contracts on polygonscan
// npm install --save-dev @nomiclabs/hardhat-etherscan
// npx hardhat verify --network polygon_mumbai 0x4b75233D4FacbAa94264930aC26f9983e50C11AF

// Set up Hardhat
// Create a simple smart contract
// Compile contract
// Test contract
// Deploy contract
