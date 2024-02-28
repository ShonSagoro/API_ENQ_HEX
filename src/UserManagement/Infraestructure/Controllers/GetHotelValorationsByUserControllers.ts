import { Request, Response } from "express";
import { GetHotelValorationsByUserCase } from "../../Application/UseCase/GetHotelValorationsByUserCase";

export class GetHotelValorationsByUserControllers {
    constructor(readonly getHotelValorationsByUserCase: GetHotelValorationsByUserCase) { }

    async execute(req: Request, res: Response) {
        const { uuidHotel } = req.params;
        try {
            let hotelValorations = await this.getHotelValorationsByUserCase.execute(uuidHotel);
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