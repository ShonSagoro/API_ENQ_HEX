import { Express } from "express";
import JWTMiddleware from "../../../Middleware/JWTMiddlewre";
import { activateUserController, deleteHotelValorationCase, deleteUserController, getByUuidController, getHotelValorationsByHotelController, getHotelValorationsByUserController, listUsersController, saveHotelValorationsCase, singInUserController, singOutUserCase, singOutUserController, singUpUserController, updateHotelValorationController, updateUserController } from "../dependecies";
import dotenv from 'dotenv';
dotenv.config();

const Verifytoken = JWTMiddleware.VerifyTokenTry;
const MODEL_URL = "valoration";
const BASE_URL = process.env.BASE_URL || "/api/v1/";

export function setupHotelValorationRoutes(app: Express) {
    app.delete(`${BASE_URL}${MODEL_URL}/:uuid`, Verifytoken, deleteHotelValorationCase.execute.bind(deleteHotelValorationCase));
    app.get(`${BASE_URL}${MODEL_URL}/hotel/:uuid`, Verifytoken, getHotelValorationsByHotelController.execute.bind(getHotelValorationsByHotelController));
    app.get(`${BASE_URL}${MODEL_URL}/user/:uuid`, Verifytoken, getHotelValorationsByUserController.execute.bind(getHotelValorationsByUserController));
    app.post(`${BASE_URL}${MODEL_URL}/`, Verifytoken, saveHotelValorationsCase.execute.bind(saveHotelValorationsCase));
    app.put(`${BASE_URL}${MODEL_URL}/:uuid`, Verifytoken, updateHotelValorationController.execute.bind(updateHotelValorationController));
}