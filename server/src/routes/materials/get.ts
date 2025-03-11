import { Category, db } from "../../schemas";
import { Handler } from "../../types/Handler";

const handler: Handler<Category[]> = async (request) => {
  try {
    const categories = await db.categories.find().populate("cards");

    console.log({ categories });
    return categories;
  } catch (error) {
    console.error("Error on categories query:", error);
    return [];
  }
}

export default handler;