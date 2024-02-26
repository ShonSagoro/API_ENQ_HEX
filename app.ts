import express from 'express';
import { setupUserRoutes } from './src/UserManagement/Infraestructure/Routes/UserRoutes';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { setUpHotelRoutes } from './src/HotelManagement/Infraestructure/Routes/HotelRoutes';
import { setUpServicesRoutes } from './src/HotelManagement/Infraestructure/Routes/ServicesRoutes';
import path from 'path';
dotenv.config();

const app = express();


const HOST:string = process.env.HOST_SERVER || 'localhost';
const PORT:number  = Number(process.env.PORT_SERVER) || 8080;

app.use(express.static(path.join(__dirname, './public')));
app.use(express.json()); 
setupUserRoutes(app);
setUpHotelRoutes(app);
setUpServicesRoutes(app);
app.use(morgan('dev'))

app.listen(PORT, HOST, () => {
    console.log(`Server is running on host ${HOST} and port ${PORT}`);
});