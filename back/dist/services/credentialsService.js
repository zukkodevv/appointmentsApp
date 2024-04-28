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
exports.createCredentialService = void 0;
let id = 1;
const credentials = [{
        id,
        username: "pepito12",
        password: "12345",
    }];
console.log(credentials);
const createCredentialService = (credentialData) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = {
        id,
        username: credentialData.username,
        password: credentialData.password,
    };
    //* Indicamos que el username y password sean indicadas desde el parametro asignado, que ya esta asignado con la interface de CredentialDto(que excluye el id, ya que este es la variable id = 1).
    id++;
    //* Se le aumenta 1 al id, para así seguir una secuencia lineal de aumento; 1,2,3...
    return newCredential;
    //* Se devuelve la nueva credencial creada.
});
exports.createCredentialService = createCredentialService;
