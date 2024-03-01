import Stripe from 'stripe';
import { PaymentMethod } from "../../Domain/Entities/PaymentMethod";
import PaymentMethodService from "../../Domain/services/PaymentMethodService";
import dotenv from 'dotenv';
dotenv.config();

const secret = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(secret!, {
    apiVersion: '2023-10-16',
});

export default class PaymentMethodStripeService implements PaymentMethodService {
    async pay(paymentMethod: PaymentMethod): Promise<boolean> {
        try{
            const paymentIntent = await stripe.paymentIntents.create({
                amount: paymentMethod.getAmount(), // Monto en centavos
                currency: 'usd',
                payment_method_types: ['card'],
            });

            await stripe.paymentIntents.cancel(paymentIntent.id);
            return true;
        }catch(e){
            return false;
        }
    }
    async cancel(paymentMethod: PaymentMethod): Promise<boolean> {
        return Promise.resolve(true);
    }
}