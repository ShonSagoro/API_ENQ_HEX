import { Request, Response } from "express";
import { DeleteHotelValorationCase } from "../../Application/UseCase/DeleteHotelValorationCase";

export class DeleteHotelValorationController {
    constructor(readonly deleteHotelValorationCase: DeleteHotelValorationCase) { }

    async execute(req: Request, res: Response) {
        const { uuid } = req.params;
        try {
            await this.deleteHotelValorationCase.execute(uuid);
            res.status(200).send({
                status: "success",
                data: "Hotel Valoration successfully ACTIVATED",
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