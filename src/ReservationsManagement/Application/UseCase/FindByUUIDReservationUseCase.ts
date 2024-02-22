import { Reservation } from "../../Domain/Entities/Reservation";
import { ReservationInterface } from "../../Domain/Port/ReservationInterface";

export class FindByUUIDReservationUseCase {
    constructor(readonly reservationInterface: ReservationInterface) {}

    async execute(uuid: string): Promise<Reservation | null>  {
        return this.reservationInterface.findByUUID(uuid);
    }
}