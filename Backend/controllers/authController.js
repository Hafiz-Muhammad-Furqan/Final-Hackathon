// import { validationResult } from "express-validator";
import { registerUser, loginUser } from "../services/authService.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const { user, token } = await registerUser(username, email, password);
    res
      .status(201)
      .json({ message: "User registered successfully", user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  // if (!validationResult(req).isEmpty()) {
  //   return res.status(400).json({ errors: validationResult(req).array() });
  // }
  try {
    const { email, password } = req.body;
    const { user, token } = await loginUser(email, password);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserProfile = (req, res) => {
  res.status(200).json(req.user);
};
