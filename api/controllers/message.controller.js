import { MessageModel } from "../models/message.models.js";

export const obtenerMensajes = async (req, res) => {
    const mensajes = await MessageModel.find().sort({ createdAt: 'desc' }).limit(30);
    return res.json({
        mensajes
    })
}