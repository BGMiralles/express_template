import { Request, Response } from "express";
import { User } from "../../models/User";

const deleteUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const userDeleted = await User.delete({
      id: parseInt(userId),
    });

    if(userDeleted.affected){
      return res.json(`The user with the ${userId} id has been successfully deleted`)
    }

    return res.json("The user has not been deleted");
  } catch (error) {
    return res.status(500).json(error)
  }
};

export { deleteUserById };
