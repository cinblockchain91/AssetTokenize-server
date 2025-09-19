import { Router } from "express";
import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  searchUserByName,
  getUsersByEmails,
  p_insertUser,
  p_insertUsers,
  p_findOneUserByEmail
} from "@modules/user/controller/user.controller";

const userRoutes = Router();

userRoutes.get('/', getAllUsers);
userRoutes.post('/', createUser);
userRoutes.get('/:id', getUserById);
userRoutes.put('/:id', updateUser);
userRoutes.delete('/:id', deleteUser);
userRoutes.get('/search/name', searchUserByName);
userRoutes.post('/search/emails', getUsersByEmails);
// ==============================

userRoutes.post('/p_insert', p_insertUser);
userRoutes.post('/p_inserts', p_insertUsers);
userRoutes.get('/p_findbyemail', p_findOneUserByEmail)

export default userRoutes;