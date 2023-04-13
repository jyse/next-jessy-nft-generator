const fs = require("fs");
const pinataSDK = require("@pinata/sdk");
const pinata = new pinataSDK({
  pinataApiKey: "77d0c81e78517fe11def",
  pinataSecretApiKey:
    "9e9cd95384c4d84a94147e08aa255c8d45c21e8288886d2c42f2ae7f66bc9641"
});

export const storeIPFS = async () => {
  const folderPath = "public/output/generatedNFTs";
  const options = {
    pinataMetadata: {
      name: "Kyaa",
      keyvalues: {
        folder: "NFTsFolder"
      }
    },
    pinataOptions: {
      cidVersion: 0
    }
  };
  pinata
    .pinFromFS(folderPath, options)
    .then((result) => {
      console.log("🌸RESULT🌸", result);
    })
    .catch((error) => {
      console.log("🧐ERROR🧐", error);
    });
};
