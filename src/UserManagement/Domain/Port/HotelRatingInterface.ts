import { HotelRating } from '../Entities/HotelRating';

export interface HotelRatingInterface {
    save(hotelRating: HotelRating): Promise<void>;
}
