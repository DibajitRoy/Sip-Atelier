import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Leaf, Mail, MapPin, Phone, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/90 mt-24">
      <div className="container-page py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf size={22} strokeWidth={1.75} />
            <span className="font-display text-xl text-cream">Sip Atelier</span>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed max-w-xs">
            Hand-picked loose leaf tea, sourced with care and delivered fresh across Bangladesh.
          </p>
          <div className="flex gap-4 mt-5 text-cream/70">
            <a href="#" aria-label="Facebook" className="hover:text-cream"><Facebook size={18} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-cream"><Instagram size={18} /></a>
            <a href="#" aria-label="YouTube" className="hover:text-cream"><Youtube size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-cream text-sm font-medium tracking-wide mb-4">Shop</h4>
          <ul className="space-y-3 text-sm text-cream/70">
            <li><Link to="/shop" className="hover:text-cream">All Tea</Link></li>
            <li><Link to="/shop?category=black-tea" className="hover:text-cream">Black Tea</Link></li>
            <li><Link to="/shop?category=green-tea" className="hover:text-cream">Green Tea</Link></li>
            <li><Link to="/shop?category=premium-tea" className="hover:text-cream">Premium Tea</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream text-sm font-medium tracking-wide mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-cream/70">
            <li><Link to="/about" className="hover:text-cream">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-cream">Contact</Link></li>
            <li><Link to="/track-order" className="hover:text-cream">Track Order</Link></li>
            <li><Link to="/login" className="hover:text-cream">My Account</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream text-sm font-medium tracking-wide mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-cream/70">
            <li className="flex items-center gap-2"><MapPin size={16} /> Gulshan, Dhaka, Bangladesh</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +880 1XXX-XXXXXX</li>
            <li className="flex items-center gap-2"><Mail size={16} /> hello@Sip Atelier.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="container-page py-6 text-xs text-cream/60 flex flex-col sm:flex-row justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Sip Atelier. All rights reserved.</span>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-cream">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cream">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}