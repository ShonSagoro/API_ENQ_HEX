import { v4 as uuidv4 } from 'uuid';
import { ValidatableEntity } from '../Validations/ValidatableEntity';

export class Images implements ValidatableEntity {
    private uuid: string;
    private uuid_user: string;
    private url: string;

    constructor(uuid: string, url: string) {
        this.uuid =  uuidv4();
        this.url = url;
        this.uuid_user = uuid;
    }
    async validate() {
        return Promise.resolve();
    }
}