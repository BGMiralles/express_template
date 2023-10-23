import { Request, Response } from "express";

const deleteUserById = (req: Request, res: Response) => {
    const userId = req.params.id;
  
    return res.send("DELETE FILM " + userId);
  };

export {deleteUserById}