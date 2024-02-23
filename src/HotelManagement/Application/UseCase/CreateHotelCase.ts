import { Hotel } from "../../Domain/Entities/Hotel";
import {HotelInterface} from "../../Domain/Port/HotelInterface"

export class CreateHotelCase{
    constructor(readonly hotelInterface: HotelInterface){}

    async excute(hotel: Hotel): Promise<Hotel| null> {
       return await this.hotelInterface.register(hotel);
    }
}