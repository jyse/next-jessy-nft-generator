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

export const getImageFiles = (layer) => {
  let imageFiles = fs
    .readdirSync(`./input/${layer}`)
    .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
    .map((i, index) => {
      console.log(i, "what is i here?");
      return {
        id: index + 1,
        layer: layer,
        fileName: i,
        rarity: addRarity(i)
      };
    });

  return imageFiles;
};

export const layers = [
  {
    id: 1,
    name: "background",
    location: `${dir}/background/`,
    position: { x: 0, y: 0 },
    size: { width: width, height: height }
  },
  {
    id: 2,
    name: "bonsai",
    location: `${dir}/bonsai/`,
    position: { x: 0, y: 0 },
    size: { width: width, height: height }
  },
  {
    id: 3,
    name: "logo",
    location: `${dir}/logo/`,
    position: { x: 0, y: 0 },
    size: { width: width, height: height }
  }
];
