import React from 'react'
import { type Order } from '../../interfaces'
import '../order-styles.css'

interface OrdersTableProps {
  orders: Order[]
}

export default function OrdersTable ({
  orders
}: OrdersTableProps) {
  return (
    <table className='orders-table' border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Quantity Remaining</th>
          <th>Side</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.price}</td>
            <td>{order.quantity}</td>
            <td>{order.quantityRemaining}</td>
            <td>{order.side}</td>
            <td>{order.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};
