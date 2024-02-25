import { Request, Response } from 'express';
import { GetByUuidServiceCase } from '../../Application/UseCase/GetByUuidServiceCase';

export default class GetByUuidServiceController {
    constructor(readonly getByUuidServiceCase: GetByUuidServiceCase) { }

    async execute(req: Request, res: Response): Promise<void> {
        const { uuid } = req.params;
        try {
            const hotel = await this.getByUuidServiceCase.execute(uuid);

            if (hotel) {
                res.status(200).json(hotel);
            } else {
                res.status(404).json({ error: 'Hotel not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}