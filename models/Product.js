import mongoose from "mongoose";

const { String, Number } = mongoose.Schema.Types;

const MedicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  morning: {
    type: Number,
    required: true,
  },
  afternoon: {
    type: Number,
    required: true,
  },
  night: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Medicine ||
  mongoose.model("Medicine", MedicineSchema);
