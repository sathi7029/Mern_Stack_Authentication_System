import { signUp, login } from "../controller/user.controller.js";
import express from "express";
const router = express.Router();

router.post("/register", signUp);
router.post("/login", login);

export default router;
