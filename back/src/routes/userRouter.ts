import { Router } from "express";
import {
  getUserIdController,
  getUsersController,
  loginUserController,
  registerUserController,
} from "../controllers/usersControllers";
//* Importamos el componente de Router de express para poder manejar rutas.

const router = Router();
//* Creamos la instancia de Router (que servira solo para users) y la llamaremos router, esta tendrá dentro todas las rutas configuradas y la exportaremos luego para decirle al server que pase la petición por acá (sí se usa la ruta, claro).

router.get("/", getUsersController);
//* Creamos la ruta que reciba peticiones get a "/users/" para traer el array de users.
router.get("/:id", getUserIdController);
//* Creamos la ruta que reciba peticiones get a "/users/:id" para traer un user especifico.
router.post("/register", registerUserController);
//* Creamos la ruta que reciba peticiones post a "/users/register" para registrar un usuario con sus credenciales.
router.post("/login", loginUserController);
//* Creamos la ruta que reciba peticiones post a "/users/login" para revisar sus credenciales y darle acceso.

export default router;
