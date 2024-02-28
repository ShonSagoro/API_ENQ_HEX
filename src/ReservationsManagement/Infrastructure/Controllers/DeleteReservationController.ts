import { Request, Response } from "express";
import { DeleteReservationUseCase } from "../../Application/UseCase/DeleteReservationUseCase";

export class DeleteReservationController {
    constructor(readonly deleteReservationUseCase: DeleteReservationUseCase) { }

    async execute(req: Request, res: Response) {
        const { uuid } = req.params;
        try {
            const result = await this.deleteReservationUseCase.execute(uuid);
            res.status(200).send({
                status: "success",
                data: "Reservation successfully cancelled",
            });
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ha ocurrido un error durante su petición.",
                msg: error,
            });
        }
    }
}