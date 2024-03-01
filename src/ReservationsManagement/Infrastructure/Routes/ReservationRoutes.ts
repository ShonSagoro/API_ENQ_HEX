import { Express } from "express";
import JWTMiddleware from "../../../Middleware/JWTMiddlewre";
import dotenv from 'dotenv';
import { createReservationController, deleteReservationController, findAllByUUIDUserReservationController, findByUUIDReservationController, updateReservationController } from "../dependencies";
dotenv.config();

const Verifytoken = JWTMiddleware.VerifyTokenTry;
const MODEL_URL = "reservatios";
const BASE_URL = process.env.BASE_URL || "/api/v1/";

export function setupReservationRoutes(app: Express) {
    app.post(`${BASE_URL}${MODEL_URL}/`, Verifytoken, createReservationController.execute.bind(createReservationController));
    app.get(`${BASE_URL}${MODEL_URL}/user/:uuid`, Verifytoken, findAllByUUIDUserReservationController.execute.bind(findAllByUUIDUserReservationController));
    app.get(`${BASE_URL}${MODEL_URL}/:uuid`, Verifytoken, findByUUIDReservationController.execute.bind(findByUUIDReservationController));
    app.delete(`${BASE_URL}${MODEL_URL}/:uuid`, Verifytoken, deleteReservationController.execute.bind(deleteReservationController));
    app.put(`${BASE_URL}${MODEL_URL}/:uuid`, Verifytoken, updateReservationController.execute.bind(updateReservationController));
}