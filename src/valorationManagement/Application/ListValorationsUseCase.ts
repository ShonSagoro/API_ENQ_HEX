import { ValorationInterface } from "../Domain/Port/ValorationInterface";
import { User } from "../../UserManagement/Domain/Entities/User";

export class ListValorationsUseCase {
    constructor(private readonly valorationInterface: ValorationInterface) {}

    async execute(user: User): Promise<any[]> {
        return await this.valorationInterface.list(user);
    }
}
