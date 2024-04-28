//* Esta será una interfaz especifica para usar cómo parametro, ya que se omite el id (porque es creado manualmente), por eso es marcada cómo dto: Data Transfer Objecto.

interface UserDto {
  username: string;
  password: string;
  name: string;
  email: string;
  birthdate: string;
  nDni: number;
}

export default UserDto;
