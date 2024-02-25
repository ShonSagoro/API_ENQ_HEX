
import { Hotel } from "../Entities/Hotel";
import { Images } from "../Entities/Images";
import Room from "../Entities/Room";

export interface HotelInterface {
    findByName(email: string): Promise<Hotel | null>;
    findByUUID(uuid: string): Promise<Hotel | null>;
    delete(uuid: string): Promise<void>;
    update(uuid:string, user: Hotel): Promise<Hotel | null>;
    list(): Promise<Hotel[]|null>;
    listRooms(uuid: string): Promise<Room[]|null>;//TODO: complete this method
    listImages(uuid: string): Promise<Images[]|null>;//TODO: complete this method
    register(hotel: Hotel): Promise<Hotel | null>;
    registerRoom(uuid: string, room: Room): Promise<Room | null>;//TODO: complete this method
    addImageHotel(uuid: string, image: Images): Promise<Images | null>;//TODO: complete this method
    deleteImageHotel(uuid: string, uuid_image:string): Promise<void>; //TODO: complete this method
    deleteRoom(uuid: string, number_room:string): Promise<void>; //TODO: complete this method
}
