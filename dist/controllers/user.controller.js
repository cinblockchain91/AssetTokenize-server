"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const getAllUsers = async (req, res) => {
    return res.json({ users: ["User1", "User2"] });
};
exports.getAllUsers = getAllUsers;
