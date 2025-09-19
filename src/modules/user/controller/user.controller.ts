import { Request, Response } from "express";
import { UserService } from "@modules/user/service/user.service";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await UserService.getAll();
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const user = await UserService.createUser({ name, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "Failed to create user", error });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const user = await UserService.getById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const updated = await UserService.updateUser(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: "User not found" });
  res.json(updated);
};

export const deleteUser = async (req: Request, res: Response) => {
  const deleted = await UserService.deleteUser(req.params.id);
  if (!deleted) return res.status(404).json({ message: "User not found" });
  res.json({ message: "User deleted" });
};

export const searchUserByName = async (req: Request, res: Response) => {
  const users = await UserService.searchByName(req.query.q as string);
  res.json(users);
};

export const getUsersByEmails = async (req: Request, res: Response) => {
  const emails = req.body.emails as string[];
  const users = await UserService.getUsersByEmails(emails);
  res.json(users);
};
// ============================================================

export const p_insertUser = async (req: Request, res: Response) => {
  const { email, name, password } = req.body;
  try {
    const user = await UserService.p_inserUser({ email, name, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "Failed to insert user", error });
  }
}

export const p_insertUsers = async (req: Request, res: Response) => {
  const users = req.body;
  try {
    const newUsers = await UserService.p_insertUsers(users);
    res.status(201).json(newUsers);
  } catch (error) {
    res.status(400).json({ message: "Failed to insert user", error });
  }
}

export const p_findOneUserByEmail = async (req: Request, res: Response) => {
  const email = req.params.email;
  try {
    const user = await UserService.p_findOne(email);
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ message: "Failed to find user with that email", error });
  }
}