import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [operatorId, setOperatorId] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { signUp, signIn } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isSignUp) {
        await signUp(email, password, fullName, operatorId)
      } else {
        await signIn(email, password)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-surface-container rounded-2xl p-8 border border-outline-variant/20">
          <h1 className="text-3xl font-black text-primary mb-2 tracking-tight">AegisScan</h1>
          <p className="text-on-surface-variant text-sm mb-8">The Sentinel AI Threat Detection</p>

          {error && (
            <div className="bg-error-container/20 border border-error/30 text-error px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <>
                <div>
                  <label className="text-xs font-bold tracking-widest uppercase text-outline block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required={isSignUp}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-lg px-4 py-3 text-on-surface focus:border-primary focus:ring-0 outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold tracking-widest uppercase text-outline block mb-2">
                    Operator ID
                  </label>
                  <input
                    type="text"
                    value={operatorId}
                    onChange={(e) => setOperatorId(e.target.value)}
                    required={isSignUp}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-lg px-4 py-3 text-on-surface focus:border-primary focus:ring-0 outline-none"
                    placeholder="OP-XXXX"
                  />
                </div>
              </>
            )}

            <div>
              <label className="text-xs font-bold tracking-widest uppercase text-outline block mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-surface-container-low border border-outline-variant/40 rounded-lg px-4 py-3 text-on-surface focus:border-primary focus:ring-0 outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="text-xs font-bold tracking-widest uppercase text-outline block mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-surface-container-low border border-outline-variant/40 rounded-lg px-4 py-3 text-on-surface focus:border-primary focus:ring-0 outline-none"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-on-primary font-bold py-3 rounded-lg hover:bg-primary-container transition-all active:scale-95 disabled:opacity-50"
            >
              {loading ? 'Loading...' : isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="w-full text-sm text-on-surface-variant hover:text-primary transition-colors mt-4"
          >
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
