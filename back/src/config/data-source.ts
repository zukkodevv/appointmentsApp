import { DataSource } from "typeorm";
import { Users } from "../entities/Users";
import { Appointments } from "../entities/Appointments";
import { Credentials } from "../entities/Credentials";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 3000,
  username: "postgres",
  password: "bridge971",
  database: "turnsappdatabase",
  synchronize: true,
  dropSchema: true,
  logging: true,
  entities: [Users, Credentials, Appointments],
  subscribers: [],
  migrations: [],
});
