import { NextFunction, Request, Response } from "express";


const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (req.token.role !== "admin" && req.token.role !== "super_admin") {
      return res.json("NO PUEDES PASAR");
    }
  
    next();
  };

export { isAdmin }