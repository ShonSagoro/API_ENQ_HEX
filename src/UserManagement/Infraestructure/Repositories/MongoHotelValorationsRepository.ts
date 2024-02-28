import { Collection } from "mongodb";
import { Hotel } from "../../Domain/Entities/Hotel";
import { HotelInterface } from "../../Domain/Port/HotelInterface";
import { connect } from "../../../Database/mongodb";
import { Images } from "../../Domain/Entities/Images";
import Room from "../../Domain/Entities/Room";
import { HotelValorationsInterface } from "../../Domain/Port/HotelValorationInterface";
import { HotelValorations } from "../../Domain/Entities/HotelValorations";

export class MongoHotelValorationsRepository implements HotelValorationsInterface {
    private collection!: Collection | any;
    constructor() {
        this.initializeCollection();
    }
    async save(hotelRating: HotelValorations): Promise<HotelValorations | null> {
        try {
            await this.collection.insertOne(hotelRating);
            return hotelRating
        } catch (error) {
            return null
        }
    }

    async listByHotel(uuid_hotel: string): Promise<HotelValorations[] | null> {
        try {
            let result = await this.collection.find({ uuid_hotel }).toArray();
            if (result) {
                return result.map((element: any) => {
                    let hotelRating = new HotelValorations(element.uuid_user, element.uuid_hotel, element.rating, element.comment);
                    hotelRating.uuid = element.uuid;
                    return hotelRating;
                });
            }
            return null;
        } catch (error) {
            return null;
        }
    }

    async listByUser(uuid_user: string): Promise<HotelValorations[] | null> {
        try {
            let result = await this.collection.find({ uuid_user }).toArray();
            if (result) {
                return result.map((element: any) => {
                    let hotelRating = new HotelValorations(element.uuid_user, element.uuid_hotel, element.rating, element.comment);
                    hotelRating.uuid = element.uuid;
                    return hotelRating;
                });
            }
            return null;
        } catch (error) {
            return null;
        }    
    }
    delete(uuid: string): Promise<void> {
        try{
            this.collection.deleteOne({uuid});
            return Promise.resolve();
        }catch(error){
            return Promise.reject();
        }
    }
    update(uuid: string, hotelRating: HotelValorations): Promise<HotelValorations | null> {
        try{
            this.collection.updateOne({uuid},hotelRating);
            return Promise.resolve(hotelRating);
        }catch(error){
            return Promise.reject();
        }
    }

    private async initializeCollection(): Promise<void> {
        this.collection = await connect("hotelValoration");
    }

}