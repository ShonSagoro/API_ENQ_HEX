import { Service } from "../../Domain/Entities/Service";
import { ServiceInterface } from "../../Domain/Port/ServiceInterface";

export class ListServiceCase{
    constructor(readonly serviceInterface: ServiceInterface){}

    async excute(): Promise<Service[]| null> {
       return await this.serviceInterface.list();
    }
}