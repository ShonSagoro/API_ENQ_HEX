import { Hotel } from "../../Domain/Entities/Hotel";
import { Images } from "../../Domain/Entities/Images";
import Room from "../../Domain/Entities/Room";
import { HotelInterface } from "../../Domain/Port/HotelInterface";


export class UpdateHotelCase{
    constructor(readonly hotelInterface:HotelInterface){}

    async execute(uuid:string, hotel: Hotel, images: Images[], rooms: Room[]): Promise<Hotel|null>{
        return await this.hotelInterface.update(uuid,hotel,images,rooms);
    }
}