import React, { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '../components/product/ProductCard.jsx'
import Breadcrumb from '../components/common/Breadcrumb.jsx'
import { products, categories } from '../data/products.js'

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'all'
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('newest')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [maxPrice, setMaxPrice] = useState(1000)

  function setCategory(id) {
    if (id === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', id)
    }
    setSearchParams(searchParams)
  }

  const filtered = useMemo(() => {
    let list = [...products]
    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory)
    }
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
    }
    list = list.filter((p) => p.price <= maxPrice)

    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return list
  }, [activeCategory, query, sort, maxPrice])

  const FilterPanel = (
    <div className="space-y-8">
      <div>
        <h3 className="font-display text-lg text-ink mb-3">Category</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <button
              onClick={() => setCategory('all')}
              className={`w-full text-left ${activeCategory === 'all' ? 'text-forest font-medium' : 'text-ink/65 hover:text-forest'}`}
            >
              All Teas
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.id}>
              <button
                onClick={() => setCategory(c.id)}
                className={`w-full text-left ${activeCategory === c.id ? 'text-forest font-medium' : 'text-ink/65 hover:text-forest'}`}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-display text-lg text-ink mb-3">Max Price: &#2547;{maxPrice}</h3>
        <input
          type="range"
          min="300"
          max="1000"
          step="10"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-forest"
        />
      </div>
    </div>
  )

  return (
    <div className="container-page py-10">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Shop' }]} />
      <h1 className="text-4xl text-forest mb-2">Shop All Tea</h1>
      <p className="text-ink/60 mb-8">{filtered.length} products found</p>

      <div className="grid lg:grid-cols-[240px_1fr] gap-10">
        <aside className="hidden lg:block">{FilterPanel}</aside>

        <div>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
              <input
                type="text"
                placeholder="Search tea..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="input-field sm:w-56"
            >
              {sortOptions.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden btn-secondary sm:w-auto"
            >
              <SlidersHorizontal size={16} /> Filters
            </button>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-ink mb-2">No teas found</p>
              <p className="text-ink/60 mb-6">Try a different search term or clear your filters.</p>
              <button
                onClick={() => {
                  setQuery('')
                  setCategory('all')
                  setMaxPrice(1000)
                }}
                className="btn-primary"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-ink/40" onClick={() => setMobileFilterOpen(false)} />
          <div className="w-80 bg-cream h-full p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl">Filters</h2>
              <button onClick={() => setMobileFilterOpen(false)} aria-label="Close filters">
                <X size={20} />
              </button>
            </div>
            {FilterPanel}
            <button onClick={() => setMobileFilterOpen(false)} className="btn-primary w-full mt-8">
              Show Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}