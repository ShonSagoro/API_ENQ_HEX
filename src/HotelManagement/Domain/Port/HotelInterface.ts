
import { Hotel } from "../Entities/Hotel";
import { Images } from "../Entities/Images";
import Room from "../Entities/Room";

export interface HotelInterface {
    findByName(email: string): Promise<Hotel | null>;
    findByUUID(uuid: string): Promise<Hotel | null>;
    delete(uuid: string): Promise<void>;
    update(uuid:string, user: Hotel, images: Images[], rooms: Room[]): Promise<Hotel | null>;
    list(): Promise<Hotel[]|null>;
    register(hotel: Hotel): Promise<Hotel | null>;
    register_room(uuid: string, room: Room): Promise<Room | null>;
}
