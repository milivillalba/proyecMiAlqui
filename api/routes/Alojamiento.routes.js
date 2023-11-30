import { Router } from "express";

 const routerAloj = Router();

import {
  CtrlAllIdAlojamiento,
  CtrlDeleteAlojamiento,
  CtrlGetAllAlojamiento,
  CtrlUpdateAlojamiento,
  CtrlCreateAlojamiento,
} from "../controllers/Alojamiento.Controll.js";

//administrar alojamiento

routerAloj.get("/api/alojamiento", CtrlGetAllAlojamiento);

routerAloj.get("/api/alojamiento/:id", CtrlAllIdAlojamiento);

//crear un alojamiento

routerAloj.post("/api/alojamiento", CtrlCreateAlojamiento);

routerAloj.delete("/api/alojamiento/:id", CtrlDeleteAlojamiento);

routerAloj.put("/api/alojamiento/:id", CtrlUpdateAlojamiento);

export{routerAloj};