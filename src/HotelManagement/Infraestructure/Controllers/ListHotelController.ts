import { Request, Response } from 'express';
import { ListHotelCase } from '../../Application/UseCase/ListHotelCase';


export default class ListHotelController {
    constructor(readonly listHotelCase: ListHotelCase) { }

    async execute(req: Request, res: Response): Promise<void> {
        try {
            const hotel = await this.listHotelCase.execute();
            console.log("JAJA3");

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