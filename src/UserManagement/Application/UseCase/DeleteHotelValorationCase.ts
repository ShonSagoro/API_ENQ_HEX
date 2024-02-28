import { HotelValorationsInterface } from "../../Domain/Port/HotelValorationInterface";

export class DeleteHotelValorationCase {
    constructor(readonly hotelValorationInterface: HotelValorationsInterface) {}

    async execute(uuid:string): Promise<void> {
        this.hotelValorationInterface.delete(uuid);
    }
}