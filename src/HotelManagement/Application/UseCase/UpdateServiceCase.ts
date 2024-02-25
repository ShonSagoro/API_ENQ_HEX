import { Service } from "../../Domain/Entities/Service";
import { ServiceInterface } from "../../Domain/Port/ServiceInterface";

export class UpdateServiceCase{
    constructor(readonly serviceInterface: ServiceInterface){}

    async excute(uuid: string, service: Service): Promise<Service|null> {
       return await this.serviceInterface.update(uuid, service);
    }
}