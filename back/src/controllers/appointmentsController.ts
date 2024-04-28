import { Request, Response } from "express";
import {
  createAppointmentService,
  deleteAppointmentService,
  getAppointmentIdService,
  getAppointmentsService,
} from "../services/appointmetsService";

export const getAppointmentsController = async (
  req: Request,
  res: Response
) => {
  try {
    const appointments = await getAppointmentsService();
    res.status(201).json(appointments);
  } catch (err) {
    res.status(401).json({ error: "Algo salió mal" });
    res.send(err);
  }
};

export const getAppointmentIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = parseInt(req.params.id);
    const appointmentId = await getAppointmentIdService(id);
    res.status(201).json(appointmentId);
  } catch (err) {
    res.status(401).json({ error: "Algo salió mal..." });
    res.send(err);
  }
};

export const postAppointmentController = async (
  req: Request,
  res: Response
) => {
  try {
    const { date, time, userId, status } = req.body;
    const newAppointment = await createAppointmentService({
      date,
      time,
      userId,
      status,
    });
    res.status(401).json(newAppointment);
  } catch (err) {
    res.status(401).json({ error: "Algo salió mal..." });
    res.send(err);
  }
};

export const deleteAppointmentController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.body;
    const deletedAppointment = await deleteAppointmentService(id);
    if (!deletedAppointment) {
      res.status(401).json({ message: "Turno no encontrado." });
    } else {
      res.status(201).json(deletedAppointment);
    }
  } catch (err) {
    res.status(500).json({ error: "Algo malio sal..." });
    res.send(err);
  }
};
