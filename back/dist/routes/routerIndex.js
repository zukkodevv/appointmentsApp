"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentsRouter_1 = __importDefault(require("./appointmentsRouter"));
//* Importamos el router de los appointments para poder poner a disponibilidad sus rutas luego.
const router = (0, express_1.Router)();
//* Creamos la instancia router propia de este archivo.
router.use("/appointments", appointmentsRouter_1.default);
//* le decimos a este router que use las rutas configuradas en appointmentsRouter y que todas comienzan con "/appointments"
exports.default = router;
//* Es importado luego en server.ts, userRouter.ts y appointmentsRouter.ts
