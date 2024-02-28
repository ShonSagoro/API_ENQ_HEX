import { HotelValorations } from "../../Domain/Entities/HotelValorations";
import { HotelValorationsInterface } from "../../Domain/Port/HotelValorationInterface";

export class GetHotelValorationsByHotelCase {
    constructor(readonly hotelValorationInterface: HotelValorationsInterface) {}

    async execute(uuid_user:string): Promise<HotelValorations[] | null> {
        return this.hotelValorationInterface.listByUser(uuid_user);
    }
}