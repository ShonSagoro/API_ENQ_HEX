import { HotelValorations } from '../Entities/HotelValorations';

export interface HotelValorationsInterface {
    save(hotelRating: HotelValorations): Promise<HotelValorations|null>;
    listByHotel(uuid_hotel: string): Promise<HotelValorations[] | null>;
    listByUser(uuid_user: string): Promise<HotelValorations[] | null>;
    delete(uuid: string): Promise<void>;
    update(uuid: string, hotelRating: HotelValorations): Promise<HotelValorations | null>; 
}
