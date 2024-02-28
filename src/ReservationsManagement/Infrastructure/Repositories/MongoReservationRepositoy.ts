import { connect } from "../../../database/mongodb";
import { Collection } from "mongodb";
import { ReservationInterface } from "../../Domain/Port/ReservationInterface";
import { Reservation } from "../../Domain/Entities/Reservation";


export class MongoDBReservationRepository implements ReservationInterface{
    private collection!: Collection|any;
    constructor() {
        this.initializeCollection();
    }

    private async initializeCollection(): Promise<void> {
        this.collection = await connect("reservation");
    }

    async create(reservation: Reservation, user_uuid: string): Promise<Reservation | null> {
        try {
            const newReservationCreated = new Reservation(user_uuid, reservation.description, reservation.date_start, reservation.date_end, reservation.payment);
            await this.collection.insertOne(newReservationCreated);
            return reservation;
        } catch (error) {
            return null
        }
    }

    async findByUUID(uuid: string): Promise<Reservation | null> {
        try {
            const result = await this.collection.findOne({ uuid });
            if (result) {
                let reservation = new Reservation(result.date, result.hour, result.duration, result.status, result.user_uuid);
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

}