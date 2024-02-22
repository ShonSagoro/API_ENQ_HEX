import { v4 as uuidv4 } from 'uuid';
import { ValidatableEntity } from '../Validations/ValidatableEntity';


export class Hotel implements ValidatableEntity {

    public uuid: string;
    
    public name: string;

    public location: string;

    public description: string;

    public rating: number;


    constructor(name: string, location: string, description: string, rating: number) {
        this.uuid = uuidv4();
        this.name=name
        this.location=location
        this.description=description
        this.rating=rating
    }

    async validate() {
        return Promise.resolve();
    }
}