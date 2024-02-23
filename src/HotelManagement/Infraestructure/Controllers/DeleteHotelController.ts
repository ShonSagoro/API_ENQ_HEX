export class DeleteUserController{
    constructor(readonly deleteHotelCase: any){}
    async execute(uuid: string): Promise<void> {
        await this.deleteHotelCase.execute(uuid);
    }
    
}