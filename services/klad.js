// const axios = require("axios");
// const fs = require("fs");
// const path = require("path");
// const FormData = require("form-data");

// // Set up the Pinata API credentials
// const API_KEY = "9418217d097bb15cbbf1";
// const SECRET_API_KEY =
//   "e69b2a47d7a7bcfb3a7067a6e8a3f862381947d822dc0a90cef85484178c8ac3";

// // Set up the path to the folder containing the images

// export const storeIPFS = async (fileNames) => {
//   const formData = new FormData();

//   const folderPath = path.join(
//     process.cwd(),
//     "public",
//     "output",
//     "generatedNFTs"
//   );

//   for (const fileName of fileNames) {
//     console.log(fileName, "what is filenamer here: 🔥🔥🔥");
//     const filePath = path.join(folderPath, fileName);
//     console.log(filePath, "what is in filePath?");
//     // Read the image file into a buffer
//     const imageBuffer = fs.readFileSync(filePath);
//     // Upload the image to Pinata
//     console.log("axios posting 📧");
//     const response = await axios.post(
//       "https://api.pinata.cloud/pinning/pinFileToIPFS",
//       imageBuffer,
//       {
//         headers: {
//           "Content-Type": "image/png",
//           pinata_api_key: API_KEY,
//           pinata_secret_api_key: SECRET_API_KEY
//         }
//       }
//     );
//     const { IpfsHash } = response.data;
//     console.log(`Image ${fileName} uploaded to Pinata with CID: ${IpfsHash}`);
//   }
// };

// ------

// const axios = require("axios");
// const FormData = require("form-data");
// const fs = require("fs");
// const path = require("path");

// const JWT =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkYWM1ODMxMy03ZWY4LTRlYWMtOTk4ZS01ZTVkMjA5ZTFhMjgiLCJlbWFpbCI6Implc3N5dGhlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJjMTFhMDQwNjlkYTUwMmEwYmM4NyIsInNjb3BlZEtleVNlY3JldCI6ImI3ZTMxNDE4MWNkYjE3ZTUwOGNiNmMxM2FmNDliMjg4ZGJmMDUzZGY1NzMyMmViM2Q4MzM2MWZlNzk4Mjc2OTAiLCJpYXQiOjE2ODEzMzM3NDJ9.3BayCTde06E5lFjWKKQAc4B_KtwR7rIjaODNeqbA7Ho";

// const folderPath = path.join(
//   process.cwd(),
//   "public",
//   "output",
//   "generatedNFTs"
// );

// export const storeIPFS = async () => {
//   try {
//     // Iterate over all files in the folder
//     const fileNames = fs.readdirSync(folderPath);
//     for (const fileName of fileNames) {
//       // Check if file is a PNG
//       if (!fileName.endsWith(".png")) {
//         continue;
//       }
//       const filePath = path.join(folderPath, fileName);
//       // Read the file into a buffer
//       const file = fs.createReadStream(filePath);
//       // Create a new FormData object
//       const formData = new FormData();
//       formData.append("file", file);
//       const metadata = JSON.stringify({
//         name: fileName,
//         keyvalues: { folder: "GeneratedNFTs" }
//       });
//       formData.append("pinataMetadata", metadata);
//       const options = JSON.stringify({
//         cidVersion: 0,
//         wrapWithDirectory: true,
//         customPinPolicy: {
//           regions: [{ id: "FRA1", desiredReplicationCount: 2 }]
//         },
//         pinName: fileName
//       });
//       formData.append("pinataOptions", options);
//       // Send the file to Pinata
//       const res = await axios.post(
//         "https://api.pinata.cloud/pinning/pinFileToIPFS",
//         formData,
//         {
//           maxBodyLength: "Infinity",
//           headers: {
//             "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
//             Authorization: JWT
//           }
//         }
//       );
//       console.log(
//         `File ${fileName} uploaded to Pinata with CID: ${res.data.IpfsHash}`
//       );
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const axios = require("axios");
// const fs = require("fs");
// const path = require("path");
// const FormData = require("form-data");

// const JWT =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkYWM1ODMxMy03ZWY4LTRlYWMtOTk4ZS01ZTVkMjA5ZTFhMjgiLCJlbWFpbCI6Implc3N5dGhlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJjMTFhMDQwNjlkYTUwMmEwYmM4NyIsInNjb3BlZEtleVNlY3JldCI6ImI3ZTMxNDE4MWNkYjE3ZTUwOGNiNmMxM2FmNDliMjg4ZGJmMDUzZGY1NzMyMmViM2Q4MzM2MWZlNzk4Mjc2OTAiLCJpYXQiOjE2ODEzMzM3NDJ9.3BayCTde06E5lFjWKKQAc4B_KtwR7rIjaODNeqbA7Ho";

// export const storeIPFS = async () => {
//   try {
//     // Create folder on Pinata
//     const folderMetadata = JSON.stringify({
//       name: "GeneratedNFTs",
//       keyvalues: { type: "folder" }
//     });
//     const folderOptions = JSON.stringify({
//       pinName: "GeneratedNFTs",
//       customPinPolicy: {
//         regions: [{ id: "FRA1", desiredReplicationCount: 2 }]
//       }
//     });
//     const folderFormData = new FormData();
//     folderFormData.append("pinataMetadata", folderMetadata);
//     folderFormData.append("pinataOptions", folderOptions);
//     const folderRes = await axios.post(
//       "https://api.pinata.cloud/pinning/pinJSONToIPFS",
//       folderFormData,
//       {
//         maxBodyLength: "Infinity",
//         headers: {
//           "Content-Type": `multipart/form-data; boundary=${folderFormData._boundary}`,
//           Authorization: JWT
//         }
//       }
//     );
//     console.log(
//       `Folder GeneratedNFTs created on Pinata with CID: ${folderRes.data.IpfsHash}`
//     );

//     // Iterate over all files in the folder
//     const fileNames = fs.readdirSync(folderPath);
//     for (const fileName of fileNames) {
//       // Check if file is a PNG
//       if (!fileName.endsWith(".png")) {
//         continue;
//       }
//       const filePath = path.join(folderPath, fileName);
//       // Read the file into a buffer
//       const file = fs.createReadStream(filePath);
//       // Create a new FormData object
//       const formData = new FormData();
//       formData.append("file", file);
//       const metadata = JSON.stringify({
//         name: fileName,
//         keyvalues: { folder: "GeneratedNFTs" }
//       });
//       formData.append("pinataMetadata", metadata);
//       const options = JSON.stringify({
//         cidVersion: 0,
//         wrapWithDirectory: false,
//         pinName: fileName
//       });
//       formData.append("pinataOptions", options);
//       // Send the file to Pinata
//       const res = await axios.post(
//         "https://api.pinata.cloud/pinning/pinFileToIPFS",
//         formData,
//         {
//           maxBodyLength: "Infinity",
//           headers: {
//             "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
//             Authorization: JWT
//           }
//         }
//       );
//       console.log(
//         `File ${fileName} uploaded to Pinata in GeneratedNFTs folder with CID: ${res.data.IpfsHash}`
//       );
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// console.log("STORING IN IPFS");
// //   const folderPath = "public/output/generatedNFTs";
// //   const files = fs.readdirSync(folderPath);
// //   console.log(files, "what is in files here? ");

// //   for (const file of files) {
// //     const filePath = `${folderPath}/${file}`;
// //     const readableStreamForFile = fs.createReadStream(filePath);
// //     const options = {
// //       pinataMetadata: {
// //         name: "Moomoo",
// //         keyvalues: {
// //           folder: "NFTsFolder"
// //         }
// //       },
// //       pinataOptions: {
// //         cidVersion: 0,
// //         wrapWithDirectory: true,
// //         customPinPolicy: {
// //           regions: [{ id: "FRA1", desiredReplicationCount: 2 }]
// //         },
// //         pinName: file
// //       }
// //     };

// //     try {
// //       const result = await pinata.pinFileToIPFS(readableStreamForFile, options);
// //       console.log("🌸 RESULT 🌸", result);
// //     } catch (err) {
// //       //handle error here
// //       console.log("🧐ERROR🧐", err);
// //     }
// //   }
// // };
