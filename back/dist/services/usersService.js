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
exports.getUserIdService = exports.getUsersService = void 0;
let users = [
    {
        id: 1,
        name: "mario",
        email: "mariocontreras@mail.com",
        birthdate: "12/12/12",
        nDni: 121212,
        crentialsId: 12,
    },
    {
        id: 2,
        name: "kriki",
        email: "krikiriki@mail.com",
        birthdate: "1/1/-1",
        nDni: 392832,
        crentialsId: 20,
    },
    {
        id: 3,
        name: "user",
        email: "definetlynotahacker@mail.com",
        birthdate: "1/2/9999",
        nDni: 99999,
        crentialsId: 99,
    },
];
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    return users;
});
exports.getUsersService = getUsersService;
const getUserIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    users = users.filter((user) => {
        return user.id === id;
    });
});
exports.getUserIdService = getUserIdService;
