const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with account:", deployer.address);

  const GenNFTs = await ethers.getContractFactory("GenNFTs");
  const genNFTs = await GenNFTs.deploy();

  console.log("Contract address:", genNFTs.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
