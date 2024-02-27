import { ValorationInterface } from "../Domain/Port/ValorationInterface";
import { User } from "../../UserManagement/Domain/Entities/User";

export class GetValorationUseCase {
    constructor(private readonly valorationInterface: ValorationInterface) {}

    async execute(user: User, valorationId: string): Promise<any> {
        return await this.valorationInterface.get(user, valorationId);
    }
}
