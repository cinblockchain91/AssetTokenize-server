import { UserService } from './user.service';
import { UserRepository } from '../repository/user.repository';
import { IUser } from '../model/user.model';

// 👇 Mock toàn bộ UserRepository
jest.mock('../repository/user.repository');

const mockUserData: IUser[] = [
  { _id: '1', name: 'Nguyen Van A', email: 'a@example.com', password: '123456' } as IUser,
  { _id: '2', name: 'Tran Thi B', email: 'b@example.com', password: 'abcdef' } as IUser
];

// 👇 Tạo mock instance để can thiệp hành vi
const MockedUserRepository = UserRepository as jest.MockedClass<typeof UserRepository>;

describe('UserService (unit test)', () => {
  let userRepoMock: jest.Mocked<UserRepository>;

  beforeEach(() => {
    userRepoMock = new MockedUserRepository() as jest.Mocked<UserRepository>;

    // Gắn mock repo vào service thông qua trick ghi đè
    (UserService as any).__proto__.userRepo = userRepoMock;
  });

  it('should return all users', async () => {
    userRepoMock.findAll.mockResolvedValue(mockUserData);

    const result = await UserService.getAll();
    expect(result).toEqual(mockUserData);
    expect(userRepoMock.findAll).toHaveBeenCalled();
  });

  it('should return a user by id', async () => {
    userRepoMock.findById.mockResolvedValue(mockUserData[0]);

    const result = await UserService.getById('1');
    expect(result).toEqual(mockUserData[0]);
    expect(userRepoMock.findById).toHaveBeenCalledWith('1');
  });

  it('should create a new user', async () => {
    const newUser = {
      name: 'Le Thi C',
      email: 'c@example.com',
      password: 'xyz123'
    } as IUser;

    userRepoMock.create.mockResolvedValue(newUser);

    const result = await UserService.createUser(newUser);
    expect(result).toEqual(newUser);
    expect(userRepoMock.create).toHaveBeenCalledWith(newUser);
  });
});
