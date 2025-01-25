import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const registerUser = async (username, email, password) => {
  const existingUser = await userModel.findOne({ email });
  if (existingUser) throw new Error("User already exists!");

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await userModel.create({
    username,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign(
    { id: newUser._id, email: newUser.email },
    process.env.JWT_SECRET
  );

  return { user: newUser, token };
};

export const loginUser = async (email, password) => {
  const user = await userModel.findOne({ email });
  if (!user) throw new Error("Invalid email or password");

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) throw new Error("Invalid email or password");

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET
  );

  return { user, token };
};
