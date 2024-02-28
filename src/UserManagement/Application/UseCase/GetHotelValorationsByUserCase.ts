import { HotelValorations } from "../../Domain/Entities/HotelValorations";
import { HotelValorationsInterface } from "../../Domain/Port/HotelValorationInterface";

export class GetHotelValorationsByUserCase {
    constructor(readonly hotelValorationInterface: HotelValorationsInterface) {}

    async execute(uuid_hotel:string): Promise<HotelValorations[] | null> {
        return this.hotelValorationInterface.listByHotel(uuid_hotel);
    }
}