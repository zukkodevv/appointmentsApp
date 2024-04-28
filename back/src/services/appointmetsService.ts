import AppointmentDto from "../dtos/AppointmentDto";
import IAppointment from "../interfaces/IAppointment";

let appointments: IAppointment[] = [];

let id = 1;

export const getAppointmentsService = async () => {
  return appointments;
};

export const getAppointmentIdService = async (id: number) => {
  return appointments.find(
    (appointment: IAppointment) => appointment.id === id
  );
};

export const createAppointmentService = async (
  appointmentData: AppointmentDto
) => {
  const newAppointment: IAppointment = {
    id,
    date: appointmentData.date,
    time: appointmentData.time,
    userId: appointmentData.userId,
    status: appointmentData.status,
  };
  //* Guardamos todos los valores que vienen en el parametro appointmentData para luego guardarlos en el array.
  id++;
  //* Aumentamos en 1 el id cada vez que se crea un nuevo turno.
  appointments.push(newAppointment);
  //* Metemos el turno creado dentro del array de turnos.
  return newAppointment;
  //* Devolvemos el array creado.
};

export const deleteAppointmentService = async (id: number) => {
  const cancelledAppointment = appointments.findIndex(
    (appointment: IAppointment) => appointment.id === id
  );
  if (cancelledAppointment === -1) {
    return null;
  }
  appointments[cancelledAppointment].status = "cancelled";
  return appointments[cancelledAppointment];
};
