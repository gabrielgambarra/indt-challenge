export class Product {
    name: string;
    image: Image;
    id: string;
    ratingAverage: number;
    ratingQuantity: number;
    ratingReviews: number;
    paymentOptions: PaymentOptions;
    totalOffers: number;
    prime: boolean;
    price: number;
    currency: string;
    offerPrice: string;
    installment: string;
    productInfo: null;
    condition: string;
    sellerId: string;
    sellerName: string;
    skuId: string;
}

export interface Image {
    large: string;
    extraLarge: string;
}

export interface PaymentOptions {
    BOLETO: Boleto;
    BPAY: Bpay;
    CARTAO: Bpay;
    CARTAO_MARCA: Bpay;
}

export interface Boleto {
    price: number;
    discount: Discount;
}

export interface Discount {
    value: number;
    rate: number;
}

export interface Bpay {
    price: number;
    discount: Discount;
    cashback: null;
    installments: Installments;
}

export interface Installments {
    minQuantity: MinQuantity;
    maxQuantity: MaxQuantity;
}

export interface MaxQuantity {
    quantity: number;
    total: number;
    value: number;
    interestRate: number;
}

export interface MinQuantity {
    quantity: number;
    total: number;
    value: number;
    interestRate: number;
    discount: Discount;
    cashback: null;
}
