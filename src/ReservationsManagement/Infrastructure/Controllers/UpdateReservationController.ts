import { Request, Response } from "express";
import { UpdateReservationUseCase } from "../../Application/UseCase/UpdateReservationUseCase";
import { Reservation } from "../../Domain/Entities/Reservation";
import { PaymentMethod } from "../../Domain/Entities/PaymentMethod";

export class UpdateReservationController {
    constructor(readonly updateReservationController: UpdateReservationUseCase) { }

    async execute(req: Request, res: Response) {
        const data = req.body;
        const { uuid } = req.params;
        let payment = new PaymentMethod(parseFloat(data.amount), data.currency, data.paymentType);
        let reservationData = new Reservation(data.user_uuid, data.hotel_uuid, data.room_uuid, data.description, new Date(data.date_start), new Date(data.date_end), payment);
       try {
            const reservation = await this.updateReservationController.execute(uuid, reservationData);
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