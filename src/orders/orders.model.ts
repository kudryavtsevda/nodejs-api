export const OrderStatuses = { New: 0, Preparing: 1, Delivering: 2, Ready: 3 } as const;
export type OrderStatus = typeof OrderStatuses[keyof typeof OrderStatuses];

export interface Order {
  id: number;
  userId: number;
  addressId: number;
  status: OrderStatus;
  orderItems: Partial<OrderItem>[];
}

export interface OrderItem {
  productId: number;
  orderId: number;
  count: number;
}
