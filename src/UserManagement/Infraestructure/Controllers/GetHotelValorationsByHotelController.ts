import { Request, Response } from "express";
import { GetHotelValorationsByHotelCase } from "../../Application/UseCase/GetHotelValorationsByHotelCase";

export class GetHotelValorationsByHotelController {
    constructor(readonly getHotelValorationsByHotelCase: GetHotelValorationsByHotelCase) { }

    async execute(req: Request, res: Response) {
        const { uuidUser } = req.params;
        try {
            let hotelValorations = await this.getHotelValorationsByHotelCase.execute(uuidUser);
            res.status(200).json(hotelValorations)
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ha ocurrido un error durante su petición.",
                msg: error,
            });
        }
    }
}