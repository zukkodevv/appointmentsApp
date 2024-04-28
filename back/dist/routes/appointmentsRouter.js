"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appointmentsController_1 = require("../controllers/appointmentsController");
//* Importamos todos los controladores de appointmentsControllers.ts
const express_1 = require("express");
//* Importamos el componente Router de Express para que Appointments tenga su propio componente de rutas.
const router = (0, express_1.Router)();
//* Creamos el router propio para estás rutas
// TIP: Cuándo en routerIndex ya esta definida una ruta por defecto, en este caso "/appointments", no hace falta redefinirla en el router de cada petición, ya que por defecto todas deben incluir la definida en el indexRouter al inicio, por ejemplo, aca el primer get sería a            "/appointments/"
router.get("/", appointmentsController_1.getAppointments);
//* Creamos la ruta que reciba peticiones get a "/appointments/"
router.get("/appointment", appointmentsController_1.getAppointment);
//* Creamos la ruta que reciba peticiones get a "/appointments/appointment"
router.post("/schedule", appointmentsController_1.postAppointment);
//* Creamos la ruta que reciba peticiones post a "/appointments/schedule"
router.put("/cancel", appointmentsController_1.deleteAppointment);
//* Creamos la ruta que reciba peticiones put a "/appointments/cancel"
exports.default = router;
//* Exportamos la ruta para después requerirla en routerIndex.ts y poder usar todas las rutas configuradas.
