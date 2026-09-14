import type { Request, Response } from "express";
import { loginUser } from "../services/auth.service.js";

export const loginController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);

    res.status(200).json(result);
  } catch {
    res.status(401).json({
      message: "Credenciales inválidas",
    });
  }
};
