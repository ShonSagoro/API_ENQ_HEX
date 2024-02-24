
import { Hotel } from "../Entities/Hotel";

export interface HotelInterface {
    findByName(email: string): Promise<Hotel | null>;
    findByUUID(uuid: string): Promise<Hotel | null>;
    delete(uuid: string): Promise<void>;
    update(uuid:string, user: Hotel, images: string[]): Promise<Hotel | null>;
    list(): Promise<Hotel[]|null>;
    register(hotel: Hotel): Promise<Hotel | null>;

}
