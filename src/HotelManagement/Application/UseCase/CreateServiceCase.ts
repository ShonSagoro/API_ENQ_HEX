import { Service } from "../../Domain/Entities/Service";
import { ServiceInterface } from "../../Domain/Port/ServiceInterface";

export class CreateServiceCase{
    constructor(readonly serviceInterface: ServiceInterface){}

    async excute(service: Service): Promise<Service| null> {
       return await this.serviceInterface.register(service);
    }
}