import { HotelRating } from '../../Domain/Entities/HotelRating';
import { HotelRatingInterface } from '../../Domain/Port/HotelRatingInterface';

export class HotelRatingRepository implements HotelRatingInterface {
    async save(hotelRating: HotelRating): Promise<void> {
        console.log('Guardando valoración del hotel:', hotelRating);
    }
}
