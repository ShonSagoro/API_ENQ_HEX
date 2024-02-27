import { Express } from "express";
import JWTMiddleware from "../../../Middleware/JWTMiddlewre";
import {createReservationController, deleteReservationController, findByUUIDReservationController, updateReservationController} from "../dependencies";
import dotenv from 'dotenv';
dotenv.config();

const Verifytoken = JWTMiddleware.VerifyToken;
const MODEL_URL = "reservation/";
const BASE_URL = process.env.BASE_URL || "/api/v1/";

export function setupUserRoutes(app: Express) {
    app.post(`${BASE_URL}${MODEL_URL}sing_up`, createReservationController.execute.bind(createReservationController));
    app.get(`${BASE_URL}${MODEL_URL}:uuid`, Verifytoken, findByUUIDReservationController.execute.bind(findByUUIDReservationController));
    app.put(`${BASE_URL}${MODEL_URL}:uuid`, Verifytoken, updateReservationController.execute.bind(updateReservationController));
    app.delete(`${BASE_URL}${MODEL_URL}:uuid`, Verifytoken, deleteReservationController.execute.bind(deleteReservationController));
}