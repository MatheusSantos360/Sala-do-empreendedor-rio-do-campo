import { InferSchemaType, model } from "mongoose";
import { adminsSchema } from "./admins";
import { categorySchema } from "./category";
import { cardSchema } from "./Card";

export const db = {
  admins: model("admin", adminsSchema, "admins"),
  categories: model("category", categorySchema, "categories"),
  cards: model("card", cardSchema, "cards"),
}

export type Admin = InferSchemaType<typeof adminsSchema>
export type Category = InferSchemaType<typeof categorySchema>
export type Card = InferSchemaType<typeof cardSchema>;
