import { Request, Response } from 'express';
import { ListHotelImagesCase } from '../../Application/UseCase/ListHotelImagesCase';


export default class ListHotelController {
    constructor(readonly listHotelImagesCase: ListHotelImagesCase) { }

    async execute(req: Request, res: Response): Promise<void> {
        const { uuid } = req.params;
        try {
            const hotel_images = await this.listHotelImagesCase.execute(uuid);

            if (hotel_images) {
                res.status(200).json(hotel_images);
            } else {
                res.status(404).json({ error: 'Hotel images not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}