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
exports.deleteTurnService = exports.createAppointmentService = exports.getAppointmentsIdService = exports.getAppointmentsService = void 0;
let id = 1;
let appointments = [
    {
        id,
        date: "12-1-13",
        time: "12:13",
        userId: 1,
        status: "noActive",
    },
];
const getAppointmentsService = () => {
    return appointments;
};
exports.getAppointmentsService = getAppointmentsService;
const getAppointmentsIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    appointments = appointments.filter((appointment) => {
        return appointment.id === id;
    });
});
exports.getAppointmentsIdService = getAppointmentsIdService;
const createAppointmentService = (appointmentData) => __awaiter(void 0, void 0, void 0, function* () {
    const newAppointment = {
        id,
        date: "12-1-13",
        time: "12:13",
        userId: 1,
        status: "noActive",
    };
    id++;
    appointments.push(newAppointment);
    return newAppointment;
});
exports.createAppointmentService = createAppointmentService;
const deleteTurnService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    appointments = appointments.filter((appointment) => {
        return appointment.id !== id;
    });
});
exports.deleteTurnService = deleteTurnService;
