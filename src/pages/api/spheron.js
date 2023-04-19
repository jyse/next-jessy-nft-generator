import { uploadToSpheron } from "../../../services/store-spheron";

export default async function handler(req, res) {
  if (req.method == "POST") {
    let result = await uploadToSpheron();
    res.status(200).json(result);
  }
}
