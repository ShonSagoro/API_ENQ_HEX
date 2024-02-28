
export default class Room{
    private number: number;
    private status: string;
    private price: number;
    private type: string;

    constructor(number: number, status: string, price: number, type: string) {
        this.number = number;
        this.status = status;
        this.price = price;
        this.type = type;
    }

    public getNumber(): number {
        return this.number;
    }

    public getStatus(): string {
        return this.status;
    }

    public getPrice(): number {
        return this.price;
    }

    public getType(): string {
        return this.type;
    }

    public setNumber(number: number): void {
        this.number = number;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public setType(type: string): void {
        this.type = type;
    }
}