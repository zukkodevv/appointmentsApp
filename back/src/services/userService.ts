import { CredentialsModel, UserModel } from "../config/data-source";
import UserDto from "../dtos/userDto";
import { Credentials } from "../entities/Credentials";
import { Users } from "../entities/Users";
import { createCredentialService } from "./credentialService";

export const getUsersService = async () => {
  const users: Users[] = await UserModel.find({
    relations: {
      credentials: true,
      UserAppointments: true,
    },
  });

  return users;
};

export const getUserIdService = async (id: number) => {
  const user: Users | null = await UserModel.findOneBy({ id });
  return user;
};

export const createUserService = async (userData: UserDto) => {
  const newUser = await UserModel.create(userData);
  //* Creamos un usuario nuevo con los datos que descompusimos anteriormente.
  await UserModel.save(newUser);
  //* Guardamos este nuevo usuario creado.

  const credentials = await createCredentialService(userData);
  //* Creamos una credencial al crear un usuario con el servicio para crear las credenciales.

  if (credentials) {
    newUser.credentials = credentials; // Asignar el ID de la credencial al usuario
    await UserModel.save(newUser); // Guardar el usuario
  }

  return newUser;
  //* Devolvemos el usuario nuevo creado.
};
