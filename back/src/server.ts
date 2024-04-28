import express from "express";
//* Importamos el componente de express necesario para poder levantar un servidor

const morgan = require("morgan");

import router from "./routes/routerIndex";
//* Importamos el router que se encargara del manejo de rutas desde el componente en rIndex.

const server = express();
//* Ponemos a disponibilidad de uso las funcionalidades de express creando una instancia del mismo declarada cómo constante server.

server.use(express.json());
//* Traducimos el contenido de la petición a .json con un middleware antes de pasarlo al manejador de rutas.

server.use(morgan("dev"));

server.use(router);
//* Se pasa al manejador de rutas, dónde dependiendo a que ruta haya sido la solicitud, seguira una lógica.

export default server;
