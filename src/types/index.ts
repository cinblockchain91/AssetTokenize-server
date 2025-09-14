export interface IUser {
  email: string;
  password: string;
  role: "admin" | "investor" | "issuer";
  isVerified: boolean;
}
