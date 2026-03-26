import React, { useState, useEffect } from 'react'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import Login from './pages/Login'
import Home from './pages/Home'
import Analytics from './pages/Analytics'
import LiveFeed from './pages/LiveFeed'
import Contact from './pages/Contact'

function AppContent() {
  const { user, loading } = useAuth()
  const [currentPage, setCurrentPage] = useState('home')

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-surface">
        <div className="text-on-surface">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return <Login />
  }

  const pages = {
    home: <Home setCurrentPage={setCurrentPage} />,
    analytics: <Analytics setCurrentPage={setCurrentPage} />,
    'live-feed': <LiveFeed setCurrentPage={setCurrentPage} />,
    contact: <Contact setCurrentPage={setCurrentPage} />
  }

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {pages[currentPage] || <Home setCurrentPage={setCurrentPage} />}
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
