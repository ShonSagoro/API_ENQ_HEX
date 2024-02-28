import { v4 as uuidv4 } from 'uuid';
import { ValidatableEntity } from '../Validations/ValidatableEntity';
import { Images } from './Images';
import Room from './Room';


export class Hotel implements ValidatableEntity {

    public uuid: string;
    
    private name: string;

    private address: string;

    private description: string;

    private rating: number;

    private images: Images[];
    
    private rooms: Room[];
    
    
    
    constructor(name: string, address: string, description: string) {
        this.uuid = uuidv4();
        this.name = name;
        this.address = address;
        this.description = description;
        this.rating = 0;
        this.images = [];
        this.rooms = [];
    }
    
    getRooms(): Room[] {
        return this.rooms;
    }

    setRooms(rooms: Room[]): void {
        this.rooms = rooms;
    }
    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getAddress(): string {
        return this.address;
    }

    setAddress(address: string): void {
        this.address = address;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    getRating(): number {
        return this.rating;
    }

    setRating(rating: number): void {
        this.rating = rating;
    }
    
    getImages(): Images[] {
        return this.images;
    }

    setImages(images: Images[]): void {
        this.images = images;
    }

    async validate() {
        return Promise.resolve();
    }
}