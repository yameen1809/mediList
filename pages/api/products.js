//import products from "../../static/products.json";
import connectDb from "../../utils/connectDb";
import Medicine from "../../models/Product.js";

connectDb();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;
    case "PUT":
      await handlePutRequest(req, res);
      break;
  }
};

async function handleGetRequest(req, res) {
  const products = await Medicine.find();
  res.status(200).json(products);
}

async function handlePutRequest(req, res) {
  try {
    const { quantity, _id } = req.body;
    // console.log(quantity);
    await Medicine.findOneAndUpdate({ _id }, { quantity });
    res.status(203).send(`Works!`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error in creating product");
  }
}
