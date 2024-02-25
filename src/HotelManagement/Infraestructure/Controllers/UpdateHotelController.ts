import { Request, Response } from 'express';
import { UpdateHotelCase } from '../../Application/UseCase/UpdateHotelCase';
import { Hotel } from '../../Domain/Entities/Hotel';
export class UpdateHotelController{
    constructor(readonly updateHotelCase: UpdateHotelCase){}   
    
    async execute(req: Request, res: Response): Promise<void> {
        const { uuid } = req.params;
        const { name, address, description, rating} = req.body;

        const hotelData = new Hotel(name, address, description, rating)
        try {
            const hotel = await this.updateHotelCase.execute(uuid, hotelData);

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