import { Service } from "../../Domain/Entities/Service";
import { ServiceInterface } from "../../Domain/Port/ServiceInterface";

export class GetByUuuidServiceCase{
    constructor(readonly serviceInterface: ServiceInterface){}

    async excute(uuid: string): Promise<Service | null> {
       return await this.serviceInterface.findByUUID(uuid);
    }
}