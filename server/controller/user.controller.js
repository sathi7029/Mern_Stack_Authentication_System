import { User } from "../models/user.models.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
dotenv.config();

export const signUp = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const exitingUser = await User.findOne({ userName });
    if (exitingUser) res.status(400).json({ message: "user already exist" });
    let hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      userName,
      password: hashPassword,
    });
    await newUser.save();
    res.status(200).json({ message: "user signUp succesfully" });
  } catch (error) {
    res.status(400).json({ message: "user can not registered" });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });

    if (!user) res.status(400).json({ message: "user do not exist" });
    let isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user._id, userName: user.userName },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.status(200).json({ message: "user login sucessfully", token });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
