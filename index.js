import express from "express";
import dotenv from 'dotenv';
import emailRoutes from './router/emailRouter.js'


//Abrimos el servidor
const app = express();
app.use(express.json());

//Configuramos las variables de entorno
dotenv.config();


app.use('/api/emails', emailRoutes);
const PORT = process.env.PORT || 4000;

const servidor = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})