import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Heart, Minus, Plus, Share2 } from 'lucide-react'
import Breadcrumb from '../components/common/Breadcrumb.jsx'
import RatingStars from '../components/product/RatingStars.jsx'
import ProductCard from '../components/product/ProductCard.jsx'
import { products, weightOptions } from '../data/products.js'
import { formatPrice, discountedPrice } from '../utils/currency.js'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()
  const product = products.find((p) => p.id === id)

  const [activeImage, setActiveImage] = useState(0)
  const [weight, setWeight] = useState(weightOptions[0])
  const [quantity, setQuantity] = useState(1)
  const [tab, setTab] = useState('description')
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="container-page py-20 text-center">
        <p className="font-display text-2xl mb-4">Product not found</p>
        <Link to="/shop" className="btn-primary">Back to Shop</Link>
      </div>
    )
  }

  const unitPrice = discountedPrice(product.price, product.discount) * weight.multiplier
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
  const wishlisted = isWishlisted(product.id)

  function handleAddToCart() {
    addToCart(product, weight, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  function handleBuyNow() {
    addToCart(product, weight, quantity)
    navigate('/cart')
  }

  return (
    <div className="container-page py-10">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Shop', to: '/shop' }, { label: product.name }]} />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Gallery */}
        <div>
          <div className="rounded-card overflow-hidden aspect-square bg-sage-light/20 mb-4">
            <img src={product.images[activeImage]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-3">
            {product.images.map((img, idx) => (
              <button
                key={img}
                onClick={() => setActiveImage(idx)}
                className={`h-20 w-20 rounded-xl overflow-hidden border-2 ${activeImage === idx ? 'border-forest' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          {product.badge && (
            <span className="inline-block bg-forest/10 text-forest text-xs px-3 py-1 rounded-full mb-3">
              {product.badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl text-forest mb-3">{product.name}</h1>
          <RatingStars rating={product.rating} reviewCount={product.reviewCount} />

          <div className="flex items-baseline gap-3 mt-4">
            <span className="text-2xl font-display text-forest">{formatPrice(unitPrice)}</span>
            {product.discount > 0 && (
              <span className="text-sm text-ink/40 line-through">
                {formatPrice(product.price * weight.multiplier)}
              </span>
            )}
          </div>

          <p className="text-sm mt-2 text-sage">
            {product.stock > 0 ? `In stock — ${product.stock} left` : 'Out of stock'}
          </p>

          <p className="text-ink/70 leading-relaxed mt-5">{product.description}</p>

          {/* Weight selector */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-ink mb-2">Weight</h3>
            <div className="flex gap-2 flex-wrap">
              {weightOptions.map((w) => (
                <button
                  key={w.label}
                  onClick={() => setWeight(w)}
                  className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                    weight.label === w.label
                      ? 'bg-forest text-cream border-forest'
                      : 'border-ink/20 text-ink/70 hover:border-forest'
                  }`}
                >
                  {w.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-ink mb-2">Quantity</h3>
            <div className="inline-flex items-center border border-ink/20 rounded-full">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="h-10 w-10 flex items-center justify-center text-ink/70"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="w-8 text-center text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="h-10 w-10 flex items-center justify-center text-ink/70"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <button onClick={handleAddToCart} className="btn-secondary flex-1 sm:flex-none">
              {added ? 'Added!' : 'Add to Cart'}
            </button>
            <button onClick={handleBuyNow} className="btn-primary flex-1 sm:flex-none">
              Buy Now
            </button>
            <button
              aria-label="Add to wishlist"
              onClick={() => toggleWishlist(product.id)}
              className="h-12 w-12 flex items-center justify-center border border-ink/20 rounded-full text-ink/60 hover:text-gold hover:border-gold transition-colors"
            >
              <Heart size={18} className={wishlisted ? 'fill-gold text-gold' : ''} />
            </button>
            <button aria-label="Share product" className="h-12 w-12 flex items-center justify-center border border-ink/20 rounded-full text-ink/60 hover:text-forest hover:border-forest transition-colors">
              <Share2 size={18} />
            </button>
          </div>

          {/* Tabs */}
          <div className="mt-10 border-t border-ink/10 pt-6">
            <div className="flex gap-6 mb-4">
              {['description', 'reviews', 'shipping'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`text-sm capitalize pb-2 border-b-2 ${
                    tab === t ? 'border-forest text-forest font-medium' : 'border-transparent text-ink/50'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            {tab === 'description' && (
              <p className="text-sm text-ink/70 leading-relaxed">
                <strong>Ingredients: </strong>{product.ingredients}
              </p>
            )}
            {tab === 'reviews' && (
              <div className="space-y-4">
                <p className="text-sm text-ink/70">{product.reviewCount} customers have reviewed this tea, averaging {product.rating.toFixed(1)} out of 5 stars.</p>
              </div>
            )}
            {tab === 'shipping' && (
              <p className="text-sm text-ink/70 leading-relaxed">
                Delivered within 1–2 days inside Dhaka and 3–5 days nationwide. Cash on Delivery
                available everywhere. Read our full <Link to="/shipping" className="text-forest underline">shipping policy</Link>.
              </p>
            )}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl text-forest mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}