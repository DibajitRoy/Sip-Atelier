import React from 'react'
import { Link } from 'react-router-dom'
import { Leaf } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container-page py-24 text-center">
      <Leaf size={48} className="mx-auto text-forest/40 mb-4" />
      <h1 className="text-5xl font-display text-forest mb-3">404</h1>
      <p className="text-ink/60 mb-8">This page has steeped a little too long and disappeared.</p>
      <div className="flex gap-4 justify-center">
        <Link to="/" className="btn-primary">Return Home</Link>
        <Link to="/shop" className="btn-secondary">Continue Shopping</Link>
      </div>
    </div>
  )
}