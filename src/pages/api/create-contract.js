import { createContract } from "../../../services/create-contract";

export default async function handler(req, res) {
  if (req.body.create) {
    let contractDetails = await createContract(req.body.create);
    console.log("🐸🐸🐸CONTRACT ADDRESS IS: ", contractDetails);
    res.status(200).json(contractDetails);
  }
}
