import { ReservationInterface } from "../Domain/Port/ReservationInterface";

export class DeleteReservationUseCase {
    constructor(readonly reservationInterface: ReservationInterface) {}

    async execute(uuid: string): Promise<void> {
        await this.reservationInterface.delete(uuid);
    }
}