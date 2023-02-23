const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const { layers, width, height, getImageFiles } = require("../input/config");
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");
var metadata = [];
var attributes = [];
var hash = [];
var decodedHash = [];

const generateNFTs = (amount) => {
  for (let i = 0; i < amount; i++) {
    layers.forEach((layer) => {
      drawLayer(layer, i);
    });

    // addMetadata(i);
    // console.log("Creating edition " + i);
  }
};

// Step 2) Save the image and writing a new file for it
const saveLayer = (_canvas, _edition) => {
  fs.writeFileSync(`./output/${_edition}.png`, _canvas.toBuffer("image/png"));
};

const drawLayer = async (_layer, _edition) => {
  // let element =r
  //   _layer.elements[Math.floor(Math.random() * _layer.elements.length)];
  // addAttributes(element, _layer);
  // const image = await loadImage(`${_layer.location}${element.fileName}`);

  // ctx.drawImage(
  //   image,
  //   _layer.position.x,
  //   _layer.position.y,
  //   _layer.size.width,
  //   _layer.size.height
  // );

  // Step 2) save this image / new layer to the global canvas
  saveLayer(canvas, _edition);
};

export const generateNFTs = (amount) => {};

// fs.readFile("./output/_metadata.json", (err, data) => {
//   if (err) throw err;
//   fs.writeFileSync("./output/_metadata.json", JSON.stringify(metadata));
// });

// const addMetadata = (_edition) => {
//   let dateTime = Date.now();
//   let tempMetadata = {
//     hash: hash.join(""),
//     decodedHash: decodedHash,
//     edition: _edition,
//     date: dateTime,
//     attributes: attributes
//   };
//   metadata.push(tempMetadata);
//   attributes = [];
//   hash = [];
//   decodedHash = [];
// };

// const addAttributes = (_element, _layer) => {
//   let tempAttr = {
//     id: _element.id,
//     layer: _layer.name,
//     name: _element.name,
//     rarity: _element.rarity
//   };
//   attributes.push(tempAttr);
//   hash.push(_layer.id);
//   hash.push(_element.id);
//   decodedHash.push({ [_layer.id]: _element.id });
// };

// Step 1) this will draw an image on the ctx/canvas - but we can't see it yet
