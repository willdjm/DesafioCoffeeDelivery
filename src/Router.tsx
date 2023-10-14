import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { HomePage } from './pages/Home'
import { CompleteOrderPage } from './pages/CompleteOrder'
import { OrderConfirmedPage } from './pages/OrderConfirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/completeOrder" element={<CompleteOrderPage />}></Route>
        <Route path="/orderConfirmed" element={<OrderConfirmedPage />}></Route>
      </Route>
    </Routes>
  )
}
