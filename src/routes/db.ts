import "reflect-metadata"
import { DataSource } from "typeorm"
import { User1697790013835 } from "../migration/1697790013835-user"
import { User } from "../models/User"

export const AppDataSource = new DataSource({
 type: "mysql",
 host: "localhost",
 port: 3306,
 username: "root",
 password: "borjitA90?",
 database: "project",
 entities: [User],
 migrations: [User1697790013835],
 synchronize: false,
 logging: false,
})
