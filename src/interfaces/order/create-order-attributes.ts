import type Order from './order'

type CreateOrderAttributes = Omit<Order, 'createdAt' | 'id' | 'quantityRemaining'>

export default CreateOrderAttributes
