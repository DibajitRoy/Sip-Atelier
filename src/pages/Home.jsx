import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Package, ShieldCheck, Truck } from 'lucide-react'
import ProductCard from '../components/product/ProductCard.jsx'
import RatingStars from '../components/product/RatingStars.jsx'
import Accordion from '../components/common/Accordion.jsx'
import { products, categories, testimonials, faqs } from '../data/products.js'

const whyChooseUs = [
  { icon: Leaf, title: 'Fresh Tea Leaves', text: 'Sourced directly from gardens and shipped within weeks of harvest.' },
  { icon: ShieldCheck, title: 'Premium Quality', text: 'Every batch is tasted and graded before it reaches your cup.' },
  { icon: Package, title: 'Secure Packaging', text: 'Sealed in airtight pouches to lock in aroma and freshness.' },
  { icon: Truck, title: 'Fast Delivery', text: 'Reaching every district in Bangladesh within a few days.' },
]

export default function Home() {
  const featured = products.slice(0, 4)
  const bestSellers = products.filter((p) => p.badge === 'Best Seller')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
  }

  return (
    <div>
      {/* Announcement bar */}
      <div className="bg-forest text-cream text-xs sm:text-sm text-center py-2 px-4">
        Free delivery inside Dhaka on orders over &#2547;1,000 &nbsp;&middot;&nbsp; Cash on Delivery available nationwide
      </div>

      {/* Hero */}
      <section className="bg-sage-light/25">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center py-14 lg:py-20">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-forest">
              Discover the art of the perfect cup
            </h1>
            <p className="mt-6 text-ink/70 max-w-md leading-relaxed">
              Sip Atelier brings you hand-picked loose leaf tea from the finest gardens —
              blended with care, brewed for calm, and delivered fresh to your door.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/shop" className="btn-primary">
                Shop Now <ArrowRight size={16} />
              </Link>
              <Link to="/shop?category=premium-tea" className="btn-secondary">
                Explore Collection
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-card overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1200&auto=format&fit=crop"
                alt="Loose leaf tea being poured into a cup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg px-5 py-4 max-w-[220px]">
              <p className="text-sm text-ink/70 leading-snug">
                &ldquo;Crafted to bring balance to your day, one cup at a time.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="container-page py-16 lg:py-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl text-forest">Featured Teas</h2>
            <p className="text-ink/60 mt-2">Our most loved blends, picked for you.</p>
          </div>
          <Link to="/shop" className="hidden sm:inline text-sm text-forest font-medium hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-forest text-cream py-16 lg:py-24">
        <div className="container-page">
          <h2 className="text-3xl mb-2">Tea Categories</h2>
          <p className="text-cream/70 mb-10">Find the blend that fits your mood.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {categories.map((c) => (
              <Link
                key={c.id}
                to={`/shop?category=${c.id}`}
                className="group rounded-card overflow-hidden relative aspect-square"
              >
                <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-forest-dark/40 group-hover:bg-forest-dark/55 transition-colors" />
                <span className="absolute bottom-3 left-3 font-display text-lg">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best sellers */}
      {bestSellers.length > 0 && (
        <section className="container-page py-16 lg:py-24">
          <h2 className="text-3xl text-forest mb-2">Best Sellers</h2>
          <p className="text-ink/60 mb-8">The teas our customers keep coming back for.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {bestSellers.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Brand story */}
      <section className="container-page py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="rounded-card overflow-hidden order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1627764611688-2d07255e995e?q=80&w=1200&auto=format&fit=crop"
            alt="Tea garden and harvest"
            className="w-full h-full object-cover aspect-[4/3]"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl text-forest mb-5">A cup rooted in care</h2>
          <p className="text-ink/70 leading-relaxed mb-4">
            Sip Atelier started with a simple belief — that good tea shouldn&apos;t be complicated.
            We work directly with small gardens across the hills, choosing leaves for
            character rather than volume, and blending in small batches to keep every
            cup consistent.
          </p>
          <p className="text-ink/70 leading-relaxed mb-6">
            From leaf to cup, every step is handled with the same attention: careful
            plucking, gentle processing, and packaging that keeps the aroma sealed
            in until it reaches you.
          </p>
          <Link to="/about" className="text-forest font-medium hover:underline inline-flex items-center gap-2">
            Read our story <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-sage-light/25 py-16 lg:py-24">
        <div className="container-page">
          <h2 className="text-3xl text-forest mb-10 text-center">Why Choose Sip Atelier</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white rounded-card p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-forest" size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-base text-ink mb-1">{title}</h3>
                <p className="text-xs text-ink/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to order */}
      <section className="container-page py-16 lg:py-24">
        <h2 className="text-3xl text-forest mb-10 text-center">How to Order</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            { step: '1', title: 'Choose your tea', text: 'Browse categories or search for your favourite blend.' },
            { step: '2', title: 'Select weight & quantity', text: 'Pick the pack size that suits you, from 100g to 1kg.' },
            { step: '3', title: 'Checkout & relax', text: 'Pay via Cash on Delivery or online, and we handle the rest.' },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="h-10 w-10 rounded-full border border-forest text-forest flex items-center justify-center mx-auto mb-4 font-display">
                {s.step}
              </div>
              <h3 className="font-display text-lg text-ink mb-2">{s.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-forest text-cream py-16 lg:py-24">
        <div className="container-page">
          <h2 className="text-3xl mb-10 text-center">What Our Customers Say</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-cream/5 rounded-card p-6 border border-cream/10">
                <RatingStars rating={t.rating} showValue={false} />
                <p className="text-sm text-cream/80 leading-relaxed mt-3 mb-4">&ldquo;{t.text}&rdquo;</p>
                <span className="text-sm font-medium">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-16 lg:py-24 max-w-3xl">
        <h2 className="text-3xl text-forest mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion items={faqs} />
      </section>

      {/* Newsletter */}
      <section className="bg-sage-light/25 py-16">
        <div className="container-page max-w-xl text-center">
          <h2 className="text-3xl text-forest mb-3">Stay in the loop</h2>
          <p className="text-ink/60 mb-6">
            Subscribe for new arrivals, brewing tips, and seasonal offers.
          </p>
          {subscribed ? (
            <p className="text-forest font-medium">Thanks for subscribing! Check your inbox soon.</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field flex-1"
              />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}