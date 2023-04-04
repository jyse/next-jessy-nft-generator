// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import path from "path";
import fs from "fs";
import { generateNFTs } from "../../../services/generate";
import { getIMGLayers } from "../../../services/generate";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.amount) {
      let genNFTs = await generateNFTs(req.body.amount);
      res.status(200).json(genNFTs);
    }

    if (req.body.layer) {
      let imgsLayer = await getIMGLayers(req.body.layer);
      res.status(200).json(imgsLayer);
    }
  }

  // console.log(__dirname, "dir name");
  // const inDir = path.join(__dirname, "..", "..", "..", "..", "input");

  // grab the amount of NFTs
  // pass that to generate.js
  //

  // const outDir = path.join(
  //   __dirname,
  //   "..",
  //   "..",
  //   "..",
  //   "..",
  //   "public",
  //   "output"
  // );

  // fs.writeFileSync(path.join(outDir, "hello-world-2.txt"), "Hello world 2");
  // res.status(200).json({ result: "/output/Coral.png" });
}
