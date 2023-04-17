import { createContract } from "../../../services/create-contract";

export default async function handler(req, res) {
  if (req.body.create) {
    let contractAddress = await createContract(req.body.create);
    res.status(200).json({ contractAddress: contractAddress });
  }
}
