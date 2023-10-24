import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../../models/User";
import bcrypt from "bcrypt";

const register = async (req: Request, res: Response) => {
  try {
    const { user_name, email, password } = req.body;
    const emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailTest.test(email)) {
      return res.status(400).json("You have entered an invalid email address.");
    }

    const encryptedPassword = bcrypt.hashSync(password, 10);

    const newUser = await User.create({
      user_name: user_name,
      email: email,
      password: encryptedPassword,
    }).save();

    return res.json(newUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOneBy({
      email: email,
    });

    if (!user) {
      return res.status(400).json("User or password incorrect");
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.json("User or password incorrect");
    }

    const token = jwt.sign(
      {
        id: user.id,
        rol: user.rol,
      },
      "secreto",
      {
        expiresIn: "3h",
      }
    );

    return res.json({
      success: true,
      message: "User logged succesfully",
      token: token,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export { register, login };
