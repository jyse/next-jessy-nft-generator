const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const {
  layers,
  width,
  height,
  getImageFiles
} = require("../public/input/config");
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");
const path = require("path");
const generatedNFTsPath = path.resolve("./public/output/generatedNFTs/");
var metadata = [];
var attributes = [];
var hash = [];
var decodedHash = [];

const folderPathNFTs = path.join(
  process.cwd(),
  "public",
  "output",
  "GeneratedNFTs"
);

const folderPathJSON = path.join(process.cwd(), "public", "output", "JSON");

const saveLayer = (_canvas, _amount) => {
  fs.writeFileSync(
    `./public/output/generatedNFTs/${_amount}.png`,
    _canvas.toBuffer("image/png")
  );
};

const addMetadata = (_edition) => {
  let dateTime = Date.now();
  let tempMetadata = {
    hash: hash.join(""),
    decodedHash: decodedHash,
    edition: _edition,
    date: dateTime,
    attributes: attributes
  };
  metadata.push(tempMetadata);
  attributes = [];
  hash = [];
  decodedHash = [];
};

const addAttributes = (_element, _layer) => {
  let tempAttr = {
    id: _element.id,
    layer: _layer.name,
    name: _element.name,
    rarity: _element.rarity
  };
  attributes.push(tempAttr);
  hash.push(_layer.id);
  hash.push(_element.id);
  decodedHash.push({ [_layer.id]: _element.id });
};

const drawLayer = async (_layer, amount) => {
  let element =
    _layer.elements[Math.floor(Math.random() * _layer.elements.length)];
  addAttributes(element, _layer);
  const image = await loadImage(`${_layer.location}${element.fileName}`);
  ctx.drawImage(
    image,
    _layer.position.x,
    _layer.position.y,
    _layer.size.width,
    _layer.size.height
  );
  console.log(
    `Layer🌊: ${_layer.name} created with element 🔥 ${element.name}`
  );
  saveLayer(canvas, amount);
};

const clearFiles = async () => {
  if (fs.existsSync(folderPathNFTs)) {
    // Get all files in the folder
    const files = fs.readdirSync(folderPathNFTs);

    // Delete each file
    console.log("💥clearing out the NFT images");
    files.forEach((file) => {
      fs.unlinkSync(path.join(folderPathNFTs, file));
    });
  }

  if (fs.existsSync(folderPathJSON)) {
    const files = fs.readdirSync(folderPathJSON);

    // Delete each file
    console.log("💥clearing out the JSON files");
    files.forEach((file) => {
      fs.unlinkSync(path.join(folderPathJSON, file));
    });
  }
};

const lastCheck = async (fileNames) => {
  fileNames.forEach((fileName) => {
    const filePath = `${folderPathNFTs}/${fileName}`;
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error(`${filePath} does not exist`);
      } else {
        console.log(`${filePath} exists`);
        return true;
      }
    });
  });
};

export const generateNFTs = async (amount) => {
  await clearFiles();

  for (let i = 1; i <= amount; i++) {
    layers.forEach((layer) => {
      drawLayer(layer, i);
    });
    addMetadata(i);
    console.log("Creating amount: ", i);
  }
  await readMetaData();
  let filePaths = await getPNGFilePaths();
  console.log(filePaths, "FILE PATHS");
  return filePaths;
};

const readMetaData = async () => {
  fs.readFile("./public/output/_metadata.json", (err, data) => {
    if (err) throw err;
    fs.writeFileSync(
      "./public/output/_metadata.json",
      JSON.stringify(metadata)
    );
  });
};

const getPNGFilePaths = async () => {
  return new Promise((resolve, reject) => {
    fs.readdir(generatedNFTsPath, (err, files) => {
      if (err) {
        console.error("Error reading the output folder:", err);
        return;
      }
      const pngFilePaths = files.filter(
        (file) => path.extname(file).toLowerCase() === ".png"
      );
      resolve(pngFilePaths);
    });
  });
};

export const getIMGLayers = async (layer) => {
  let filePath = path.join("public/input", layer);

  return new Promise((resolve, reject) => {
    fs.readdir(filePath, (err, files) => {
      if (err) {
        console.error("Error reading the output folder:", err);
        return;
      }
      const imgObjects = files.map((i, index) => {
        return {
          id: index + 1,
          layer: layer,
          fileName: i,
          filePath: filePath
        };
      });
      resolve(imgObjects);
    });
  });
};
