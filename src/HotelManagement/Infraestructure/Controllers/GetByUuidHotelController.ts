import { GetByUuidHotelCase } from "../../Application/UseCase/GetByUuidHotelCase";
import { Request, Response } from 'express';


export default class GetByUuidHotelController {
    constructor(readonly getByUuidHotelCase: GetByUuidHotelCase) { }

    async execute(req: Request, res: Response): Promise<void> {
        const { uuid } = req.params;
        try {
            const hotel = await this.getByUuidHotelCase.execute(uuid);

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