import { v4 as uuidv4 } from 'uuid';
import { ValidatableEntity } from '../Validations/ValidatableEntity';


export class HotelValorations implements ValidatableEntity {

    public uuid: string;
    
    private uuid_hotel: string;

    private uuid_user: string;

    private stars: number;

    private comment: string;
      
    constructor(uuid_hotel:string, uuid_user:string, stars:number, comment:string) {
        this.uuid = uuidv4();
        this.uuid_hotel = uuid_hotel;
        this.uuid_user = uuid_user;
        this.stars = stars>=0 && stars<=5 ? stars : 0;
        this.comment = comment;
    }
    
    getUUID(): string {
        return this.uuid;
    }

    getUUIDHotel(): string {
        return this.uuid_hotel;
    }

    getUUIDUser(): string {
        return this.uuid_user;
    }

    getStars(): number {
        return this.stars;
    }

    getComment(): string {
        return this.comment;
    }

    setUUID(uuid: string): void {
        this.uuid = uuid;
    }

    setUUIDHotel(uuid_hotel: string): void {
        this.uuid_hotel = uuid_hotel;
    }

    setUUIDUser(uuid_user: string): void {
        this.uuid_user = uuid_user;
    }

    setStars(stars: number): void {
        this.stars = stars;
    }

    setComment(comment: string): void {
        this.comment = comment;
    }

    async validate() {
        return Promise.resolve();
    }
}