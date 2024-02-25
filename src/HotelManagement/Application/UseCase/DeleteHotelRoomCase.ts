import { HotelInterface } from "../../Domain/Port/HotelInterface";

export class DeleteHotelRoomCase{
    constructor(readonly hotelInterface: HotelInterface) {}
    async execute(uuid: string, number: number): Promise<void> {
        await this.hotelInterface.deleteRoom(uuid, number);
    }
}