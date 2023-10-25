import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateUsersTable1698050881658 } from "./migration/1698050881658-create-users-table";
import { User } from "./models/User";
import { CreateTasksTable1698146272912 } from "./migration/1698146272912-create-tasks-table";
import { Tattoo_artist } from "./models/Tattoo_artists";
import { CreateTableQuotes1698243594398 } from "./migration/1698243594398-create-table-quotes";
import { CreateTableTattos1698244374586 } from "./migration/1698244374586-create-table-tattos";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "borjitA90?",
  database: "tatto",
  entities: [User, Tattoo_artist],
  migrations: [
    CreateUsersTable1698050881658,
    CreateTasksTable1698146272912,
    CreateTableQuotes1698243594398,
    CreateTableTattos1698244374586,
  ],
  synchronize: false,
  logging: false,
});

// export { AppDataSource }
