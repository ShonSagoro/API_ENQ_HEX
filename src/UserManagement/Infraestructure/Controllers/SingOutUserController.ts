import { Request, Response } from 'express';
import { IncomingHttpHeaders } from 'http';
import JWTMiddleware from '../../../Middleware/JWTMiddlewre';
import { SingOutUserCase } from '../../Application/UseCase/SingOutUserCase';

export class SingOutUserController {
    jwtMiddleware = new JWTMiddleware();
    constructor(readonly singOutUserCase: SingOutUserCase ) { }

    async execute(req: Request, res: Response) {
        const { uuid } = req.params;
        const headers = req.headers as IncomingHttpHeaders;
        const authHeader = headers['authorization'];

        if (!authHeader) {
            return res.status(401).json({ message: 'Token not provided' });
        }
        const token = authHeader.split(' ')[1];
        console.log(token); 
        try {
            this.jwtMiddleware.addToBlacklist(token);
            this.singOutUserCase.execute(uuid);
            res.status(200).send({
                status: "success",
                data: "Te has deslogueado, vuelve pronto.",
            });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}