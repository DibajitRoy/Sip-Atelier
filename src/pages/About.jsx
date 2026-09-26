import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/common/Breadcrumb.jsx'

const stats = [
  { value: '15+', label: 'Partner Gardens' },
  { value: '50k+', label: 'Cups Served Monthly' },
  { value: '64', label: 'Districts Delivered To' },
  { value: '4.8/5', label: 'Average Rating' },
]

export default function About() {
  return (
    <div>
      <div className="container-page pt-10">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />
      </div>

      <section className="container-page grid lg:grid-cols-2 gap-10 items-center pb-16">
        <div>
          <h1 className="text-4xl text-forest mb-5">Our Story</h1>
          <p className="text-ink/70 leading-relaxed mb-4">
            Sip Atelier began in a small kitchen in Dhaka, born from a simple frustration: it was
            hard to find loose leaf tea that actually tasted the way it should. We started
            visiting gardens ourselves, tasting batches by hand, and bringing back only the
            leaves we&apos;d happily serve our own family.
          </p>
          <p className="text-ink/70 leading-relaxed">
            Today, that same standard guides everything we do — from the gardens we partner
            with to the pouch that arrives at your door.
          </p>
        </div>
        <div className="rounded-card overflow-hidden aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1577016029703-cc22a7c0c28c?q=80&w=1200&auto=format&fit=crop"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="bg-sage-light/25 py-16">
        <div className="container-page grid sm:grid-cols-2 gap-8">
          <div className="bg-white rounded-card p-8">
            <h2 className="font-display text-2xl text-forest mb-3">Our Mission</h2>
            <p className="text-ink/70 leading-relaxed">
              To make genuinely good, honestly sourced tea accessible to every home in
              Bangladesh — without compromising on freshness or fairness to the farmers
              who grow it.
            </p>
          </div>
          <div className="bg-white rounded-card p-8">
            <h2 className="font-display text-2xl text-forest mb-3">Our Vision</h2>
            <p className="text-ink/70 leading-relaxed">
              A tea culture built around quality and mindfulness — where people slow down,
              savour a proper cup, and know exactly where their tea comes from.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-3xl text-forest mb-10 text-center">Sourcing & Quality</h2>
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-display text-lg mb-2">Direct Sourcing</h3>
            <p className="text-sm text-ink/60 leading-relaxed">We buy directly from gardens, cutting out layers of middlemen.</p>
          </div>
          <div>
            <h3 className="font-display text-lg mb-2">Hand Graded</h3>
            <p className="text-sm text-ink/60 leading-relaxed">Every batch is tasted and graded before it&apos;s approved for sale.</p>
          </div>
          <div>
            <h3 className="font-display text-lg mb-2">Sealed Fresh</h3>
            <p className="text-sm text-ink/60 leading-relaxed">Packed in airtight pouches within days of quality checks.</p>
          </div>
        </div>
      </section>

      <section className="bg-forest text-cream py-16">
        <div className="container-page grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl mb-1">{s.value}</p>
              <p className="text-cream/70 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16 text-center">
        <h2 className="text-3xl text-forest mb-4">Ready to taste the difference?</h2>
        <Link to="/shop" className="btn-primary">Shop Our Teas</Link>
      </section>
    </div>
  )
}