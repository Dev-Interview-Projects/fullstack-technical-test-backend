import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getUserByEmail } from "./user.service.js";
import { config } from "../config/config.js";

export const loginUser = async (email: string, password: string) => {
  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error("Credenciales inválidas");
  }

  const passwordIsValid = await bcrypt.compare(password, user.passwordHash);

  if (!passwordIsValid) {
    throw new Error("Credenciales inválidas");
  }

  const token = jwt.sign(
    {
      userId: user.id,
      role: user.role,
    },
    config.jwtSecret,
    {
      expiresIn: "1h",
    },
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};
