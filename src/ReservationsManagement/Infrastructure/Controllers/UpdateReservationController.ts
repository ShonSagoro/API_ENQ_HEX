import { Request, Response } from "express";
import { UpdateReservationUseCase } from "../../Application/UseCase/UpdateReservationUseCase";
import { Reservation } from "../../Domain/Entities/Reservation";

export class UpdateReservationController {
    constructor(readonly updateReservationController: UpdateReservationUseCase) { }

    async execute(req: Request, res: Response) {
        const data = req.body;
        const { uuid } = req.params;
        let reservationData = new Reservation(uuid,data.description, data.date_start, data.date_end, data.payment); 
        try {
            const reservation = await this.updateReservationController.execute(uuid, reservationData);
            if (reservation) {
                res.status(200).send({
                    status: "success",
                    data: {
                        uuid: reservation.uuid,
                        user_uuid: reservation.user_uuid,
                        description: reservation.description,
                        date_start: reservation.date_start,
                        udate_enduid: reservation.date_end,
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