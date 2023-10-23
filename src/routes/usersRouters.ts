import { Router } from "express";
import { getUsers, getUsersbyId } from "../controllers/get/getUsersController";
import { deleteUserById } from "../controllers/delete/deleteUsersController";
import { createUser } from "../controllers/post/postUsersController";
import { updateUserById } from "../controllers/put/putUsersController";

const routerUsers = Router();

routerUsers.get("/", getUsers);
routerUsers.post("/", createUser);
routerUsers.put("/:id", updateUserById);
routerUsers.delete("/:id", deleteUserById);
routerUsers.get("/:id", getUsersbyId)

export { routerUsers };
