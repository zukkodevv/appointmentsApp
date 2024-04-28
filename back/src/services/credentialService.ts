import ICredential from "../interfaces/ICredential";
import CredentialDto from "../dtos/CredentialDto";

export let credentials: ICredential[] = [];
//* Creamos un array que funciona como base de datos temporal.

let id = 1;
//* Creamos un id manual para asignarselo a las credenciales.

export const createCredentialService = async (
  credentialData: CredentialDto
) => {
  const newCredential: ICredential = {
    id,
    username: credentialData.username,
    password: credentialData.password,
  };
  //* Le asisgnamos los valores de la nueva credencial cómo los pasados cómo parametros, y luego los almacenamos en la constante newCredential.
  id++;
  //* Le aumentamos 1 a cada id creado.
  credentials.push(newCredential);
  //* Metemos la credencial nueva al array de credenciales.
  return newCredential.id;
  //* Devolvemos el id del credencial creada.
};

export const loginCredentialService = async (credentialData: CredentialDto) => {
  const findCredential = credentials.find(
    (credential) => (credential.password = credentialData.password)
  );
  //* Hacemos una función para poder encontrar una credencial con la misma contraseña dentro del array.
  return findCredential?.id;
  //* Devolvemos el id del array encontrado.
};
