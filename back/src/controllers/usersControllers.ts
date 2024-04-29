import { Request, Response } from "express";
import {
  createUserService,
  getUserIdService,
  getUsersService,
} from "../services/userService";
import {
  createCredentialService,
  loginCredentialService,
} from "../services/credentialService";
import { error } from "console";

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const usersArr = await getUsersService();
    res.status(200).json(usersArr);
    //* Traemos el array completo de usuarios.
  } catch (err) {
    res.status(500).send(err);
    //* Sí hay un error devolvemos un json con el mensaje de error
  }
};

export const getUserIdController = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    //* Convertimos el parametro que viene en /:id en un número con parseInt(), así cumple con la interfaz,
    const users = await getUserIdService(id);
    res.status(201).json(users);
    //* Devolvemos el usuario con la id que se especifica en la petición en el apartado de /:id
  } catch (err) {
    res.status(401).json({ error: "Algo salió mal..." });
    //* Sí algo sale mal enviamos un error.
  }
};

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const { username, password, name, email, birthdate, nDni } = req.body;
    const newUser = await createUserService({
      username,
      password,
      name,
      email,
      birthdate,
      nDni,
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(401).json(err);
  }
};

export const loginUserController = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const credentialValidator = await loginCredentialService({
      username,
      password,
    });

    res.status(201).json(credentialValidator);
  } catch (err) {
    res.status(401).json({ error: "Algo salió mal, muy mal..." });
  }
};
