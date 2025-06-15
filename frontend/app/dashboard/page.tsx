'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '../../lib/stores/auth-store'

export default function DashboardPage() {
  const router = useRouter()
  const { user, isAuthenticated, logout } = useAuthStore()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px' }}>
      <h1>Welcome to TradeLab Dashboard!</h1>
      
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h2>User Information</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Full Name:</strong> {user.full_name || 'Not set'}</p>
        <p><strong>User ID:</strong> <code>{user.id}</code></p>
      </div>
      
      <button
        onClick={handleLogout}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#DC2626',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Next Steps:</h3>
        <ul>
          <li>Build the visual strategy builder</li>
          <li>Create backtesting engine</li>
          <li>Add market data connections</li>
        </ul>
      </div>
    </div>
  )
}
