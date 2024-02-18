import { Request, Response } from "express";
import { SingInUserCase } from "../../Application/UseCase/SingInUserCase";
import { EncryptService } from "../../Domain/Services/EncriptServices";
import JWTMiddleware from '../../../Middleware/JWTMiddlewre';
import { TokenServices } from "../../Domain/Services/TokenServices";

export class SingInUserController {
    GenerateToken = JWTMiddleware.GenerateToken;
    constructor(readonly singInUserCase: SingInUserCase, readonly encryptionService: EncryptService, readonly tokenServices: TokenServices) { }

    async execute(req: Request, res: Response) {
        const data = req.body;
        try {
            let user = await this.singInUserCase.execute(data.email, data.password, this.encryptionService, this.tokenServices);
            console.log(user);
            if (user === null) {
                res.status(401).send({
                    status: "error",
                    data: "El usuario no existe o la contraseña es incorrecta.",
                });
                return;
            } else {
                const uuid = user.uuid;
                const token = this.GenerateToken({ uuid: uuid });
                res.status(200).json({
                    status: "success",
                    token: token,
                    user_token: user.status.getToken()
                });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}