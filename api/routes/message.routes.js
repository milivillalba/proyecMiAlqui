import { Router } from "express";
import { obtenerMensajes } from "../controllers/message.controller.js";

const messageRouter = Router();

messageRouter.get('/api/messages', obtenerMensajes)


export {messageRouter};