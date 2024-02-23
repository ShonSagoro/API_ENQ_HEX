import { Collection } from "mongodb";
import { Hotel } from "../../Domain/Entities/Hotel";
import { HotelInterface } from "../../Domain/Port/HotelInterface";
import { connect } from "../../../Database/mongodb";

export class MongoHotelRepository implements HotelInterface{
    private collection!: Collection|any;
    constructor() {
        this.initializeCollection();
    }
    private async initializeCollection(): Promise<void> {
        this.collection = await connect("user");
    }
    async findByName(name: string): Promise<Hotel | null> {
        try {
            const result = await this.collection.findOne({ name });
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
    async findByUUID(uuid: string): Promise<Hotel | null> {
        throw new Error("Method not implemented.");
    }
    async delete(uuid: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async update(uuid: string, user: Hotel): Promise<Hotel | null> {
        throw new Error("Method not implemented.");
    }
    async list(): Promise<Hotel[] | null> {
        throw new Error("Method not implemented.");
    }
    async register(hotel: Hotel): Promise<Hotel | null> {
        throw new Error("Method not implemented.");
    }
    
}