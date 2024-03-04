import User from "../models/user.model.js";
import bcyptjs from "bcryptjs";

export const signup = async (req, res) => {
  console.log(req.body);
  try {
    let { username, email, password } = req.body;
    const hashedpassword = bcyptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedpassword });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
};
