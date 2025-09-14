import mongoose from "mongoose";
import { IUser } from "@/types";

const userSchema = new mongoose.Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "investor", "issuer"],
    default: "investor",
  },
  isVerified: { type: Boolean, default: false },
});

const UserModel = mongoose.model<IUser>("User", userSchema);

export default UserModel;
