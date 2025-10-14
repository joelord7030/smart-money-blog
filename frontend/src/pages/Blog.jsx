import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PostCard from '../components/PostCard'

export default function Blog(){
  const [posts, setPosts] = useState([])
  const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

  useEffect(()=>{
    axios.get(`${API}/api/posts`).then(r => setPosts(r.data)).catch(()=>{
      // fallback demo posts
      setPosts([
        { _id: '1', title: 'How to Start Investing with ₦10,000', slug: 'start-investing-10000', summary: 'A short guide' },
        { _id: '2', title: 'Understanding Mutual Funds', slug: 'understanding-mutual-funds', summary: 'What mutual funds are' }
      ])
    })
  },[])

  return (
    <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map(p => <PostCard key={p._id} post={p} />)}
    </div>
  )
}
