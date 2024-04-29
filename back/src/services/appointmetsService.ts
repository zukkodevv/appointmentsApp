import { AppointmentsModel, UserModel } from "../config/data-source";
import AppointmentDto from "../dtos/AppointmentDto";
import { Appointments } from "../entities/Appointments";

export const getAppointmentsService = async () => {
  const appointments = await AppointmentsModel.find({
    relations: {
      user: true,
    },
    //* Indicamos que debe encuentre turnos y que visibilice la información de su relación user.
  });
  return appointments;
  //* Devolvemos la constante dónde configuramos todo lo anterior.
};

export const getAppointmentIdService = async (id: number) => {
  const appointments: Appointments | null = await AppointmentsModel.findOneBy({
    id,
  });
  //* Indicamos que debe encontrar el turno que concuerde con la id que se paso cómo parametro.
  return appointments;
  //* Devolvemos el turno que haya encontrado.
};

export const createAppointmentService = async (
  appointmentData: AppointmentDto
) => {
  const newAppointment = await AppointmentsModel.create(appointmentData);
  //* Decimos que cree un nuevo turno con los datos que vienen cómo parametro de la función.
  const appointmentResult = await AppointmentsModel.save(newAppointment);
  //* Decimos que guarde el nuevo turno creado anteriormente.

  const user = await UserModel.findOneBy({ id: appointmentData.userId });

  if (user) {
    newAppointment.user === user;
    AppointmentsModel.save(user);
  }

  return newAppointment;
  //* Devolvemos el turno que se creo y guardó.
};

export const deleteAppointmentService = async (id: number) => {
  const appointment = await AppointmentsModel.findOneBy({ id });
  //* Encontramos el turno a eliminar
  const deletedAppointment = await AppointmentsModel.remove(appointment);
  //* Lo eliminamos efectivamente
};
