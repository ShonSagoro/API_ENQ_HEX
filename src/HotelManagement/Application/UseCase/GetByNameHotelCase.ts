import { Hotel } from "../../Domain/Entities/Hotel";
import { HotelInterface } from "../../Domain/Port/HotelInterface";

export class GetByNameHotelCase{
    constructor(readonly hotelInterface: HotelInterface){}

    async execute(name:string): Promise<Hotel|null> {
        return await this.hotelInterface.findByName(name);
    }
}