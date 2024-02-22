import { v4 as uuidv4 } from 'uuid';
import { ValidatableEntity } from '../Validations/ValidatableEntity';

export class Reservation implements ValidatableEntity {
    public uuid: string;
    public description: string;
    public date_start: Date;
    public date_end: Date;
    public payment: boolean;

    public constructor(description: string, date_start: Date, date_end: Date, payment: boolean) {
        this.uuid = uuidv4();
        this.description = description;
        this.date_start = date_start;
        this.date_end = date_end;
        this.payment = payment;
    }

    async validate() {
        return Promise.resolve();
    }
    
}