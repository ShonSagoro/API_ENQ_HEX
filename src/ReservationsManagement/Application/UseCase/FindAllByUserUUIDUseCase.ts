import { Reservation } from "../../Domain/Entities/Reservation";
import { ReservationInterface } from "../../Domain/Port/ReservationInterface";

export class FindAllByUserUUIDUseCase {
    constructor(readonly reservationInterface: ReservationInterface) {}

    async execute(uuid_user:string): Promise<Reservation[] | null> {
        return this.reservationInterface.findAllByUserUUID(uuid_user);
    }
}