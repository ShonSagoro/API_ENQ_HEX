import Room from "../../Domain/Entities/Room";
import { HotelInterface } from "../../Domain/Port/HotelInterface";

export class ListHotelRoomCase{
    constructor(readonly hotelInterface: HotelInterface){}

    async execute(uuid: string): Promise<Room[]| null> {
       return await this.hotelInterface.listRooms(uuid);
    }
}