import { generateNFTs } from "../../../services/generate";
import { getIMGLayers } from "../../../services/generate";
import { storeIPFS } from "../../../services/store-nfts";

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

    if (req.body.images) {
      try {
        const result = await storeIPFS(req.body.images);
        console.log("🦊RESULT🦊", result);
        res.status(200).json(result);
      } catch (error) {
        console.error("Failed to store files on IPFS", error);
        res.status(500).send("Internal Server Error");
      }
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
