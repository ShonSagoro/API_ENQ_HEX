import { Request, Response } from "express";
import { AddImageHotelCase } from "../../Application/UseCase/AddImageHotelCase";
import { Images } from "../../Domain/Entities/Images";
import StorageService from "../../Domain/services/StorageService";

export class AddHotelImageController{
    constructor(readonly addImageHotelCase: AddImageHotelCase, readonly storageService: StorageService){}

    async execute(req: Request, res: Response){
        const file = req.file;
        const uuid = req.params.uuid;
        console.log(file);
        if (!file) {
            return res.status(400).json({ error: "No image uploaded" });
        }
        const imageUrl = await this.storageService.saveImage(file);

        if (!imageUrl) {
            return res.status(400).json({ error: "Error in upload image" });
        }
        const image_obj= new Images(uuid, imageUrl);
        
        try{
            let image = await this.addImageHotelCase.execute(uuid, image_obj);
            if(image){
                res.status(200).send({
                    status: "success",
                    data: {
                        id: image.uuid,
                        url_image: image.getURL(),
                        hotel_uuid: image.getUUIDHotel(),
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