import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Plus } from 'lucide-react'
import RatingStars from './RatingStars.jsx'
import { formatPrice, discountedPrice } from '../../utils/currency.js'
import { useCart } from '../../context/CartContext.jsx'
import { useWishlist } from '../../context/WishlistContext.jsx'
import { weightOptions } from '../../data/products.js'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()
  const finalPrice = discountedPrice(product.price, product.discount)
  const wishlisted = isWishlisted(product.id)

  function handleQuickAdd(e) {
    e.preventDefault()
    addToCart(product, weightOptions[0], 1)
  }

  function handleWishlist(e) {
    e.preventDefault()
    toggleWishlist(product.id)
  }

  return (
    <div className="group relative bg-white rounded-card overflow-hidden border border-ink/10 hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-sage-light/30">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-forest text-cream text-[11px] tracking-wide px-3 py-1 rounded-full">
              {product.badge}
            </span>
          )}
          <button
            aria-label="Add to wishlist"
            onClick={handleWishlist}
            className="absolute top-3 right-3 bg-white/90 rounded-full p-2 text-ink/60 hover:text-gold transition-colors"
          >
            <Heart size={16} className={wishlisted ? 'fill-gold text-gold' : ''} />
          </button>
        </div>

        <div className="p-4">
          <h3 className="font-display text-lg text-ink leading-snug">{product.name}</h3>
          <p className="text-sm text-ink/60 mt-1 line-clamp-2">{product.description}</p>
          <div className="mt-2">
            <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-lg text-forest">{formatPrice(finalPrice)}</span>
              {product.discount > 0 && (
                <span className="text-xs text-ink/40 line-through">{formatPrice(product.price)}</span>
              )}
            </div>
            <button
              aria-label="Quick add to cart"
              onClick={handleQuickAdd}
              className="h-9 w-9 flex items-center justify-center rounded-full bg-forest text-cream hover:bg-forest-dark transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}