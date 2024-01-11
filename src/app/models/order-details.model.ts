
export interface OrderDetailDto {
    orderId: string;
    datePurchased: Date;
    totalPrice: number;
    items: OrderItemDetailDto[];
}

export interface OrderItemDetailDto {
    productId: string;
    productName: string;
    productPrice: number;
    quantity: number;
}
