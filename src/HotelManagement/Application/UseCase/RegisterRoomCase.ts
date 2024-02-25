import Room from "../../Domain/Entities/Room";
import { HotelInterface } from "../../Domain/Port/HotelInterface";

export class RegisterRoomCase{
    constructor(readonly hotelInterface: HotelInterface){}

    async excute(uuid:string, room: Room): Promise<Room| null> {
       return await this.hotelInterface.registerRoom(uuid, room);
    }
}
