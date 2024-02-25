import { Request, Response } from "express";
import { CreateReservationUseCase } from "../../Application/UseCase/CreateReservationUseCase";
import { Reservation } from "../../Domain/Entities/Reservation";

export class CreateReservationController {
    constructor(readonly createReservationUseCase: CreateReservationUseCase) { }

    async execute(req: Request, res: Response) {
        const data = req.body;
        let reservationData = new Reservation(data.uuid,data.description, data.date_start, data.date_end, data.payment); 
        try {
            const reservation = await this.createReservationUseCase.execute(reservationData, data.user_uuid);
            if (reservation) {
                res.status(200).send({
                    status: "success",
                    data: {
                        uuid: reservation.uuid,
                        user_uuid: reservation.user_uuid,
                        description: reservation.description,
                        date_start: reservation.date_start,
                        date_end: reservation.date_end,
                        payment: reservation.payment,
                    },
                });
            } else {
                res.status(500).send({
                    status: "internal server error",
                    data: "Ha ocurrido un error con tu peticion, inténtelo más tarde.",
                });
            }
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ha ocurrido un error durante su petición.",
                msg: error,
            });
        }
    }
}