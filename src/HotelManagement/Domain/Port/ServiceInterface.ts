
import { Service } from "../Entities/Service"

export interface ServiceInterface {
    findByUUID(uuid: string): Promise<Service | null>; //TODO: add controller
    delete(uuid: string): Promise<void>;//TODO: add controller
    update(uuid:string, user: Service): Promise<Service | null>; //TODO: add controller
    list(): Promise<Service[]|null>;//TODO: add controller
    register(Service: Service): Promise<Service | null>;//TODO: add controller
}
