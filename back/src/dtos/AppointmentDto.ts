//* Creamos un interfaz que va a saltearse el id del turno para poder usarlo exclusivamente cómo parametro en algunas funciones donde este será declarado manualmente.

interface AppointmentDto {
  date: string;
  time: string;
  userId: number;
  status: string;
}

export default AppointmentDto;
