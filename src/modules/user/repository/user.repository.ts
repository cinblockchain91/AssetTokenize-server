import { UserModel, IUser } from '../model/user.model';

export class UserRepository {
  async findAll(): Promise<IUser[]> {
    return UserModel.find();
  }

  async findById(id: string): Promise<IUser | null> {
    return UserModel.findById(id);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return UserModel.findOne({ email });
  }

  async create(user: Partial<IUser>): Promise<IUser> {
    return UserModel.create(user);
  }

  async updateById(id: string, data: Partial<IUser>): Promise<IUser | null> {
    return UserModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteById(id: string): Promise<IUser | null> {
    return UserModel.findByIdAndDelete(id);
  }

  async findByNameKeyword(keyword: string): Promise<IUser[]> {
    return UserModel.find({ name: { $regex: keyword, $options: 'i' } });
  }

  async findByEmailList(emails: string[]): Promise<IUser[]> {
    return UserModel.find({ email: { $in: emails } });
  }
// ===================================================

  async p_insertUser(user: Partial<IUser>): Promise<IUser> {
    return UserModel.insertOne({
      ...user,
    });
  }

  async p_insertUsers(users: Partial<IUser>[]) {
    return UserModel.insertMany([...users]);
  }

  async p_findOne(email: string): Promise<IUser | null> {
    return UserModel.findOne({ email });
  }
}
