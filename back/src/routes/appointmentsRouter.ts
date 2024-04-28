import {
  deleteAppointmentController,
  getAppointmentsController,
  getAppointmentIdController,
  postAppointmentController,
} from "../controllers/appointmentsController";
//* Importamos todos los controladores de appointmentsControllers.ts

import { Router } from "express";
//* Importamos el componente Router de Express para que Appointments tenga su propio componente de rutas.

const router = Router();
//* Creamos el router propio para estás rutas

// TIP: Cuándo en routerIndex ya esta definida una ruta por defecto, en este caso "/appointments", no hace falta redefinirla en el router de cada petición, ya que por defecto todas deben incluir la definida en el indexRouter al inicio, por ejemplo, aca el primer get sería a            "/appointments/"

router.get("/", getAppointmentsController);
//* Creamos la ruta que reciba peticiones get a "/appointments/"
router.get("/:id", getAppointmentIdController);
//* Creamos la ruta que reciba peticiones get a "/appointments/appointment"
router.post("/schedule", postAppointmentController);
//* Creamos la ruta que reciba peticiones post a "/appointments/schedule"
router.put("/cancel", deleteAppointmentController);
//* Creamos la ruta que reciba peticiones put a "/appointments/cancel"

export default router;
//* Exportamos la ruta para después requerirla en routerIndex.ts y poder usar todas las rutas configuradas.
