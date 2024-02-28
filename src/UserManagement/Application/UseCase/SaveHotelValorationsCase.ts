import { HotelValorations } from "../../Domain/Entities/HotelValorations";
import { HotelValorationsInterface } from "../../Domain/Port/HotelValorationInterface";

export class SaveHotelValorationsCase {
    constructor(readonly hotelValorationInterface: HotelValorationsInterface) {}

    async execute(hotelRating: HotelValorations): Promise<HotelValorations | null> {
        return this.hotelValorationInterface.save(hotelRating);
    }
}