import { Service } from "../../Domain/Entities/Service";
import { ServiceInterface } from "../../Domain/Port/ServiceInterface";

export class GetByUuidServiceCase{
    constructor(readonly serviceInterface: ServiceInterface){}

    async execute(uuid: string): Promise<Service | null> {
       return await this.serviceInterface.findByUUID(uuid);
    }
}