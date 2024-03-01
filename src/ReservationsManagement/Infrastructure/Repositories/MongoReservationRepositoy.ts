import { Collection } from "mongodb";
import { ReservationInterface } from "../../Domain/Port/ReservationInterface";
import { Reservation } from "../../Domain/Entities/Reservation";
import { PaymentMethod } from "../../Domain/Entities/PaymentMethod";
import { connect } from "../../../Database/mongodb";


export class MongoDBReservationRepository implements ReservationInterface{

    private collection!: Collection|any;

    constructor() {
        this.initializeCollection();
    }

    async findAllByUserUUID(userUUID: string): Promise<Reservation[] | null> {
        try {
            const result = await this.collection.find({ uuid_user: userUUID });
            return result.map((element: any) => {
                let paymentMethod = new PaymentMethod(element.amount, element.currency, element.paymentType);
                let reservation = new Reservation(element.uuid_user, element.uuid_room, element.description, element.date, element.start_time, element.end_time, paymentMethod);
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
            return reservation;
        } catch (error) {
            return null
        }
    }

    async findByUUID(uuid: string): Promise<Reservation | null> {
        try {
            const result = await this.collection.findOne({ uuid });
            if (result) {
                let paymentMethod = new PaymentMethod(result.amount, result.currency, result.paymentType);
                let reservation = new Reservation(result.uuid_user, result.uuid_room, result.description, result.date, result.start_time, result.end_time, paymentMethod);
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
            await this.collection.deleteOne({ uuid });
        } catch (error) {
            throw new Error('Error deleting user');
        }
    }

    private async initializeCollection(): Promise<void> {
        this.collection = await connect("reservation");
    }
}