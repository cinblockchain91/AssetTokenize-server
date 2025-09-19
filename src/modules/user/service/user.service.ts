import { UserRepository } from "../repository/user.repository";
import { IUser } from "../model/user.model";

const userRepo = new UserRepository();

export const UserService = {
  getAll: async (): Promise<IUser[]> => {
    return userRepo.findAll();
  },

  getById: async (id: string): Promise<IUser | null> => {
    return userRepo.findById(id);
  },

  createUser: async (data: Partial<IUser>): Promise<IUser> => {
    return userRepo.create(data);
  },

  updateUser: async (
    id: string,
    data: Partial<IUser>
  ): Promise<IUser | null> => {
    return userRepo.updateById(id, data);
  },

  deleteUser: async (id: string): Promise<IUser | null> => {
    return userRepo.deleteById(id);
  },

  searchByName: async (keyword: string): Promise<IUser[]> => {
    return userRepo.findByNameKeyword(keyword);
  },

  getUsersByEmails: async (emails: string[]): Promise<IUser[]> => {
    return userRepo.findByEmailList(emails);
  },
// =========================================================

  p_inserUser: async (user: Partial<IUser>): Promise<IUser> => {
    return userRepo.p_insertUser(user);
  },

  p_insertUsers: async (users: Partial<IUser>[]) => {
    return userRepo.p_insertUsers(users);
  },

  p_findOne: async (email: string) => {
    return userRepo.p_findOne(email);
  }
};
