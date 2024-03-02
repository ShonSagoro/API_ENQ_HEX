import { Collection } from "mongodb";
import { ReservationInterface } from "../../Domain/Port/ReservationInterface";
import { Reservation } from "../../Domain/Entities/Reservation";
import { PaymentMethod } from "../../Domain/Entities/PaymentMethod";
import { connect } from "../../../database/mongodb";
import { MongoHotelRepository } from "./MongoHotelRepository";
import { MongoDBUserRepository } from "./MongoUserRepository";


export class MongoDBReservationRepository implements ReservationInterface{

    private collection!: Collection|any;

    constructor() {
        this.initializeCollection();
    }
    private _mongHotelRepository: MongoHotelRepository | null = null;
    private _mongoUserRepository: MongoDBUserRepository | null = null;

    get mongHotelRepository(): MongoHotelRepository {
        if (!this._mongHotelRepository) {
            this._mongHotelRepository = new MongoHotelRepository();
        }
        return this._mongHotelRepository;
    }

    get mongoUserRepository(): MongoDBUserRepository {
        if (!this._mongoUserRepository) {
            this._mongoUserRepository = new MongoDBUserRepository();
        }
        return this._mongoUserRepository;
    }

    async findAllByUserUUID(user_uuid: string): Promise<Reservation[] | null> {
        try {
            const result = await this.collection.find( {user_uuid:user_uuid} ).toArray();
            console.log(result);
            return result.map((element: any) => {
                element.uuid_user
                let paymentMethod = new PaymentMethod(parseInt(element.payment.amount), element.payment.currency, element.payment.paymentType);
                let reservation = new Reservation(element.user_uuid, element.hotel_uuid, parseInt(element.room_number), element.description, new Date(element.date_start), new Date(element.date_end), paymentMethod);
                reservation.uuid = element.uuid;
                return reservation;
            });
        } catch (error) {
            return null;
        }
    }

    async create(reservation: Reservation): Promise<Reservation | null> {
        try {
            await this.collection.insertOne(reservation);
            await this.mongHotelRepository.updateRoom(reservation.getHotelUUID(), reservation.getRoomNumber(), "reserved");
            await this.mongoUserRepository.notifyUser(reservation.getUserUUID(), reservation);
            return reservation;
        } catch (error) {
            return null
        }
    }

    async findByUUID(uuid: string): Promise<Reservation | null> {
        try {
            const result = await this.collection.findOne({ uuid });
            if (result) {
                let paymentMethod = new PaymentMethod(result.payment.amount, result.payment.currency, result.payment.paymentType);
                let reservation = new Reservation(result.uuid_user, result.hotel_uuid, parseInt(result.room_number), result.description, new Date(result.date_start), new Date(result.date_end), paymentMethod);
                reservation.uuid = result.uuid;
                return result;
            }       
            return null;
        } catch (error) {
            return null;
        }
    }

    async update(uuid: string, reservation: Reservation): Promise<Reservation | null> {
        try {
            reservation.uuid = uuid;
            await this.collection.updateOne({ uuid }, { $set: reservation });
            return reservation;
        } catch (error) {
            return null;
        }
    }

    async delete(uuid:string): Promise<void> {
        try {
            let reservation = await this.findByUUID(uuid);
            if(reservation){
                await this.collection.deleteOne({ uuid });
                await this.mongHotelRepository.updateRoom(reservation.getHotelUUID(), reservation.getRoomNumber(), "free");
            }
        } catch (error) {
            throw new Error('Error deleting user');
        }
    }

    private async initializeCollection(): Promise<void> {
        this.collection = await connect("reservation");
    }
}