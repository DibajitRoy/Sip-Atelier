import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../utils/currency.js'

const divisions = ['Dhaka', 'Chattogram', 'Rajshahi', 'Khulna', 'Barishal', 'Sylhet', 'Rangpur', 'Mymensingh']

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    division: '',
    district: '',
    address: '',
    delivery: 'standard',
    payment: 'cod',
    notes: '',
  })
  const [errors, setErrors] = useState({})

  const delivery = form.delivery === 'express' ? 150 : subtotal >= 1000 ? 0 : 80
  const total = subtotal + delivery

  if (items.length === 0) {
    return <Navigate to="/cart" replace />
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function validate() {
    const errs = {}
    if (!form.fullName.trim()) errs.fullName = 'Full name is required.'
    if (!/^01[3-9]\d{8}$/.test(form.phone.trim())) errs.phone = 'Enter a valid Bangladeshi phone number.'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email address.'
    if (!form.division) errs.division = 'Please select a division.'
    if (!form.district.trim()) errs.district = 'District is required.'
    if (!form.address.trim()) errs.address = 'Delivery address is required.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    const orderId = `CG${Math.floor(100000 + Math.random() * 900000)}`
    const order = { orderId, form, items, total, date: new Date().toISOString() }
    sessionStorage.setItem('Sip Atelier-last-order', JSON.stringify(order))
    clearCart()
    navigate('/order-confirmation')
  }

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl text-forest mb-8">Checkout</h1>
      <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1fr_360px] gap-10">
        <div className="space-y-6">
          <div className="bg-white border border-ink/10 rounded-card p-6">
            <h2 className="font-display text-xl mb-4">Contact & Delivery</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} error={errors.fullName} />
              <Field label="Phone Number" name="phone" value={form.phone} onChange={handleChange} error={errors.phone} placeholder="01XXXXXXXXX" />
              <Field label="Email (optional)" name="email" value={form.email} onChange={handleChange} error={errors.email} />
              <div>
                <label className="text-sm text-ink/70 mb-1 block">Division</label>
                <select name="division" value={form.division} onChange={handleChange} className="input-field">
                  <option value="">Select division</option>
                  {divisions.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
                {errors.division && <p className="text-xs text-red-500 mt-1">{errors.division}</p>}
              </div>
              <Field label="District" name="district" value={form.district} onChange={handleChange} error={errors.district} />
            </div>
            <div className="mt-4">
              <label className="text-sm text-ink/70 mb-1 block">Delivery Address</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                rows={3}
                className="input-field"
                placeholder="House, road, area"
              />
              {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
            </div>
            <div className="mt-4">
              <label className="text-sm text-ink/70 mb-1 block">Order Notes (optional)</label>
              <textarea name="notes" value={form.notes} onChange={handleChange} rows={2} className="input-field" />
            </div>
          </div>

          <div className="bg-white border border-ink/10 rounded-card p-6">
            <h2 className="font-display text-xl mb-4">Delivery Option</h2>
            <div className="space-y-2">
              <RadioOption name="delivery" value="standard" current={form.delivery} onChange={handleChange} label="Standard Delivery (3–5 days)" sub="Free over ৳1,000, otherwise ৳80" />
              <RadioOption name="delivery" value="express" current={form.delivery} onChange={handleChange} label="Express Delivery (1–2 days)" sub="৳150 flat rate" />
            </div>
          </div>

          <div className="bg-white border border-ink/10 rounded-card p-6">
            <h2 className="font-display text-xl mb-4">Payment Method</h2>
            <div className="space-y-2">
              <RadioOption name="payment" value="cod" current={form.payment} onChange={handleChange} label="Cash on Delivery" sub="Pay when your order arrives" />
              <RadioOption name="payment" value="online" current={form.payment} onChange={handleChange} label="Online Payment" sub="bKash, Nagad, or card (configurable)" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-ink/10 rounded-card p-6 h-fit">
          <h2 className="font-display text-xl mb-4">Order Summary</h2>
          <ul className="space-y-3 mb-4 max-h-64 overflow-y-auto">
            {items.map((item) => (
              <li key={item.key} className="flex justify-between text-sm">
                <span className="text-ink/70">{item.name} ({item.weight}) &times; {item.quantity}</span>
                <span>{formatPrice(item.unitPrice * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-2 text-sm text-ink/70 border-t border-ink/10 pt-4">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            <div className="flex justify-between"><span>Delivery</span><span>{delivery === 0 ? 'Free' : formatPrice(delivery)}</span></div>
          </div>
          <div className="border-t border-ink/10 mt-4 pt-4 flex justify-between font-display text-lg">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <button type="submit" className="btn-primary w-full mt-6">Place Order</button>
        </div>
      </form>
    </div>
  )
}

function Field({ label, name, value, onChange, error, placeholder }) {
  return (
    <div>
      <label className="text-sm text-ink/70 mb-1 block">{label}</label>
      <input name={name} value={value} onChange={onChange} placeholder={placeholder} className="input-field" />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}

function RadioOption({ name, value, current, onChange, label, sub }) {
  return (
    <label className={`flex items-start gap-3 border rounded-xl p-4 cursor-pointer ${current === value ? 'border-forest bg-forest/5' : 'border-ink/15'}`}>
      <input type="radio" name={name} value={value} checked={current === value} onChange={onChange} className="mt-1 accent-forest" />
      <span>
        <span className="block text-sm font-medium text-ink">{label}</span>
        <span className="block text-xs text-ink/50">{sub}</span>
      </span>
    </label>
  )
}