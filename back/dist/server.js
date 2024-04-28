"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//* Importamos el componente de express necesario para poder levantar un servidor
const morgan = require("morgan");
const routerIndex_1 = __importDefault(require("./routes/routerIndex"));
//* Importamos el router que se encargara del manejo de rutas desde el componente en rIndex.
const server = (0, express_1.default)();
//* Ponemos a disponibilidad de uso las funcionalidades de express creando una instancia del mismo declarada cómo constante server.
server.use(express_1.default.json());
//* Traducimos el contenido de la petición a .json con un middleware antes de pasarlo al manejador de rutas.
server.use(morgan("dev"));
server.use(routerIndex_1.default);
//* Se pasa al manejador de rutas, dónde dependiendo a que ruta haya sido la solicitud, seguira una lógica.
exports.default = server;
