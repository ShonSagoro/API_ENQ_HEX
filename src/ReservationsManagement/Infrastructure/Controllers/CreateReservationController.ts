import { Request, Response } from "express";
import { CreateReservationUseCase } from "../../Application/UseCase/CreateReservationUseCase";
import { Reservation } from "../../Domain/Entities/Reservation";
import { PaymentMethod } from "../../Domain/Entities/PaymentMethod";

export class CreateReservationController {
    constructor(readonly createReservationUseCase: CreateReservationUseCase) { }

    async execute(req: Request, res: Response) {
        const data = req.body;
        let payment = new PaymentMethod(parseFloat(data.amount), data.currency, data.paymentType);
        let reservationData = new Reservation(data.user_uuid, data.hotel_uuid, data.room_uuid, data.description, new Date(data.date_start), new Date(data.date_end), payment);
        try {
            const reservation = await this.createReservationUseCase.execute(reservationData);
            if (reservation) {
                res.status(200).send({
                    status: "success",
                    data: {
                        uuid: reservation.uuid,
                        user_uuid: reservation.getUserUUID(),
                        description: reservation.getDescription(),
                        date_start: reservation.getDateStart(),
                        date_end: reservation.getDateEnd(),
                        payment: reservation.getPayment(),
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