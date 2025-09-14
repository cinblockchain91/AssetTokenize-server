import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "@/models/User";

const JWT_SECRET = process.env.JWT_SECRET || "song_o_day_song";

export const registerUser = async (
  email: string,
  password: string,
  role: string
) => {
  const existing = await UserModel.findOne({ email });
  if (existing) throw new Error("Email already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new UserModel({ email, password: hashedPassword, role });
  await user.save();

  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await UserModel.findOne({ email });
  if (!user) throw new Error("Invalid email or password");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid email or password");

  const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
    expiresIn: "1d",
  });

  return { token, user };
};
