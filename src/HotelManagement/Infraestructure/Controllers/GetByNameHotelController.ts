import { GetByNameHotelCase } from "../../Application/UseCase/GetByNameHotelCase";
import { Request, Response } from 'express';

export default class GetByNameHotelController{
    constructor(readonly getByNameHotelCase: GetByNameHotelCase) { }

    async execute(req: Request, res: Response): Promise<void> {
        const { name } = req.params;
        try {
            const hotel = await this.getByNameHotelCase.execute(name);

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