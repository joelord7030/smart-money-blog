import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import PostPage from './pages/PostPage'
import Navbar from './components/Navbar'

export default function App(){
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/:slug" element={<PostPage/>} />
        </Routes>
      </main>
    </div>
  )
}
