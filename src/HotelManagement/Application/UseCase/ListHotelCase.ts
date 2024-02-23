import { Hotel } from "../../Domain/Entities/Hotel";
import { HotelInterface } from "../../Domain/Port/HotelInterface";

export class ListHotelCase{
    constructor(readonly hotelInterface: HotelInterface){}

    async execute(): Promise<Hotel[]| null>{
        return await this.hotelInterface.list();
    }        
} 