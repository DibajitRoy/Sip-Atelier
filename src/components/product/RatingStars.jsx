import React from 'react'
import { Star } from 'lucide-react'

export default function RatingStars({ rating, size = 14, showValue = true, reviewCount }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={size}
          className={n <= Math.round(rating) ? 'fill-gold text-gold' : 'text-ink/20'}
        />
      ))}
      {showValue && <span className="text-xs text-ink/60 ml-1">{rating.toFixed(1)}</span>}
      {reviewCount !== undefined && (
        <span className="text-xs text-ink/50">({reviewCount})</span>
      )}
    </div>
  )
}