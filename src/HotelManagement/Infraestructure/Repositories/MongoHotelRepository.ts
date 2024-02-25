import { Collection } from "mongodb";
import { Hotel } from "../../Domain/Entities/Hotel";
import { HotelInterface } from "../../Domain/Port/HotelInterface";
import { connect } from "../../../Database/mongodb";
import { Images } from "../../Domain/Entities/Images";

export class MongoHotelRepository implements HotelInterface{
    private collection!: Collection|any;
    constructor() {
        this.initializeCollection();
    }
    private async initializeCollection(): Promise<void> {
        this.collection = await connect("hotel");
    }
    async findByName(name: string): Promise<Hotel | null> {
        try {
            const result = await this.collection.find({ name });
            if (result){
                result.map((element: any) => {
                    let hotel = new Hotel(element.name, element.location, element.description, element.rating)
                    hotel.uuid=element.uuid;
                    return hotel
                });
            }
            return null
        }catch{
            return null;
        
        }
    }
    async findByUUID(uuid: string): Promise<Hotel | null> {
        try {
            const result = await this.collection.findOne({ uuid });
            if (result){
                let hotel = new Hotel(result.name, result.location, result.description, result.rating)
                hotel.uuid=result.uuid;
                return hotel;
            }
            return null
        }catch{
            return null;
        
        }
    }
    async delete(uuid:string): Promise<void> {
        try {
            await this.collection.deleteOne({ uuid });
        } catch (error) {
            throw new Error('Error deleting hotel');
        }
    }
    async update(uuid: string, hotel: Hotel, images: string[]): Promise<Hotel | null> {
        try{
            hotel.uuid = uuid;
            const hotel_images=images.map((image)=>{return new Images(uuid, image)})
            hotel.setImages(hotel_images);
            await this.collection.updateOne({ uuid }, { $set: hotel });
            return hotel;
        }catch{
            return null;
        }
    }
    async list(): Promise<Hotel[] | null> {
        try {
            const result = await this.collection.find().toArray();
            if (result){
                return result.map((element: any) => {
                    let hotel = new Hotel(element.name, element.location, element.description, element.rating)
                    hotel.uuid=element.uuid;
                    return hotel
                });
            }
            return null
        }catch{
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
    
}