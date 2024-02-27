import { Request, Response } from 'express';
import { FindByUUIDReservationUseCase } from '../../Application/UseCase/FindByUUIDReservationUseCase';

export default class FindByUUIDReservationController {
    constructor(readonly findByUUIDReservationUseCase: FindByUUIDReservationUseCase) { }

    async execute(req: Request, res: Response): Promise<void> {
        const { uuid } = req.params;
        try {
            const reservation = await this.findByUUIDReservationUseCase.execute(uuid);
            console.log(reservation);
            if (reservation) {
                res.status(200).json(reservation);
            } else {
                res.status(404).json({ error: 'Reservation not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
