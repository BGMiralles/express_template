import { Request, Response } from "express";
import { User } from "../../models/User";

const getUsers = async(req: Request, res: Response) => {
  try {
    const users = await User.find();

    return res.json(users);
  } catch (error) {
    return res.json(error);
  }
};

const getUsersbyId = (req: Request, res: Response) => {
    const usersId = req.params.id;
  
    return res.json(`Get user id${usersId}`);
  };

  const profile = (req: Request, res: Response) => {
    try {
      
    } catch (error) {
      return res.status(500).json(error);
    }
    }

export {getUsers, getUsersbyId, profile}