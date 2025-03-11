import { Schema } from "mongoose";

export const adminsSchema = new Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true }
})