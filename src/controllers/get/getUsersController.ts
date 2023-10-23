import { Request, Response } from "express";
import { User } from "../../models/User";

const getUsers = async(req: Request, res: Response) => {
  const users = await User.find();

  return res.send(users);
};

const getUsersbyId = (req: Request, res: Response) => {
    const usersId = req.params.id;
  
    return res.send(`Get film id${usersId}`);
  };

export {getUsers, getUsersbyId}