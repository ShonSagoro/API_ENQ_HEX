import { HotelRating } from '../../Domain/Entities/HotelRating';
import { HotelRatingRepository } from '../../Infraestructure/Repositories/HotelRatingRepository'; 

export class RateHotelCase {
    constructor(private hotelRatingRepository: HotelRatingRepository) {}

    async execute(hotelRating: HotelRating): Promise<void> {
        await this.hotelRatingRepository.save(hotelRating);
    }
}
