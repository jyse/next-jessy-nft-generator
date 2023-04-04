const fs = require("fs");
const dir = __dirname;
const width = 1000;
const height = 1000;

const rarity = [
  { key: "", val: "original" },
  { key: "_r", val: "rare" },
  { key: "_sr", val: "super rare" }
];

const addRarity = (_str) => {
  let itemRarity;
  rarity.forEach((r) => {
    if (_str.includes(r.key)) {
      itemRarity = r.val;
    }
  });
  return itemRarity;
};

const cleanName = (_str) => {
  let name = _str.slice(0, -4);
  rarity.forEach((r) => {
    name = name.replace(r.key, "");
  });
  return name;
};

const getElements = (path) => {
  return fs
    .readdirSync(path)
    .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
    .map((i, index) => {
      return {
        id: index + 1,
        name: cleanName(i),
        fileName: i,
        rarity: addRarity(i)
      };
    });
};

export const layers = [
  {
    id: 1,
    name: "background",
    location: "public/input/background/",
    elements: getElements("public/input/background/"),
    position: { x: 0, y: 0 },
    size: { width: width, height: height }
  },
  {
    id: 2,
    name: "bonsai",
    location: "public/input/bonsai/",
    elements: getElements("public/input/bonsai/"),
    position: { x: 100, y: 100 },
    size: { width: 800, height: 800 }
  },
  {
    id: 3,
    name: "logo",
    location: "public/input/logo/",
    elements: getElements("public/input/logo/"),
    position: { x: 600, y: 800 },
    size: { width: 400, height: 180 }
  }
];

module.exports = { layers, width, height };
