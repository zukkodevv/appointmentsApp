"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAppointment = exports.postAppointment = exports.getAppointment = exports.getAppointments = void 0;
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(201).json({ message: "En el futuro se verán todos los turnos." });
});
exports.getAppointments = getAppointments;
const getAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res
        .status(201)
        .json({ message: "En el futuro podra ver un turno especifico" });
});
exports.getAppointment = getAppointment;
const postAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(201).json({ message: "En el futuro se podrán publicar turnos" });
});
exports.postAppointment = postAppointment;
const deleteAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(201).json({ message: "En el futuro se podra eliminar turnos" });
});
exports.deleteAppointment = deleteAppointment;
