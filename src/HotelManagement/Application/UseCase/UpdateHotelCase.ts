import { Hotel } from "../../Domain/Entities/Hotel";
import { HotelInterface } from "../../Domain/Port/HotelInterface";


export class UpdateHotelCase{
    constructor(readonly hotelInterface:HotelInterface){}

    async execute(uuid:string,hotel: Hotel, images: string[]): Promise<Hotel|null>{
        return await this.hotelInterface.update(uuid,hotel,images);
    }
}