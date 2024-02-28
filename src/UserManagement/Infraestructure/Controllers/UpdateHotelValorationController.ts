import { Request, Response } from "express";
import { UpdateHotelValorationsCase } from "../../Application/UseCase/UpdateHotelValorationCase";
import { HotelValorations } from "../../Domain/Entities/HotelValorations";

export class UpdateHotelValorationController {
    constructor(readonly updateHotelValorationCase: UpdateHotelValorationsCase) { }

    async execute(req: Request, res: Response) {
        const { uuid } = req.params;
        const { uuidHotel, uuidUser, stars, comment } = req.body;
        let hotelValoration = new HotelValorations(uuidHotel, uuidUser, stars, comment);
        try {
            let hotelValorations = await this.updateHotelValorationCase.execute(uuid,hotelValoration);
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