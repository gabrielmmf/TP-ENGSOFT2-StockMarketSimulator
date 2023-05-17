import React, { useState } from 'react'
import { type Order } from '../interfaces'
import CreateOrderForm from './components/create-order-form'
import OrdersTable from './components/orders-table'
import './order-styles.css'

export default function TradingOrderMatcher () {
  const [buyOrders, setBuyOrders] = useState<Order[]>([])
  const [sellOrders, setSellOrders] = useState<Order[]>([])
  const [fulfilledOrders, setFulfilledOrders] = useState<Order[]>([])

  return (
    <div >
      <h1>Orders</h1>
      <CreateOrderForm buyOrders={buyOrders} sellOrders={sellOrders} fulfilledOrders={fulfilledOrders} setBuyOrders={setBuyOrders} setSellOrders={setSellOrders} setFulfilledOrders={setFulfilledOrders}/>
      <h1>Buy Orders</h1>
      <OrdersTable orders={buyOrders} />
      <h1>Sell Orders</h1>
      <OrdersTable orders={sellOrders} />
      <h1>Fulfilled Orders</h1>
      <OrdersTable orders={fulfilledOrders} />
    </div>
  )
}
