import { v4 as uuidv4 } from 'uuid';
import { ValidatableEntity } from '../Validations/ValidatableEntity';
import { PaymentMethod } from './PaymentMethod'; // Import the 'PaymentMethod' type from the appropriate module

export class Reservation implements ValidatableEntity {
    public uuid: string;
    private user_uuid: string;
    private hotel_uuid: string;
    private room_number: number;
    private description: string;
    private date_start: Date;
    private date_end: Date;
    private payment: PaymentMethod;

    public constructor(user_uuid: string, hotel_uuid: string, room_number: number, description: string, date_start: Date, date_end: Date, payment: PaymentMethod) {
        this.uuid = uuidv4();
        this.description = description;
        this.user_uuid = user_uuid;
        this.hotel_uuid = hotel_uuid;
        this.room_number = room_number;
        this.date_start = date_start;
        this.date_end = date_end;
        this.payment = payment;
    }

    public getUserUUID(): string {
        return this.user_uuid;
    }

    public getHotelUUID(): string {
        return this.hotel_uuid;
    }

    public getRoomNumber(): number {
        return this.room_number;
    }

    public getDescription(): string {
        return this.description;
    }

    public getDateStart(): Date {
        return this.date_start;
    }

    public getDateEnd(): Date {
        return this.date_end;
    }

    public getPayment(): PaymentMethod {
        return this.payment;
    }

    public setUuid(uuid: string): void {
        this.uuid = uuid;
    }

    public setUserUUID(user_uuid: string): void {
        this.user_uuid = user_uuid;
    }

    public setHotelUUID(hotel_uuid: string): void {
        this.hotel_uuid = hotel_uuid;
    }

    public setRoomNumber(room_number: number): void {
        this.room_number = room_number;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public setDateStart(date_start: Date): void {
        this.date_start = date_start;
    }

    public setDateEnd(date_end: Date): void {
        this.date_end = date_end;
    }

    public setPayment(payment: PaymentMethod): void {
        this.payment = payment;
    }

    async validate() {
        return Promise.resolve();
    }

}