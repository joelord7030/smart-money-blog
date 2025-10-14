import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">Smart Money Secrete</Link>
        <nav className="flex gap-4 items-center">
          <Link to="/blog" className="text-sm">Blog</Link>
          <a href="#" className="text-sm">About</a>
        </nav>
      </div>
    </header>
  )
}
