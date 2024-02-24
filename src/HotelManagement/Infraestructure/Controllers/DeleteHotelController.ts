import { Request, Response } from "express";
import { DeleteHotelCase } from "../../Application/UseCase/DeleteHotelCase";

export class DeleteUserController{
    constructor(readonly deleteHotelCase: DeleteHotelCase){}
    async execute(req:Request, res:Response): Promise<void> {
        const { uuid } = req.params;
        try {
            const result = await this.deleteHotelCase.execute(uuid);
            res.status(200).send({
              status: "success",
              data: "User successfully deleted",
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