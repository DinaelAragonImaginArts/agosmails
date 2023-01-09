import { envio } from '../utils/email.js';

export const emailSender = async (req, res) => {
    const datos = req.body;
    envio(datos);
}