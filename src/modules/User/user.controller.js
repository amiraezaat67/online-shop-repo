import { compareSync, hash, hashSync } from "bcrypt";
import User from "../../../DB/models/user.model.js";
import { Op } from "sequelize";

export const signUp = async (req, res) => {
  try {
    // data=> req.body , name , email , password , gender
    const { name, email, password, gender } = req.body;

    // Check if email already exists// findOne
    const isEmailExists = await User.findOne({ where: { email } }); // {} , null
    if (isEmailExists) {
      return res.json({ message: "Email already exists" });
    }

    // hashed password
    const cipher = hashSync(password, 10);

    // create user
    const user = await User.create({
      name,
      email,
      password: cipher,
      gender,
    });

    // send response
    res.json({ message: "User created", user });
  } catch (error) {
    console.log(error);
    res.json({ message: "Internal server error" });
  }
};

// Hashing Concept
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isUserExists = await User.findOne({
      where: {
        email,
      },
    });
    if (!isUserExists) {
      return res.json({ message: "Invalid credentials" });
    }

    // compare password
    const isPassValid = compareSync(password, isUserExists.password);
    if (!isPassValid) {
      return res.json({ message: "Invalid credentials" });
    }

    res.json({ message: "User logged in" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Internal server error" });
  }
};
