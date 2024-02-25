
import { Service } from "../Entities/Service"

export interface ServiceInterface {
    findByUUID(uuid: string): Promise<Service | null>;
    delete(uuid: string): Promise<void>;
    update(uuid:string, user: Service): Promise<Service | null>;
    list(): Promise<Service[]|null>;
    register(Service: Service): Promise<Service | null>;
}
