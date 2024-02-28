import { Hotel } from "../../Domain/Entities/Hotel";
import Room from "../../Domain/Entities/Room";
import {HotelInterface} from "../../Domain/Port/HotelInterface"

export class RegisterHotelRoomCase{
    constructor(readonly hotelInterface: HotelInterface){}

    async execute(uuid:string, room: Room): Promise<Room| null> {
       return await this.hotelInterface.registerRoom(uuid,room);
    }
}