import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TradingOrderMatcher from './components/trading-order-matcher'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} key={'/'} element={<TradingOrderMatcher />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
