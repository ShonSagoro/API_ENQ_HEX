import { ServiceInterface } from "../../Domain/Port/ServiceInterface";

export class DeleteServiceCase{
    constructor(readonly serviceInterface: ServiceInterface){}

    async execute(uuid: string): Promise<void> {
       await this.serviceInterface.delete(uuid);
    }
}