import React from 'react'
import { useAuth } from '../contexts/AuthContext'

export function Navigation({ currentPage, setCurrentPage }) {
  const { signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  const isActive = (page) => currentPage === page

  return (
    <nav className="bg-[#131313] text-[#FFFFFF] font-['Inter'] antialiased tracking-tight fixed top-0 z-50 border-b border-[#474747]/20 flex justify-between items-center w-full px-8 py-4">
      <div className="flex items-center gap-12">
        <span className="text-xl font-black tracking-tighter text-[#FFFFFF] uppercase">AegisScan</span>
        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => setCurrentPage('home')}
            className={`${isActive('home') ? 'text-[#FFFFFF] border-b-2 border-[#FFFFFF] pb-1 font-bold' : 'text-[#C6C6C6] hover:text-[#FFFFFF] transition-colors duration-200'}`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('live-feed')}
            className={`${isActive('live-feed') ? 'text-[#FFFFFF] border-b-2 border-[#FFFFFF] pb-1 font-bold' : 'text-[#C6C6C6] hover:text-[#FFFFFF] transition-colors duration-200'}`}
          >
            Live Feed
          </button>
          <button
            onClick={() => setCurrentPage('analytics')}
            className={`${isActive('analytics') ? 'text-[#FFFFFF] border-b-2 border-[#FFFFFF] pb-1 font-bold' : 'text-[#C6C6C6] hover:text-[#FFFFFF] transition-colors duration-200'}`}
          >
            Analytics
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className={`${isActive('contact') ? 'text-[#FFFFFF] border-b-2 border-[#FFFFFF] pb-1 font-bold' : 'text-[#C6C6C6] hover:text-[#FFFFFF] transition-colors duration-200'}`}
          >
            Contact
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-[#2A2A2A] transition-all duration-300 active:scale-95 rounded-full">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 hover:bg-[#2A2A2A] transition-all duration-300 active:scale-95 rounded-full">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <button
          onClick={handleSignOut}
          className="p-2 hover:bg-[#2A2A2A] transition-all duration-300 active:scale-95 rounded-full"
        >
          <span className="material-symbols-outlined">logout</span>
        </button>
      </div>
    </nav>
  )
}
