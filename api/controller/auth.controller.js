import User from "../models/user.model.js";
import bcyptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  // console.log(req.body);
  let { username, email, password } = req.body;
  const hashedpassword = bcyptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedpassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User is Created Succesfully" });
    //console.log(`${username} account is created`);
  } catch (error) {
    next(error);
  }
};
