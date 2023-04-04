const fs = require("fs");
const path = require("path");
const generatedNFTsPath = path.resolve("./public/output/generatedNFTs/");

const getElementIMGs = async (layer) => {
  let inputDir = "./public/input"
  
  let layerPath = path.join(inputDir, layer)


  return new Promise((resolve, reject) => {
    fs.readdir(, (err, files) => {
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
