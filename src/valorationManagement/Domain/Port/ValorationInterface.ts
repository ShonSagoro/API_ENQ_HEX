import { User } from "../../../UserManagement/Domain/Entities/User";

export interface ValorationInterface {
    create(user: User, valorationData: any): Promise<void>;
    delete(user: User, valorationId: string): Promise<void>;
    get(user: User, valorationId: string): Promise<any>;
    list(user: User): Promise<any[]>;
}
