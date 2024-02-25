import { Hotel } from "../../Domain/Entities/Hotel";
import { Images } from "../../Domain/Entities/Images";
import { HotelInterface } from "../../Domain/Port/HotelInterface";

export class AddImageHotelCase{
    constructor(readonly hotelInterface: HotelInterface){}

    async excute(uuid:string, image:Images): Promise<Images| null> {
       return await this.hotelInterface.addImageHotel(uuid, image);
    }
}