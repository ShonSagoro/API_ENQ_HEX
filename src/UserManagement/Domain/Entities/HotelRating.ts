import { v4 as uuidv4 } from 'uuid';

export class HotelRating {
    readonly id: string;
    readonly userId: string;
    readonly hotelId: string;
    readonly stars: number;
    readonly comments: string;

    constructor(userId: string, hotelId: string, stars: number, comments: string) {
        this.id = uuidv4(); 
        this.userId = userId;
        this.hotelId = hotelId;
        this.stars = stars;
        this.comments = comments;
    }
}
