import mongoose, { Schema, model, models } from "mongoose";

const signSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
    },
    sign: String,
    index: {
      type: Number,
      default: 999,
    },
  },
  { timestamps: true }
);

const Sign = models.Sign || model("Sign", signSchema);

export default async function handler(req, res) {
  const { name, email } = req.body;
  const payload = {
    email,
    name,
    sign: (req.body.sign || "").slice(0, 500),
  };
  if (req.method === "POST") {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      const result = Sign.create(payload);
      return res.status(200).json("Success", result);
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  if (req.method === "GET") {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      const result = await Sign.find()
        .sort({ createdAt: -1, index: -1 })
        .limit(100);
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  return res.status(405).send("Method not allowed.");
}
