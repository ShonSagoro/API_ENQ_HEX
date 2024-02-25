import { Images } from "../../Domain/Entities/Images";
import { HotelInterface } from "../../Domain/Port/HotelInterface";

export class ListHotelImagesCase{
    constructor(readonly hotelInterface: HotelInterface){}

    async execute(uuid: string): Promise<Images[]| null> {
       return await this.hotelInterface.listImages(uuid);
    }
}