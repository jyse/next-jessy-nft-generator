export const createContractAPI = async (number) => {
  console.log("🖌️🖼️ Creating contract ");
  const response = await fetch("/api/create-contract", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ create: "creating Contract" })
  });
  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

// import { ethers } from "ethers";
// import fs from "fs";
// import path from "path";
// import { task } from "hardhat/config";
// import { run } from "hardhat";

// task("compile", "Compile contracts").setAction(async () => {
//   await run("compile");
// });

// const compileContract = async () => {
//   try {
//     // Compile the Solidity contract
//     await run("compile");

//     // Get the contract artifacts
//     const contractPath = "contracts/GenNFTs.sol";
//     const GenNFTsContract = await ethers.getContractFactory("GenNFTs");
//     const contractArtifacts = await GenNFTsContract.fromSolidity(contractPath);

//     // Return the contract artifacts
//     return contractArtifacts;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const handleContractClick = async () => {
//   console.log("Creating contract 📝");

//   try {
//     // Connect to the Polygon network
//     const provider = new ethers.providers.JsonRpcProvider(
//       process.env.NEXT_PUBLIC_POLYGON_RPC_URL
//     );
//     const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

//     // Compile the Solidity contract and get the contact artifacts
//     const contractArtifacts = await compileContract();

//     // Create the contract factory and deploy the contract
//     const genNFTs = await contractArtifacts.deploy(signer);

//     // Wait for the contract to be deployed and get the contract address
//     await genNFTs.deployed();
//     const address = genNFTs.address;

//     console.log("Contract deployed at:", address);
//     return address;
//   } catch (error) {
//     console.error(error);
//   }
// };
