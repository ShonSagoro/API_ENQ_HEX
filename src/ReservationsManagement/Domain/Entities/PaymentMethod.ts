import { v4 as uuidv4 } from 'uuid';
enum PaymentType {
    Paypay = "Paypal",
    Stripe = "Stripe",
}

const toPaymentType=(value: string): PaymentType | null =>{
    for (let key in PaymentType) {
        if (PaymentType[key as keyof typeof PaymentType] === value) {
            return PaymentType[key as keyof typeof PaymentType];
        }
    }
    return null;
}

const fromPaymentType=(type: PaymentType): string=> {
    return type;
}

class PaymentMethod {
    public uuid: string;
    private amount: number;
    private currency: string;
    private paymentType: PaymentType;

    constructor(amount: number, currency: string, paymentType: string) {
        this.uuid = uuidv4();
        this.amount = amount;
        this.currency = currency;
        this.paymentType = toPaymentType(paymentType) || PaymentType.Paypay;
    }

    public getAmount(): number {
        return this.amount;
    }

    public getCurrency(): string {
        return this.currency;
    }

    public getPaymentType(): PaymentType {
        return this.paymentType;
    }

    public setUuid(uuid: string): void {
        this.uuid = uuid;
    }

    public setAmount(amount: number): void {
        this.amount = amount;
    }

    public setCurrency(currency: string): void {
        this.currency = currency;
    }

    public setPaymentType(paymentType: string): void {
        this.paymentType = toPaymentType(paymentType) || PaymentType.Paypay;
    }

    public toObject(): any {
        return {
            uuid: this.uuid,
            amount: this.amount,
            currency: this.currency,
            paymentType: fromPaymentType(this.paymentType),
        };
    }

}

export {PaymentMethod, toPaymentType, fromPaymentType}