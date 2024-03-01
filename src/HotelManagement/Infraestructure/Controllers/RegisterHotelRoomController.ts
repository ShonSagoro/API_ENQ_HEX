import { Request, Response } from "express";
import { RegisterHotelRoomCase } from "../../Application/UseCase/RegisterHotelRoomCase";
import Room from "../../Domain/Entities/Room";

export class RegisterHotelRoomController{
    constructor(readonly registerHotelRoomCase: RegisterHotelRoomCase){}

    async execute(req: Request, res: Response){
        const data = req.body;
        let room_data = new Room(parseInt(data.number), "free", parseFloat(data.price), data.type);
        let uuid = req.params.uuid;
        try{
            let room = await this.registerHotelRoomCase.execute(uuid, room_data);
            if(room){
                res.status(200).send({
                    status: "success",
                    data: {
                        room
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