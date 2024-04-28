//* Vamos a crar una interfaz para que pueda almacenar la estructura completa que debería tener un turno.

interface IAppointment {
  id: number;
  date: string;
  time: string;
  userId: number;
  status: string;
}

export default IAppointment;
