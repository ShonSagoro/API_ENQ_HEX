import { v4 as uuidv4 } from 'uuid';
import { ValidatableEntity } from '../Validations/ValidatableEntity';
import { Images } from './Images';


export class Hotel implements ValidatableEntity {

    public uuid: string;
    
    public name: string;

    public address: string;

    public description: string;

    public rating: number;

    public images: Images[];


    constructor(name: string, address: string, description: string, rating: number) {
        this.uuid = uuidv4();
        this.name=name
        this.address=address
        this.description=description
        this.rating=rating
        this.images=[]
    }

    async validate() {
        return Promise.resolve();
    }
}