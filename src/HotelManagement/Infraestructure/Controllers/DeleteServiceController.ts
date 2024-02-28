import { Request, Response } from "express";
import { DeleteHotelCase } from "../../Application/UseCase/DeleteHotelCase";
import { DeleteServiceCase } from "../../Application/UseCase/DeleteServiceCase";

export class DeleteServiceController{
    constructor(readonly deleteServiceCase: DeleteServiceCase){}
    async execute(req:Request, res:Response): Promise<void> {
        const { uuid } = req.params;
        try {
            await this.deleteServiceCase.execute(uuid);
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