import { HotelInterface } from "../../Domain/Port/HotelInterface";

export class DeleteHotelImagesCase{
    constructor(readonly hotelInterface: HotelInterface) {}
    async execute(uuid: string, uuid_image:string): Promise<void> {
        await this.hotelInterface.deleteImageHotel(uuid, uuid_image);
    }
}