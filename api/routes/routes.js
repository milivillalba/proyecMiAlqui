import express from "express";
import { routerAloj } from "./Alojamiento.routes.js";
import { authRouter } from "./auth.routes.js";
import { messageRouter } from "./message.routes.js";
import { userRouter } from "./user.routes.js";

const router = express();

router.use("/auth", authRouter)

router.use(routerAloj);

router.use(messageRouter);

router.use(userRouter);

export {router};