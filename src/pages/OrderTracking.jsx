import React, { useState } from 'react'
import { CheckCircle2, Circle, PackageSearch } from 'lucide-react'

const stages = ['Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered']

export default function OrderTracking() {
  const [orderId, setOrderId] = useState('')
  const [result, setResult] = useState(null)

  function handleSearch(e) {
    e.preventDefault()
    if (!orderId.trim()) return
    const stageIndex = Math.min(orderId.length % stages.length, stages.length - 1)
    setResult({ orderId: orderId.trim(), stageIndex })
  }

  return (
    <div className="container-page py-16 max-w-2xl">
      <div className="text-center mb-10">
        <PackageSearch size={44} className="mx-auto text-forest mb-4" />
        <h1 className="text-3xl text-forest mb-2">Track Your Order</h1>
        <p className="text-ink/60">Enter your order number to see its current status.</p>
      </div>

      <form onSubmit={handleSearch} className="flex gap-3 mb-10">
        <input
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="e.g. CG482913"
          className="input-field flex-1"
        />
        <button type="submit" className="btn-primary">Track</button>
      </form>

      {result && (
        <div className="bg-white border border-ink/10 rounded-card p-6">
          <h2 className="font-display text-xl mb-6">Order {result.orderId}</h2>
          <ol className="space-y-6">
            {stages.map((stage, idx) => {
              const done = idx <= result.stageIndex
              return (
                <li key={stage} className="flex items-center gap-3">
                  {done ? (
                    <CheckCircle2 className="text-forest" size={22} />
                  ) : (
                    <Circle className="text-ink/25" size={22} />
                  )}
                  <span className={done ? 'text-ink font-medium' : 'text-ink/40'}>{stage}</span>
                </li>
              )
            })}
          </ol>
        </div>
      )}
    </div>
  )
}