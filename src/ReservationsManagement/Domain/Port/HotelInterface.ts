
import { Hotel } from "../Entities/Hotel";
import { Images } from "../Entities/Images";
import Room from "../Entities/Room";

export interface HotelInterface {
    findByName(email: string): Promise<Hotel[] | null>;
    findByUUID(uuid: string): Promise<Hotel | null>;
    delete(uuid: string): Promise<void>;
    update(uuid:string, user: Hotel): Promise<Hotel | null>;
    list(): Promise<Hotel[]|null>;
    listRooms(uuid: string): Promise<Room[]|null>;
    listImages(uuid: string): Promise<Images[]|null>;
    register(hotel: Hotel): Promise<Hotel | null>;
    registerRoom(uuid: string, room: Room): Promise<Room | null>;
    addImageHotel(uuid: string, image: Images): Promise<Images | null>;
    deleteImageHotel(uuid: string, uuid_image:string): Promise<void>; 
    deleteRoom(uuid: string, number_room:number): Promise<void>; 
    updateRoom(uuid_hotel:string, room_number: number, state:string): Promise<Hotel | null>;
}
