'use client'
import { useActionState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { loginAction } from './actions'

export default function LoginPage() {
  const [state, action, pending] = useActionState(loginAction, { error: '' })

  return (
    <div className="min-h-screen bg-[color:var(--color-background)] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 justify-center mb-8">
          <Image src="/logo-symbol.png" alt="Roving" width={36} height={36} className="w-9 h-9 object-contain" />
          <Image src="/roving-logo.png" alt="Roving" width={110} height={30} className="h-8 w-auto object-contain translate-y-1" />
        </Link>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[color:var(--color-outline-variant)]">
          <h1
            className="text-2xl font-bold text-[color:var(--color-on-surface)] mb-1"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Welcome back
          </h1>
          <p className="text-sm text-[color:var(--color-secondary)] mb-6">
            Sign in to your Roving dashboard.
          </p>

          <form action={action} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-[color:var(--color-on-surface)]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-[color:var(--color-outline-variant)] bg-[color:var(--color-surface-container-lowest)] text-sm text-[color:var(--color-on-surface)] placeholder:text-[color:var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-sm font-medium text-[color:var(--color-on-surface)]">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl border border-[color:var(--color-outline-variant)] bg-[color:var(--color-surface-container-lowest)] text-sm text-[color:var(--color-on-surface)] placeholder:text-[color:var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:border-transparent transition"
              />
            </div>

            {state?.error && (
              <p className="text-sm text-[color:var(--color-error)] bg-[color:var(--color-error-container)] px-4 py-2.5 rounded-xl">
                {state.error}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="w-full bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-container)] disabled:opacity-60 text-white font-semibold text-sm py-3 rounded-xl transition-colors mt-1"
            >
              {pending ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
