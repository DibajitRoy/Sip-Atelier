import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { formatPrice } from '../utils/currency.js'

export default function OrderConfirmation() {
  const [order, setOrder] = useState(null)

  useEffect(() => {
    const saved = sessionStorage.getItem('Sip Atelier-last-order')
    if (saved) setOrder(JSON.parse(saved))
  }, [])

  if (order === null) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="container-page py-16 max-w-2xl">
      <div className="text-center mb-10">
        <CheckCircle2 size={56} className="mx-auto text-forest mb-4" />
        <h1 className="text-3xl text-forest mb-2">Order Placed Successfully!</h1>
        <p className="text-ink/60">Thank you, {order.form.fullName}. We&apos;ve received your order.</p>
      </div>

      <div className="bg-white border border-ink/10 rounded-card p-6 mb-6">
        <div className="flex justify-between mb-4">
          <span className="text-ink/60 text-sm">Order Number</span>
          <span className="font-display text-lg text-forest">{order.orderId}</span>
        </div>
        <ul className="space-y-2 mb-4">
          {order.items.map((item) => (
            <li key={item.key} className="flex justify-between text-sm">
              <span className="text-ink/70">{item.name} ({item.weight}) &times; {item.quantity}</span>
              <span>{formatPrice(item.unitPrice * item.quantity)}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-ink/10 pt-4 flex justify-between font-display text-lg">
          <span>Total</span>
          <span>{formatPrice(order.total)}</span>
        </div>
      </div>

      <div className="bg-sage-light/20 rounded-card p-6 mb-8">
        <h2 className="font-display text-lg mb-2">Delivery Information</h2>
        <p className="text-sm text-ink/70">{order.form.address}, {order.form.district}, {order.form.division}</p>
        <p className="text-sm text-ink/70 mt-1">Phone: {order.form.phone}</p>
        <p className="text-sm text-forest mt-3">
          Estimated delivery: {order.form.delivery === 'express' ? '1–2 business days' : '3–5 business days'}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/track-order" className="btn-primary">Track Order</Link>
        <Link to="/shop" className="btn-secondary">Continue Shopping</Link>
      </div>
    </div>
  )
}