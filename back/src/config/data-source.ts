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
  // dropSchema: true,
  logging: true,
  entities: [Users, Credentials, Appointments],
  subscribers: [],
  migrations: [],
});

export const UserModel = AppDataSource.getRepository(Users);
export const CredentialsModel = AppDataSource.getRepository(Credentials);
export const AppointmentsModel = AppDataSource.getRepository(Appointments);
