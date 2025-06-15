'use client'

import Link from 'next/link'
import { useAuthStore } from '../lib/stores/auth-store'

export default function HomePage() {
  const { isAuthenticated, user } = useAuthStore()

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome to TradeLab! 🚀</h1>
      <p>Your visual trading strategy platform</p>

      <div style={{ marginTop: '40px' }}>
        {isAuthenticated ? (
          <>
            <p>Welcome back, {user?.username}!</p>
            <Link href="/dashboard">
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#4F46E5',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '20px',
                }}
              >
                Go to Dashboard
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link href="/login">
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#4F46E5',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  margin: '10px',
                }}
              >
                Sign In
              </button>
            </Link>
            <Link href="/register">
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: 'white',
                  color: '#4F46E5',
                  border: '1px solid #4F46E5',
                  cursor: 'pointer',
                  margin: '10px',
                }}
              >
                Create Account
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
