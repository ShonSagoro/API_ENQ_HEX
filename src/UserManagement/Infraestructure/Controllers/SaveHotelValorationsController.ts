import { Request, Response } from "express";
import { SaveHotelValorationsCase } from "../../Application/UseCase/SaveHotelValorationsCase";
import { HotelValorations } from "../../Domain/Entities/HotelValorations";

export class SaveHotelValorationsController {
    constructor(readonly saveHotelValorationsCase: SaveHotelValorationsCase) { }

    async execute(req: Request, res: Response) {
        const { hotel_uuid, user_uuid, stars, comment } = req.body;
        let hotelValoration = new HotelValorations(hotel_uuid, user_uuid, parseFloat(stars), comment);
        try {
            let hotelValorations = await this.saveHotelValorationsCase.execute(hotelValoration);
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