'use client'

import { useEffect } from 'react'
import { useAuthStore } from '../lib/stores/auth-store'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const checkAuth = useAuthStore((state) => state.checkAuth)

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
