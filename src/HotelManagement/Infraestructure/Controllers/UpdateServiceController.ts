import { Request, Response } from 'express';
import { UpdateServiceCase } from '../../Application/UseCase/UpdateServiceCase';
import { Service } from '../../Domain/Entities/Service';
export class UpdateServiceController{
    constructor(readonly updateServiceCase: UpdateServiceCase){}   
    
    async execute(req: Request, res: Response): Promise<void> {
        const { uuid } = req.params;
        const {title, description} = req.body;
        const service_data = new Service(title, description);
        try {
            const hotel = await this.updateServiceCase.excute(uuid, service_data);

            if (hotel) {
                res.status(200).json(hotel);
            } else {
                res.status(404).json({ error: 'Service not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}