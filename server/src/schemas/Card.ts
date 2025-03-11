import { Schema } from "mongoose";

export const cardSchema = new Schema({
  title: { type: String, required: true },
  href: { type: String, required: true },
  image: {
    url: { type: String, required: true },
  },
  description: { type: String, required: true },
  badges: { type: [String], required: false },
});
