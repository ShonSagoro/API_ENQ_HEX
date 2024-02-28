import { HotelValorations } from "../../Domain/Entities/HotelValorations";
import { HotelValorationsInterface } from "../../Domain/Port/HotelValorationInterface";

export class UpdateHotelValorationsCase {
    constructor(readonly hotelValorationInterface: HotelValorationsInterface) {}

    async execute(uuid:string,hotelRating: HotelValorations): Promise<HotelValorations | null> {
        return this.hotelValorationInterface.update(uuid,hotelRating);
    }
}