import express from "express"
import { routerUsers } from "./routes/usersRouters";
import { AppDataSource } from "./routes/db";

const app = express();

const PORT = process.env.PORT || 4004;

app.use(express.json()) //middleware
app.use("/users", routerUsers);

AppDataSource.initialize()
.then(() => {
 console.log('Database connected');

 app.listen(PORT, () => {
   console.log(`Server running ${PORT}`);
 });
})
.catch(error => {
 console.log(error)
})
