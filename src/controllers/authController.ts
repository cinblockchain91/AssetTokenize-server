import { Request, Response } from "express";
import * as authService from "@/services/authService";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;
    const user = await authService.registerUser(email, password, role);
    res.status(201).json({ message: "User created", user });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await authService.loginUser(email, password);
    res.json({ token, user });
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
};
