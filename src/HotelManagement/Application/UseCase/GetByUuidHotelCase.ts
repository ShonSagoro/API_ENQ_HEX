import { Hotel } from "../../Domain/Entities/Hotel";
import { HotelInterface } from "../../Domain/Port/HotelInterface";

export class GetByUuidHotelCase{
    constructor(readonly hotelInterface: HotelInterface){}

    async execute(uuid:string): Promise<Hotel|null> {
        return await this.hotelInterface.findByUUID(uuid);
    }
}   