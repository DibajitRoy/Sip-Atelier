import React, { useState } from 'react'
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import Breadcrumb from '../components/common/Breadcrumb.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function validate() {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email address.'
    if (!form.subject.trim()) errs.subject = 'Subject is required.'
    if (!form.message.trim()) errs.message = 'Message cannot be empty.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) {
      setStatus('error')
      return
    }
    setStatus('success')
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="container-page py-10">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
      <h1 className="text-4xl text-forest mb-2">Get in Touch</h1>
      <p className="text-ink/60 mb-10 max-w-lg">
        Questions about an order, a bulk request, or just want to say hello? We&apos;d love to hear from you.
      </p>

      <div className="grid lg:grid-cols-[1fr_360px] gap-10">
        <form onSubmit={handleSubmit} className="bg-white border border-ink/10 rounded-card p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-ink/70 mb-1 block">Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="input-field" />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm text-ink/70 mb-1 block">Email</label>
              <input name="email" value={form.email} onChange={handleChange} className="input-field" />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-ink/70 mb-1 block">Phone (optional)</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="input-field" />
            </div>
            <div>
              <label className="text-sm text-ink/70 mb-1 block">Subject</label>
              <input name="subject" value={form.subject} onChange={handleChange} className="input-field" />
              {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
            </div>
          </div>
          <div>
            <label className="text-sm text-ink/70 mb-1 block">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="input-field" />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
          {status === 'success' && <p className="text-sm text-forest">Thanks! Your message has been sent — we&apos;ll reply within 24 hours.</p>}
          {status === 'error' && <p className="text-sm text-red-500">Please fix the errors above and try again.</p>}
        </form>

        <div className="space-y-6">
          <div className="bg-sage-light/20 rounded-card p-6 space-y-4 text-sm text-ink/70">
            <p className="flex items-center gap-3"><MapPin size={18} className="text-forest" /> Gulshan, Dhaka, Bangladesh</p>
            <p className="flex items-center gap-3"><Phone size={18} className="text-forest" /> +880 1XXX-XXXXXX</p>
            <p className="flex items-center gap-3"><Mail size={18} className="text-forest" /> hello@Sip Atelier.com</p>
            <p className="flex items-center gap-3"><Clock size={18} className="text-forest" /> Sat–Thu, 10am–7pm</p>
          </div>
          <div className="bg-white border border-ink/10 rounded-card p-6">
            <h3 className="font-display text-lg mb-3">Follow Us</h3>
            <div className="flex gap-4 text-ink/60">
              <a href="#" aria-label="Facebook" className="hover:text-forest"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-forest"><Instagram size={20} /></a>
              <a href="#" aria-label="YouTube" className="hover:text-forest"><Youtube size={20} /></a>
            </div>
          </div>
          <div className="rounded-card overflow-hidden bg-ink/5 h-40 flex items-center justify-center text-ink/40 text-sm">
            Map placeholder
          </div>
        </div>
      </div>
    </div>
  )
}