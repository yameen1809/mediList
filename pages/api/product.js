import Medicine from "../../models/Product";
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;
    case "DELETE":
      await handleDeleteRequest(req, res);
      break;
    case "POST":
      await handlePostRequest(req, res);
      break;
    case "PUT":
      await handlePutRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

async function handleGetRequest(req, res) {
  const { _id } = req.query;
  const product = await Medicine.findOne({ _id: _id });
  res.status(200).json(product);
}

async function handleDeleteRequest(req, res) {
  const { _id } = req.query;
  await Medicine.findOneAndDelete({ _id: _id });
  res.status(204).json({});
}

async function handlePostRequest(req, res) {
  try {
    const { name, quantity, morning, afternoon, night } = req.body;
    if (!name || !quantity || !morning || !afternoon || !night) {
      return res.status(422).send("Product missing one or more fields");
    }
    const product = new Medicine({
      name,
      quantity,
      morning,
      afternoon,
      night,
    }).save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error in creating product");
  }
}

async function handlePutRequest(req, res) {
  const { _id, name, quantity, morning, afternoon, night } = req.body;
  if (!name || !quantity || !morning || !afternoon || !night) {
    return res.status(422).send("Product missing one or more fields");
  }

  await Medicine.findOneAndUpdate(
    { _id },
    { name, quantity, morning, afternoon, night }
  );
  res.status(203).send(`Works ${_id}`);
}

// export default async (req, res) => {
//   const { _id } = req.query;
//   const product = await Medicine.findOne({ _id: _id });
//   res.status(200).json(product);
// };
// //
