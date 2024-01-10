export interface OrderItemDto {
  productID: string;
  quantity: number;
}

export interface OrderDto {
  items: OrderItemDto[];
}

export class Order{
  constructor(
      public id:string,
      public datePurchased: string,
      public totalPrice: number
  ) {
  }
}
