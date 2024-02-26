import { v4 as uuidv4 } from 'uuid';
import { ValidatableEntity } from '../Validations/ValidatableEntity';

export class Images implements ValidatableEntity {
    public uuid: string;
    private uuid_hotel: string;
    private url: string;

    constructor(uuid: string, url: string) {
        this.uuid =  uuidv4();
        this.url = url;
        this.uuid_hotel = uuid;
    }
    async validate() {
        return Promise.resolve();
    }
    getUUID(): string {
        return this.uuid;
    }
    getUUIDHotel(): string {
        return this.uuid_hotel;
    }
    getURL(): string {
        return this.url;
    }
    setUUID(uuid: string): void {
        this.uuid = uuid;
    }
    setUUIDHotel(uuid: string): void {
        this.uuid_hotel = uuid;
    }
    setURL(url: string): void {
        this.url = url;
    }

}