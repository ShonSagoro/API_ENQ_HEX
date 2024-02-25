import { Request, Response } from "express";
import { DeleteHotelRoomCase } from "../../Application/UseCase/DeleteHotelRoomCase";

export class DeleteHotelRoomController{
    constructor(readonly deleteHotelRoomCase: DeleteHotelRoomCase){}
    async execute(req:Request, res:Response): Promise<void> {
        const { uuid, number_room } = req.params;
        try {
            await this.deleteHotelRoomCase.execute(uuid, parseInt(number_room));
            res.status(200).send({
              status: "success",
              data: "Hotel image successfully deleted",
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