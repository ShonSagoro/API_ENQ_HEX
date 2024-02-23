import { Request, Response } from "express";
import { Hotel } from "../../Domain/Entities/Hotel";
import { CreateHotelCase } from "../../Application/UseCase/CreateHotelCase";

export class CreateHotelController{
    constructor(readonly createHotelCase: CreateHotelCase){}

    async excute(req: Request, res: Response){
        const data = req.body;
        let hotel_Data = new Hotel(data.name, data.location, data.description, data.rating);
        try{
            let hotel = await this.createHotelCase.excute(hotel_Data);
            if(hotel){
                res.status(200).send({
                    status: "success",
                    data: {
                        id: hotel.uuid,
                        name: hotel.name,
                        location: hotel.location,
                        description: hotel.description,
                        rating: hotel.rating
                    }
                });
            }else{
                res.status(500).send({
                    status: "internal server error",
                    data: "Ha ocurrido un error con tu peticion, inténtelo más tarde."
                });
            }
         } catch(error){
            res.status(204).send({
                status: "error",
                data: "Ha ocurrido un error durante su petición.",
                msg: error,
            });
        }
    
    }
}