import { Router } from "express";
import { getUsers, getUsersbyId } from "../controllers/get/getUsersController";
import { deleteUserById } from "../controllers/delete/deleteUsersController";
import { register, login } from "../controllers/post/postUsersController";
import { updateUserById } from "../controllers/put/putUsersController";
import { profile } from "../controllers/get/getUsersController";

const routerUsers = Router();

routerUsers.get("/", getUsers);
routerUsers.post("/register", register);
routerUsers.post("/login", login);
routerUsers.get("/profile", profile)
routerUsers.put("/:id", updateUserById);
routerUsers.delete("/:id", deleteUserById);
routerUsers.get("/:id", getUsersbyId)

export { routerUsers };
