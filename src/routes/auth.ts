import { Router } from "express";
import { register, login } from "@/controllers/authController";
import { body } from "express-validator";

const router = Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Email is invalid"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 chars"),
  ],
  register
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Email is invalid"),
    body("password").exists().withMessage("Password is required"),
  ],
  login
);

export default router;
