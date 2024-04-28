//* Interfaz para la credencial que contendra el user y password de login del usuario, además de su id.

interface ICredential {
  id: number;
  username: string;
  password: string;
}

export default ICredential;
