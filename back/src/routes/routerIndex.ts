import { Router } from "express";
import appointmentsRouter from "./appointmentsRouter";
//* Importamos el router de los appointments para poder poner a disponibilidad sus rutas luego.
import userRouter from "./userRouter";

const router: Router = Router();
//* Creamos la instancia router propia de este archivo.

router.use("/appointments", appointmentsRouter);
//* le decimos a este router que use las rutas configuradas en appointmentsRouter y que todas comienzan con "/appointments"

router.use("/users", userRouter);

export default router;
//* Es importado luego en server.ts, userRouter.ts y appointmentsRouter.ts
