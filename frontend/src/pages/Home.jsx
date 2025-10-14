import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold">Smart Money Secrete</h1>
      <p className="mt-4 text-slate-600">Practical investing guides for Nigerians.</p>
      <div className="mt-6">
        <Link to="/blog" className="px-4 py-2 bg-indigo-600 text-white rounded">Read the blog</Link>
      </div>
    </div>
  )
}
