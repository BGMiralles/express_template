import { Request, Response } from "express";

const updateUserById = (req: Request, res: Response) => {
    const filmsId = req.params.id;
  
    return res.send("UPDATE USER " + filmsId);
  };

export {updateUserById}