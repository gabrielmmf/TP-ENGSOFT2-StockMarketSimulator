import type OrderSide from './order-side'

interface Order {
  id: string
  price: number
  quantity: number
  quantityRemaining: number
  side: OrderSide
  createdAt: string
}

export default Order
