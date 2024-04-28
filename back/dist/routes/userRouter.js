"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routerIndex_1 = __importDefault(require("./routerIndex"));
//* Importamos el componente para el manejo de rutas de express instanciado en la constante router para empezar a gestionar el manejo de las rutas.
routerIndex_1.default.get("/");
//* Creamos la ruta que reciba peticiones get a "/users/"
routerIndex_1.default.get("/:id");
//* Creamos la ruta que reciba peticiones get a "/appointments/:id"
routerIndex_1.default.post("/users/register");
//* Creamos la ruta que reciba peticiones get a "/appointments/"
routerIndex_1.default.post("/users/login");
//* Creamos la ruta que reciba peticiones get a "/appointments/"
