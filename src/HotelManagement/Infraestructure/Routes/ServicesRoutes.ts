import { Express } from "express";
import JWTMiddleware from "../../../Middleware/JWTMiddlewre";
import dotenv from 'dotenv';
import { createServiceController, deleteServiceController, getByUuidServiceController, listServiceController, updateServiceController } from "../dependencies";
dotenv.config();

const Verifytoken = JWTMiddleware.VerifyTokenTry;
const MODEL_URL = "services";
const BASE_URL = process.env.BASE_URL || "/api/v1/";

export function setUpServicesRoutes(app: Express) {
    app.post(`${BASE_URL}${MODEL_URL}`, Verifytoken, createServiceController.execute.bind(createServiceController));
    app.delete(`${BASE_URL}${MODEL_URL}/:uuid`, Verifytoken, deleteServiceController.execute.bind(deleteServiceController));
    app.get(`${BASE_URL}${MODEL_URL}/:uuid`, Verifytoken, getByUuidServiceController.execute.bind(getByUuidServiceController));
    app.get(`${BASE_URL}${MODEL_URL}`, Verifytoken, listServiceController.execute.bind(listServiceController));
    app.put(`${BASE_URL}${MODEL_URL}/:uuid`, Verifytoken, updateServiceController.execute.bind(updateServiceController));
}