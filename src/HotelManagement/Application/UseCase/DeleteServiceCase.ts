import { ServiceInterface } from "../../Domain/Port/ServiceInterface";

export class DeleteServiceCase{
    constructor(readonly serviceInterface: ServiceInterface){}

    async excute(uuid: string): Promise<void> {
       return await this.serviceInterface.delete(uuid);
    }
}