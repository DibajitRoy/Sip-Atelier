import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../utils/currency.js'

const DELIVERY_CHARGE = 80
const FREE_DELIVERY_THRESHOLD = 1000

export default function Cart() {
  const { items, updateQuantity, removeFromCart, subtotal } = useCart()
  const [coupon, setCoupon] = useState('')
  const [appliedDiscount, setAppliedDiscount] = useState(0)
  const [couponMessage, setCouponMessage] = useState('')
  const navigate = useNavigate()

  const delivery = subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0 ? 0 : DELIVERY_CHARGE
  const total = subtotal - appliedDiscount + delivery

  function applyCoupon(e) {
    e.preventDefault()
    if (coupon.trim().toUpperCase() === 'TEA10') {
      setAppliedDiscount(Math.round(subtotal * 0.1))
      setCouponMessage('Coupon applied — 10% off your order.')
    } else {
      setAppliedDiscount(0)
      setCouponMessage('Invalid coupon code.')
    }
  }

  if (items.length === 0) {
    return (
      <div className="container-page py-24 text-center">
        <ShoppingBag size={48} className="mx-auto text-ink/20 mb-4" />
        <h1 className="font-display text-2xl text-ink mb-2">Your cart is empty</h1>
        <p className="text-ink/60 mb-6">Looks like you haven&apos;t added any tea yet.</p>
        <Link to="/shop" className="btn-primary">Continue Shopping</Link>
      </div>
    )
  }

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl text-forest mb-8">Shopping Cart</h1>
      <div className="grid lg:grid-cols-[1fr_360px] gap-10">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.key} className="flex gap-4 bg-white border border-ink/10 rounded-card p-4">
              <img src={item.image} alt={item.name} className="h-24 w-24 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-display text-lg text-ink">{item.name}</h3>
                    <p className="text-sm text-ink/50">Weight: {item.weight}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.key)}
                    aria-label="Remove item"
                    className="text-ink/40 hover:text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="inline-flex items-center border border-ink/20 rounded-full">
                    <button
                      onClick={() => updateQuantity(item.key, item.quantity - 1)}
                      className="h-8 w-8 flex items-center justify-center text-ink/70"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.key, item.quantity + 1)}
                      className="h-8 w-8 flex items-center justify-center text-ink/70"
                      aria-label="Increase quantity"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                  <span className="font-display text-forest">{formatPrice(item.unitPrice * item.quantity)}</span>
                </div>
              </div>
            </div>
          ))}
          <Link to="/shop" className="inline-block text-sm text-forest font-medium hover:underline mt-2">
            &larr; Continue Shopping
          </Link>
        </div>

        <div className="bg-white border border-ink/10 rounded-card p-6 h-fit">
          <h2 className="font-display text-xl text-ink mb-4">Order Summary</h2>
          <form onSubmit={applyCoupon} className="flex gap-2 mb-5">
            <input
              type="text"
              placeholder="Coupon code (try TEA10)"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="input-field flex-1"
            />
            <button type="submit" className="btn-secondary px-4">Apply</button>
          </form>
          {couponMessage && (
            <p className={`text-xs mb-4 ${appliedDiscount ? 'text-forest' : 'text-red-500'}`}>{couponMessage}</p>
          )}

          <div className="space-y-2 text-sm text-ink/70">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            {appliedDiscount > 0 && (
              <div className="flex justify-between text-forest"><span>Discount</span><span>-{formatPrice(appliedDiscount)}</span></div>
            )}
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>{delivery === 0 ? 'Free' : formatPrice(delivery)}</span>
            </div>
          </div>
          <div className="border-t border-ink/10 mt-4 pt-4 flex justify-between font-display text-lg text-ink">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <button onClick={() => navigate('/checkout')} className="btn-primary w-full mt-6">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}