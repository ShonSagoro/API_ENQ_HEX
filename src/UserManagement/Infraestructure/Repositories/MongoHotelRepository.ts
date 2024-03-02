import { Collection } from "mongodb";
import { Hotel } from "../../Domain/Entities/Hotel";
import { HotelInterface } from "../../Domain/Port/HotelInterface";
import { connect } from "../../../database/mongodb";
import { Images } from "../../Domain/Entities/Images";
import Room from "../../Domain/Entities/Room";
import { MongoHotelValorationsRepository } from "./MongoHotelValorationsRepository";

export class MongoHotelRepository implements HotelInterface {
    private collection!: Collection | any;
    private _mongoHotelValorationsRepository: MongoHotelValorationsRepository | null = null;

    get mongoHotelValorationsRepository(): MongoHotelValorationsRepository {
        if (!this._mongoHotelValorationsRepository) {
            this._mongoHotelValorationsRepository = new MongoHotelValorationsRepository();
        }
        return this._mongoHotelValorationsRepository;
    }
    constructor() {
        this.initializeCollection();
    }
    async updateValoration(uuid: string): Promise<void> {
        try {
            let valorations = await this.mongoHotelValorationsRepository.listByHotel(uuid); 
            if (valorations) {
                let total = 0;
                let comments: string[]=[];
                valorations.forEach((element) => {
                    total += element.getStars();
                });
                valorations.slice(0, 10).forEach((element) => {
                    comments.push(element.getComment());
                  });

                let rating = total / valorations.length;
                await this.collection.updateOne({ uuid }, { $set: { rating, comments } });
            }
        } catch (error) {
            
        }
    }

    async findByName(name: string): Promise<Hotel[] | null> {
        try {
            console.log(name);
            const result = await this.collection.find({ name }).toArray();
            console.log(result);
            if (result) {
                return result.map((element: any) => {
                    let hotel = new Hotel(element.name, element.location, element.description)
                    hotel.uuid = element.uuid;
                    hotel.setImages(element.images);
                    hotel.setRooms(element.rooms);
                    hotel.setRating(element.rating);
                    return hotel
                });
            }
            return null
        } catch {
            return null;

        }
    }
    async listRooms(uuid: string): Promise<Room[] | null> {
        try {
            let hotel = await this.findByUUID(uuid);
            if (hotel) {
                return hotel.getRooms();
            } else {
                return null;
            }
        } catch (error) {
            return null;
        }
    }
    async listImages(uuid: string): Promise<Images[] | null> {
        try {
            let hotel = await this.findByUUID(uuid);
            if (hotel) {
                return hotel.getImages();
            } else {
                return null;
            }
        } catch (error) {
            return null;
        }
    }
    async registerRoom(uuid: string, room: Room): Promise<Room | null> {
        try {
            let hotel = await this.findByUUID(uuid);
            if (hotel) {
                let rooms = hotel.getRooms();
                rooms.push(room);
                hotel.setRooms(rooms);
                await this.collection.updateOne({ uuid }, { $set: hotel });
                return room;
            } else {
                return null;
            }
        } catch (error) {
            return null;
        }
    }
    async addImageHotel(uuid: string, image: Images): Promise<Images | null> {
        try {
            let hotel = await this.findByUUID(uuid);
            if (hotel) {
                let images = hotel.getImages();
                images.push(image);
                hotel.setImages(images);
                await this.collection.updateOne({ uuid }, { $set: hotel });
                return image;
            } else {
                return null;
            }
        } catch (error) {
            return null;
        }
    }
    async deleteImageHotel(uuid: string, uuid_image: string): Promise<void> {
        try {
            await this.collection.updateOne({ 'uuid': uuid, $pull: { 'images': { 'uuid': uuid_image } } });
        } catch (error) {
            throw new Error('Error deleting hotel');
        }
    }
    async deleteRoom(uuid: string, number_room: number): Promise<void> {
        try {
            await this.collection.updateOne({ 'uuid': uuid, $pull: { 'rooms': { 'number': number_room } } });
        } catch (error) {
            throw new Error('Error deleting hotel');
        }
    }
    async findByUUID(uuid: string): Promise<Hotel | null> {
        try {
            const result = await this.collection.findOne({ uuid });
            if (result) {
                let hotel = new Hotel(result.name, result.location, result.description)
                hotel.uuid = result.uuid;
                hotel.setImages(result.images);
                hotel.setRooms(result.rooms);
                hotel.setRating(result.rating);
                return hotel;
            }
            return null
        } catch {
            return null;

        }
    }
    async delete(uuid: string): Promise<void> {
        try {
            await this.collection.deleteOne({ uuid });
        } catch (error) {
            throw new Error('Error deleting hotel');
        }
    }
    async update(uuid: string, hotel: Hotel): Promise<Hotel | null> {
        try {
            hotel.uuid = uuid;
            let result=await this.collection.updateOne({ uuid }, { $set: hotel });
            hotel.setImages(result.images);
            hotel.setRooms(result.rooms);
            return hotel;
        } catch {
            return null;
        }
    }
    async list(): Promise<Hotel[] | null> {
        try {
            const result = await this.collection.find().toArray();
            console.log(result);
            if (result) {
                return result.map((element: any) => {
                    let hotel = new Hotel(element.name, element.location, element.description)
                    hotel.uuid = element.uuid;
                    hotel.setImages(element.images);
                    hotel.setRooms(element.rooms);
                    hotel.setRating(element.rating);
                    return hotel
                });
            }
            return null
        } catch {
            return null;

        }
    }
    async register(hotel: Hotel): Promise<Hotel | null> {
        try {
            await this.collection.insertOne(hotel);
            return hotel;
        } catch (error) {
            return null;
        }
    }

    private async initializeCollection(): Promise<void> {
        this.collection = await connect("hotel");
    }

}