import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "@/config/database";

import authRoutes from "@/routes/auth";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
