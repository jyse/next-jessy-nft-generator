import { task } from "hardhat/config";
import { run } from "hardhat";
import { ethers } from "hardhat";
const hre = require("hardhat");

export const createContract = async () => {
  console.log("Creating contract 📝");

  try {
    task("compile", "Compile contracts").setAction(async () => {
      console.log("compiling shit");
      await run("compile");
    });

    // get the contract to deploy it;
    const Contract = await hre.ethers.getContractFactory("GenNFTs");
    const contractArtifacts = await hre.artifacts.readArtifact("GenNFTs");

    const genNFTContract = await Contract.deploy();
    await genNFTContract.deployed();

    console.log("Contract deployed to", genNFTContract.address);
    console.log("Abi of contract: ", contractArtifacts.abi);

    // grab the deployed contract address and send it back
    return {
      contractAddress: genNFTContract.address,
      abi: contractArtifacts.abi
    };
  } catch (error) {
    console.error(error);
  }
};
