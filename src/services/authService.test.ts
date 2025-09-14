// src/services/__tests__/authService.test.ts

import { isValidPassword } from "./authService";

describe("isValidPassword", () => {
  it("should return true for password length >= 8", () => {
    expect(isValidPassword("12345678")).toBe(true);
  });

  it("should return false for password length < 8", () => {
    expect(isValidPassword("123")).toBe(false);
  });
});
