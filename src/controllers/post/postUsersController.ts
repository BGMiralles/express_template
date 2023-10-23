import { Request, Response } from "express";
import { User } from "../../models/User";
import bcrypt from "bcrypt";

const register = async(req: Request, res: Response) => {
  console.log(req.body);
  try {
    const {user_name, email, password} = req.body
    const encryptedPassword = bcrypt.hashSync(password, 10)
    
    const newUser = await User.create({
      user_name: user_name,
      email: email,
      password: encryptedPassword,
    }).save();

    return res.send(newUser);
  } catch (error) {
    return res.send(error);
  }
};

export {register}