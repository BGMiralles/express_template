import "reflect-metadata";
import { DataSource } from "typeorm";
import 'dotenv/config'
import { CreateUsersTable1698050881658 } from "./migration/1698050881658-create-users-table";
import { User } from "./models/User";
import { CreateTasksTable1698146272912 } from "./migration/1698146272912-create-tasks-table";
import { Tattoo_artist } from "./models/Tattoo_artists";
import { CreateTableTattos1698244374586 } from "./migration/1698244374586-create-table-tattos";
import { CreateTableQuotes1698245752905 } from "./migration/1698245752905-create-table-quotes";
import { Tattoo } from "./models/Tattoo";
import { Appointment } from "./models/Appointment";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Tattoo_artist, Tattoo, Appointment],
  migrations: [
    CreateUsersTable1698050881658,
    CreateTasksTable1698146272912,
    CreateTableTattos1698244374586,
    CreateTableQuotes1698245752905
  ],
  synchronize: false,
  logging: false,
});

// export { AppDataSource }
