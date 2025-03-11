import { Admin, db } from "../../../schemas";
import { Handler } from "../../../types/Handler";

type Body = { success: boolean; admin?: Admin };

const handler: Handler<Body> = async (request) => {
  const { password } = request.body as { password: string };
  const admin = await db.admins.findOne({ password });

  if (password === admin?.password) {
    return { success: true, admin };
  }

  return { success: false };
}

export default handler;