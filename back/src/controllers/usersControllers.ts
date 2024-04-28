import { Request, Response } from "express";
import {
  createUserService,
  getUserIdService,
  getUsersService,
} from "../services/userService";
import { createCredentialService } from "../services/credentialService";
import { error } from "console";

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const usersArr = await getUsersService();
    res.status(201).json(usersArr);
    //* Traemos el array completo de usuarios.
  } catch (err) {
    res.status(401).json({ error: "Me la estoy pasando bien raro" });
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

export const registerUserController = (req: Request, res: Response) => {
  res
    .status(201)
    .json({ message: "Próximamente, tú usuario en nuestro servidor!" });
};

export const loginUserController = async (req: Request, res: Response) => {
  try {
    const { username, password, name, email, birthdate, nDni } = req.body;
    const createUser = await createUserService({
      username,
      password,
      name,
      email,
      birthdate,
      nDni,
    });

    res.status(201).json(createUser);
  } catch (err) {
    res.status(401).json({ error: "Algo salió mal, muy mal..." });
  }
};
