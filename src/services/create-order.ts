import { type Order } from '../interfaces'
import OrderSide from '../interfaces/order/order-side'

interface CreateOrderRequest { buyOrders: Order[], sellOrders: Order[], fulfilledOrders: Order[], order: Order }

export const createOrder = ({ buyOrders, sellOrders, fulfilledOrders, order }: CreateOrderRequest) => {
  matchOrder({ buyOrders, sellOrders, fulfilledOrders, order })
  if (order.quantityRemaining > 0) {
    if (order.side === OrderSide.BUY) {
      buyOrders.unshift(order)
      buyOrders.sort((order1, order2) => order1.price - order2.price)
    } else {
      sellOrders.unshift(order)
      sellOrders.sort((order1, order2) => order2.price - order1.price)
    }
  } else {
    fulfilledOrders.push(order)
  }
  return { buyOrders, sellOrders, fulfilledOrders }
}

const matchOrder = ({ buyOrders, sellOrders, fulfilledOrders, order }: { buyOrders: Order[], sellOrders: Order[], fulfilledOrders: Order[], order: Order }) => {
  if (order.quantityRemaining === 0) {
    return
  }
  const isBuy = order.side === OrderSide.BUY
  const matchingOrderList = isBuy ? sellOrders : buyOrders
  const matchingOrder = matchingOrderList.pop()
  if (matchingOrder == null) {
    return
  }
  if (!(isBuy
    ? matchingOrder.price <= order.price
    : order.price <= matchingOrder.price)) {
    matchingOrderList.push(matchingOrder)
    return
  }
  const filledQuantity = Math.min(matchingOrder.quantityRemaining, order.quantityRemaining)
  order.quantityRemaining -= filledQuantity
  matchingOrder.quantityRemaining -= filledQuantity
  if (matchingOrder.quantityRemaining > 0) {
    matchingOrderList.push(matchingOrder)
  } else {
    fulfilledOrders.push(matchingOrder)
  }
  matchOrder({ buyOrders, sellOrders, fulfilledOrders, order })
}
