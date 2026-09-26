import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-ink/50 mb-6 flex-wrap">
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center gap-2">
          {item.to ? (
            <Link to={item.to} className="hover:text-forest">{item.label}</Link>
          ) : (
            <span className="text-ink/80">{item.label}</span>
          )}
          {idx < items.length - 1 && <ChevronRight size={14} />}
        </span>
      ))}
    </nav>
  )
}