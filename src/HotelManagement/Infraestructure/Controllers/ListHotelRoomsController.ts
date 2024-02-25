import { Request, Response } from 'express';
import { ListHotelImagesCase } from '../../Application/UseCase/ListHotelImagesCase';
import { ListHotelRoomCase } from '../../Application/UseCase/ListHotelRoomCase';


export default class ListHotelRoomsController {
    constructor(readonly listHotelRoomCase: ListHotelRoomCase) { }

    async execute(req: Request, res: Response): Promise<void> {
        const { uuid } = req.params;
        try {
            const hotel_images = await this.listHotelRoomCase.execute(uuid);

            if (hotel_images) {
                res.status(200).json(hotel_images);
            } else {
                res.status(404).json({ error: 'Hotel rooms not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}