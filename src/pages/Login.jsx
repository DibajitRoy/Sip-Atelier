import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = {}
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email address.'
    if (form.password.length < 6) errs.password = 'Password must be at least 6 characters.'
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      navigate('/')
    }
  }

  return (
    <div className="container-page py-16 max-w-md">
      <h1 className="text-3xl text-forest mb-2 text-center">Welcome Back</h1>
      <p className="text-ink/60 text-center mb-8">Log in to track orders and manage your account.</p>
      <form onSubmit={handleSubmit} className="bg-white border border-ink/10 rounded-card p-8 space-y-4">
        <div>
          <label className="text-sm text-ink/70 mb-1 block">Email</label>
          <input name="email" value={form.email} onChange={handleChange} className="input-field" />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="text-sm text-ink/70 mb-1 block">Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} className="input-field" />
          {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
          <Link to="/forgot-password" className="text-xs text-forest hover:underline mt-1 inline-block">Forgot password?</Link>
        </div>
        <button type="submit" className="btn-primary w-full">Log In</button>
      </form>
      <p className="text-sm text-ink/60 text-center mt-5">
        Don&apos;t have an account? <Link to="/register" className="text-forest font-medium hover:underline">Sign up</Link>
      </p>
    </div>
  )
}