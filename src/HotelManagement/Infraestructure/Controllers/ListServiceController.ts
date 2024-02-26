import { Request, Response } from 'express';
import { ListServiceCase } from '../../Application/UseCase/ListServiceCase';


export default class ListServiceController {
    constructor(readonly listServiceCase: ListServiceCase) { }

    async execute(req: Request, res: Response): Promise<void> {
        try {
            const services = await this.listServiceCase.execute();
            if (services) {
                res.status(200).json(services);
            } else {
                res.status(404).json({ error: 'service not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}