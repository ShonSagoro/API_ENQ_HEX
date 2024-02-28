import { ValorationInterface } from "../Domain/Port/ValorationInterface";
import { User } from "../../UserManagement/Domain/Entities/User";

export class DeleteValorationUseCase {
    constructor(private readonly valorationInterface: ValorationInterface) {}

    async execute(user: User, valorationId: string): Promise<void> {
        await this.valorationInterface.delete(user, valorationId);
    }
}
