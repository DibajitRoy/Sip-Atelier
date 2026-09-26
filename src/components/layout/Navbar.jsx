import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Leaf, Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import { useCart } from '../../context/CartContext.jsx'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { itemCount } = useCart()

  const linkClass = ({ isActive }) =>
    `text-sm tracking-wide transition-colors ${
      isActive ? 'text-forest font-medium' : 'text-ink/70 hover:text-forest'
    }`

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-ink/10">
      <div className="container-page flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="text-forest" size={26} strokeWidth={1.75} />
          <span className="font-display text-2xl text-forest">Sip Atelier</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="hidden sm:inline-flex text-ink/70 hover:text-forest transition-colors">
            <Search size={20} strokeWidth={1.75} />
          </button>
          <Link to="/login" aria-label="Account" className="hidden sm:inline-flex text-ink/70 hover:text-forest transition-colors">
            <User size={20} strokeWidth={1.75} />
          </Link>
          <Link to="/cart" aria-label="Cart" className="relative inline-flex text-ink/70 hover:text-forest transition-colors">
            <ShoppingBag size={20} strokeWidth={1.75} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] leading-none rounded-full h-4 w-4 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <button
            aria-label="Open menu"
            className="md:hidden text-ink/70"
            onClick={() => setOpen(true)}
          >
            <Menu size={22} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-forest text-cream md:hidden">
          <div className="container-page flex items-center justify-between h-20">
            <span className="font-display text-2xl">Sip Atelier</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 mt-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="py-4 text-2xl font-display border-b border-cream/15"
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/login" onClick={() => setOpen(false)} className="py-4 text-2xl font-display border-b border-cream/15">
              Account
            </Link>
            <Link to="/cart" onClick={() => setOpen(false)} className="py-4 text-2xl font-display">
              Cart {itemCount > 0 ? `(${itemCount})` : ''}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}