import { Reservation } from "../../Domain/Entities/Reservation";
import { ReservationInterface } from "../../Domain/Port/ReservationInterface";

export class UpdateReservationUseCase {
    constructor(readonly reservationInterface: ReservationInterface) {}

    async execute(uuid: string, reservation: Reservation): Promise<Reservation | null> {
        return this.reservationInterface.update(uuid, reservation);
    }
}