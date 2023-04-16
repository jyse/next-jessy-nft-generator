const fs = require("fs");
const path = require("path");
const pinataSDK = require("@pinata/sdk");
const pinata = new pinataSDK({
  pinataApiKey: "77d0c81e78517fe11def",
  pinataSecretApiKey:
    "9e9cd95384c4d84a94147e08aa255c8d45c21e8288886d2c42f2ae7f66bc9641"
});
const generatedNFTsPath = path.resolve("./public/output/generatedNFTs/");
const JSONPath = path.resolve("./public/output/JSON/");

const storeJSONIpfs = async () => {
  const options = {
    pinataMetadata: {
      name: "JSON Objects",
      keyvalues: {
        folder: "JSON",
        timestamp: Date.now()
      }
    },
    pinataOptions: {
      cidVersion: 0
    }
  };
  pinata
    .pinFromFS(JSONPath, options)
    .then((ipfsJSONDir) => {
      console.log("🐸🐸RESULT🐸🐸", ipfsJSONDir);
    })
    .catch((error) => {
      console.log("🧐ERROR🧐", error);
    });
};

const writeJSONFiles = async (ipfsNFTDir) => {
  let hash = ipfsNFTDir.IpfsHash;
  const outputDir = path.join(process.cwd(), "public", "output", "JSON"); // get the full path to the output directory

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  return new Promise((resolve, reject) => {
    fs.readdir(generatedNFTsPath, (err, files) => {
      for (const fileName of files) {
        let jsonFileName = fileName.slice(0, -4);
        const jsonObject = {
          name: jsonFileName,
          image: `ipfs://${hash}/${fileName}`,
          description: "Generated NFT called " + fileName
        };

        const filePath = path.join(outputDir, `${jsonFileName}.json`);
        fs.writeFile(filePath, JSON.stringify(jsonObject, null, 2), (err) => {
          if (err) throw err;
          console.log(`The file ${filePath} has been saved`);
        });
      }
    });
  });
};

export const storeIPFS = async () => {
  const folderPath = "public/output/generatedNFTs";
  const options = {
    pinataMetadata: {
      name: "GenNFTs" + Date.now(),
      keyvalues: {
        folder: "NFTsFolder",
        timestamp: Date.now()
      }
    },
    pinataOptions: {
      cidVersion: 0
    }
  };
  try {
    const ipfsNFTDir = await pinata.pinFromFS(folderPath, options);
    console.log("🌸RESULT🌸", ipfsNFTDir);
    writeJSONFiles(ipfsNFTDir);
    storeJSONIpfs();
    return ipfsNFTDir;
  } catch (error) {
    console.log("🧐ERROR🧐", error);
    throw error;
  }
};
