import { ValidatableEntity } from "../Validations/ValidatableEntity";
import { v4 as uuidv4 } from 'uuid';

export class Service implements ValidatableEntity{
    public uuid: string;
    private title: string;
    private description: string;
    

    constructor( title: string, description: string) {
        this.uuid = uuidv4();
        this.title = title;
        this.description = description;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string) {
        this.description = description;
    }

    async validate (){
        return Promise.resolve();        
    };
}