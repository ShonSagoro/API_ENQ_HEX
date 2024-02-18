import { Express } from "express";
import JWTMiddleware from "../../../Middleware/JWTMiddlewre";
import { activateUserController, deleteUserController, getByUuidController, listUsersController, singInUserController, singOutUserCase, singOutUserController, singUpUserController, updateUserController } from "../dependecies";

const Verifytoken = JWTMiddleware.VerifyToken;
export function setupUserRoutes(app: Express) {
    app.post('/users/sing_up', singUpUserController.execute.bind(singUpUserController));
    app.post('/users/sing_in', singInUserController.execute.bind(singInUserController));
    app.get('/users/:uuid',Verifytoken, getByUuidController.execute.bind(getByUuidController));
    app.put('/users/:uuid',Verifytoken, updateUserController.execute.bind(updateUserController));
    app.delete('/users/:uuid',Verifytoken, deleteUserController.execute.bind(deleteUserController));
    app.get('/users/activate/:uuid', activateUserController.execute.bind(activateUserController));
    app.get('/users/', listUsersController.execute.bind(listUsersController));
    app.get('/users/sing_out/:uuid', Verifytoken, singOutUserController.execute.bind(singOutUserController));
}