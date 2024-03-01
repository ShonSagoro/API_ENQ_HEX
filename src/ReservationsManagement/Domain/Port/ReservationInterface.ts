import { Reservation } from "../Entities/Reservation";

export interface ReservationInterface {
    create(reservation: Reservation): Promise<Reservation | null >;
    findByUUID(uuid: string): Promise<Reservation | null>;
    delete(uuid: string): Promise<void>;
    update(uuid: string, reservation: Reservation): Promise<Reservation | null>;
    findAllByUserUUID(userUUID: string): Promise<Reservation[] | null>;
}
