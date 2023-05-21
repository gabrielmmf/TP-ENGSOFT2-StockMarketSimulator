import { type Order } from '../interfaces'
import OrderSide from '../interfaces/order/order-side'
import type CreateOrderRequest from '../interfaces/order/create-order-request'

const insertAndSortOrders = (orders: Order[], order: Order) => {
  orders.unshift(order)
  orders.sort((order1, order2) => order1.price - order2.price)
}

export const createOrder = (orderRequest: CreateOrderRequest) => {
  matchOrder(orderRequest)
  if (orderRequest.order.quantityRemaining > 0) {
    if (orderRequest.order.side === OrderSide.BUY) {
      insertAndSortOrders(orderRequest.buyOrders, orderRequest.order)
    } else {
      insertAndSortOrders(orderRequest.sellOrders, orderRequest.order)
    }
  } else {
    orderRequest.fulfilledOrders.push(orderRequest.order)
  }
  return orderRequest
}

const matchOrder = (orderRequest: CreateOrderRequest) => {
  if (orderRequest.order.quantityRemaining === 0) {
    return
  }
  const isBuy = orderRequest.order.side === OrderSide.BUY
  const matchingOrderList = isBuy ? orderRequest.sellOrders : orderRequest.buyOrders
  const matchingOrder = matchingOrderList.pop()
  if (matchingOrder == null) {
    return
  }
  if (!(isBuy
    ? matchingOrder.price <= orderRequest.order.price
    : orderRequest.order.price <= matchingOrder.price)) {
    matchingOrderList.push(matchingOrder)
    return
  }
  const filledQuantity = Math.min(matchingOrder.quantityRemaining, orderRequest.order.quantityRemaining)
  orderRequest.order.quantityRemaining -= filledQuantity
  matchingOrder.quantityRemaining -= filledQuantity
  if (matchingOrder.quantityRemaining > 0) {
    matchingOrderList.push(matchingOrder)
  } else {
    orderRequest.fulfilledOrders.push(matchingOrder)
  }
  matchOrder(orderRequest)
}
