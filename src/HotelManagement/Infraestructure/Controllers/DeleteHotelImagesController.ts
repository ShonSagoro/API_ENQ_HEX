import { Request, Response } from "express";
import { DeleteHotelImagesCase } from "../../Application/UseCase/DeleteHotelImagesCase";
import StorageService from "../../Domain/services/StorageService";

export class DeleteHotelImagesController{
    constructor(readonly deleteHotelImagesCase: DeleteHotelImagesCase, storageService:StorageService){}
    async execute(req:Request, res:Response): Promise<void> {
        const { uuid, uuid_image } = req.params;
        try {
            await this.deleteHotelImagesCase.execute(uuid, uuid_image);
            
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