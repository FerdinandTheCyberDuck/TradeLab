'use client'

import { useState, useEffect } from 'react'

export default function ApiTest() {
  const [apiStatus, setApiStatus] = useState<string>('Checking...')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://localhost:8000/health')
      .then(res => res.json())
      .then(data => {
        setApiStatus(`API Status: ${data.status} ✅`)
      })
      .catch(err => {
        setError('Failed to connect to API ❌')
        console.error(err)
      })
  }, [])

  return (
    <div className="mt-8 p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Backend Connection</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p className="text-green-500">{apiStatus}</p>
      )}
    </div>
  )
}
