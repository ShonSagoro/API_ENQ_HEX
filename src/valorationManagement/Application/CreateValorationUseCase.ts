import { ValorationInterface } from "../Domain/Port/ValorationInterface";
import { User } from "../../UserManagement/Domain/Entities/User";

export class CreateValorationUseCase {
    constructor(private readonly valorationInterface: ValorationInterface) {}

    async execute(user: User, valorationData: any): Promise<void> {
        await this.valorationInterface.create(user, valorationData);
    }
}
