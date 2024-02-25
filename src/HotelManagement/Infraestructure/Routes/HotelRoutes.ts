import { Express } from "express";
import JWTMiddleware from "../../../Middleware/JWTMiddlewre";
import dotenv from 'dotenv';
import { createHotelController, deleteHotelController, deleteHotelImagesController, deleteHotelRoomController, getByNameHotelController, getByUuidHotelController, listHotelController, listHotelImagesController, listHotelRoomController, registerHotelRoomController, updateHotelController } from "../dependencies";
dotenv.config();

const Verifytoken = JWTMiddleware.VerifyToken;
const MODEL_URL = "hotels";
const BASE_URL = process.env.BASE_URL || "/api/v1/";

export function setUpHotelRoutes(app: Express) {
    app.post(`${BASE_URL}${MODEL_URL}/create`, Verifytoken, createHotelController.excute.bind(createHotelController));
    app.delete(`${BASE_URL}${MODEL_URL}/:uuid`, Verifytoken, deleteHotelController.execute.bind(deleteHotelController));
    app.delete(`${BASE_URL}${MODEL_URL}/:uuid/img/:uuid_image`, Verifytoken, deleteHotelImagesController.execute.bind(deleteHotelImagesController));
    app.get(`${BASE_URL}${MODEL_URL}/:uuid/room/:number_room`, Verifytoken,)
    app.get(`${BASE_URL}${MODEL_URL}/:name`, Verifytoken, getByNameHotelController.execute.bind(getByNameHotelController));
    app.get(`${BASE_URL}${MODEL_URL}/:uuid`, Verifytoken, getByUuidHotelController.execute.bind(getByUuidHotelController));
    app.get(`${BASE_URL}${MODEL_URL}`, Verifytoken, listHotelController.execute.bind(listHotelController));
    app.get(`${BASE_URL}${MODEL_URL}/:uuid/images`, Verifytoken, listHotelImagesController.execute.bind(listHotelImagesController));
    app.get(`${BASE_URL}${MODEL_URL}/:uuid/rooms`, Verifytoken, listHotelRoomController.execute.bind(listHotelRoomController));
    app.post(`${BASE_URL}${MODEL_URL}/register_room`, Verifytoken, registerHotelRoomController.excute.bind(registerHotelRoomController));
    app.put(`${BASE_URL}${MODEL_URL}/:uuid`, Verifytoken, updateHotelController.execute.bind(updateHotelController));
}