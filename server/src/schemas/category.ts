import { Schema } from "mongoose";

export const categorySchema = new Schema({
  title: { type: String, required: true },
  cards: [{ type: Schema.Types.ObjectId, ref: "card" }],
});
