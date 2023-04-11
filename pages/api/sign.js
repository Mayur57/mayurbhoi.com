import mongoose, { Schema, model, models } from "mongoose";

const signSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
    },
    sign: String,
  },
  { timestamps: true }
);

const Sign = models.Sign || model("Sign", signSchema);

export default async function handler(req, res) {
  const { name, email } = req.body;
  if (req.method === "POST") {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      // eslint-disable-next-line no-unused-vars
      const result = Sign.create({
        email,
        name,
        sign: (req.body.sign || "").slice(0, 500),
      });
      return res.status(200).json("Success", result);
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  // Get method to get latest 50 messages from the mongodb
  if (req.method === "GET") {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      const result = await Sign.find().sort({ createdAt: 'descending' }).limit(50);
      console.log(result);
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  if (req.method === "DELETE") {
    // TODO: Implement later
    //! Use DB method to delete data
    // await queryBuilder
    //   .deleteFrom('guestbook')
    //   .where('id', '=', req.body.id)
    //   .where('email', '=', email)
    //   .execute();

    return res.status(204).json({});
  }

  return res.status(405).send("Method not allowed.");
}
