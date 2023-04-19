const fs = require("fs");
const axios = require("axios");
const path = require("path");
import { Blob } from "fetch-blob";
import FormData from "form-data";

export const uploadToSpheron = async () => {
  const generatedNFTsPath = path.resolve("./public/output/generatedNFTs/");
  const url =
    "https://api-v2.spheron.network/v1/deployment/upload?organization=W3bLabSpheron&project=NFT-GEnerator&protocol=ipfs";
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiI5YjJmZGEwMTIxZGY1YzVmNTNkZmQ4NzlkMmYyZGQ0ZjA1OThlNzc2MTBkYjc2MDczZWY1MTZkZmMxY2RlODMwYTJkZTRkYWQwMjBkN2FiYWU5MWQxMDY0ZDNhNGJjNTMzN2NlZGFhNTBmMjQ0ZDc5N2MzZTE4MTEzMjFjYTNlYSIsImlhdCI6MTY4MTg3OTg5NywiaXNzIjoid3d3LnNwaGVyb24ubmV0d29yayJ9.cgWPivnueS1ZlWG4WkDyBOku5VnImWT8ReD7M5WzuxM";

  const files = fs.readdirSync(generatedNFTsPath);
  const responses = [];

  for (const file of files) {
    const filePath = `${generatedNFTsPath}/${file}`;
    const fileData = fs.readFileSync(filePath);
    const fileBlob = new Blob([fileData], { type: "image/jpeg" }); // Create a new Blob from the Buffer
    const formData = new FormData();
    formData.append("image", fileBlob, file);

    try {
      const response = await axios.post(url, formData, {
        method: "POST",
        params: {
          organization: "W3BLabSpheron",
          protocol: "ipfs",
          project: "NFT-Generator"
        },
        headers: {
          authorization: `Bearer ${authToken}`
        }
      });
      console.log(`File ${file} uploaded successfully`);
      console.log(response.data);
    } catch (error) {
      console.error(`Error uploading file ${file}: ${error}`);
    }
  }
  return responses;
};
