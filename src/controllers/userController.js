import User from "../models/User.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(409).json({ message: "Username already taken" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    await User.create({
      username,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
