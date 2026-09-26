import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email address.'
    if (!/^01[3-9]\d{8}$/.test(form.phone)) errs.phone = 'Enter a valid Bangladeshi phone number.'
    if (form.password.length < 6) errs.password = 'Password must be at least 6 characters.'
    if (form.confirm !== form.password) errs.confirm = 'Passwords do not match.'
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      navigate('/login')
    }
  }

  return (
    <div className="container-page py-16 max-w-md">
      <h1 className="text-3xl text-forest mb-2 text-center">Create Your Account</h1>
      <p className="text-ink/60 text-center mb-8">Join Sip Atelier for faster checkout and order tracking.</p>
      <form onSubmit={handleSubmit} className="bg-white border border-ink/10 rounded-card p-8 space-y-4">
        <div>
          <label className="text-sm text-ink/70 mb-1 block">Full Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="input-field" />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="text-sm text-ink/70 mb-1 block">Email</label>
          <input name="email" value={form.email} onChange={handleChange} className="input-field" />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="text-sm text-ink/70 mb-1 block">Phone Number</label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="01XXXXXXXXX" className="input-field" />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="text-sm text-ink/70 mb-1 block">Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} className="input-field" />
          {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
        </div>
        <div>
          <label className="text-sm text-ink/70 mb-1 block">Confirm Password</label>
          <input type="password" name="confirm" value={form.confirm} onChange={handleChange} className="input-field" />
          {errors.confirm && <p className="text-xs text-red-500 mt-1">{errors.confirm}</p>}
        </div>
        <button type="submit" className="btn-primary w-full">Create Account</button>
      </form>
      <p className="text-sm text-ink/60 text-center mt-5">
        Already have an account? <Link to="/login" className="text-forest font-medium hover:underline">Log in</Link>
      </p>
    </div>
  )
}