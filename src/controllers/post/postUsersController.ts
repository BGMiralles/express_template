import { Request, Response } from "express";

const createUser = (req: Request, res: Response) => {
    console.log(req.body);
    return res.send("CREATE USER");
  };

export {createUser}