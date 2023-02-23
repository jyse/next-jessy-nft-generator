// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import path from "path";
import fs from "fs";

export default function handler(req, res) {
  console.log(JSON.parse(req.body).amount);
  console.log(__dirname, "dir name");
  const inDir = path.join(__dirname, "..", "..", "..", "..", "input");
  const outDir = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "public",
    "output"
  );

  fs.writeFileSync(path.join(outDir, "hello-world-2.txt"), "Hello world 2");
  res.status(200).json({ result: "/output/Coral.png" });
}
