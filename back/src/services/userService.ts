import UserDto from "../dtos/userDto";
import ICredential from "../interfaces/ICredential";
import IUser from "../interfaces/IUser";
import { createCredentialService, credentials } from "./credentialService";

let id: number = 1;

let users: IUser[] = [];
//* Creamos un array que almacenara todos los usuarios, cómo una base de datos temporal, su interface debe tener un [] delante para indicar que es un array.

export const getUsersService = async () => {
  return users;
  //* Devolvemos el array completo de usuarios.
};

export const getUserIdService = async (id: number) => {
  return users.find((user: IUser) => user.id === id);
  //* Devolvemos el único elemento del array que coincida con la id pasada cómo parametro.
};

export const createUserService = async (userData: UserDto) => {
  const newCredential = await createCredentialService({
    username: userData.username,
    password: userData.password,
  });
  //* Creamos la nueva credencial llamando al servicio de credenciales y pasandole el username y password cómo argumentos.

  const credentialFind = credentials.find(
    (credential: ICredential) => credential.username === userData.username
  );
  //* Encontramos el id de la credencial creada buscando en el array de credentials.

  const newUser = {
    id,
    name: userData.name,
    email: userData.email,
    birthdate: userData.birthdate,
    nDni: userData.nDni,
    credentialsId: credentialFind?.id,
  };
  id++;
  //* Creamos el usuario nuevo con toda la info de las credenciales que recopilamos y la id de la credencial nueva creada, además le aumentamos el id en 1 cada vez que se crea uno nuevo.

  users.push(newUser);
  //* Metemos el usuario nuevo en el array.
  
  return newUser;
};
