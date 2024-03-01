import { PaymentMethod } from "../Entities/PaymentMethod";

export default interface PaymentMethodService {
    pay(paymentMethod: PaymentMethod): Promise<boolean>;
    cancel(paymentMethod: PaymentMethod): Promise<boolean>;
}