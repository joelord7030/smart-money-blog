import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function PostPage(){
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

  useEffect(()=>{
    axios.get(`${API}/api/posts/${slug}`).then(r => setPost(r.data)).catch(()=>{})
  },[slug])

  if (!post) return <div>Loading...</div>
  return (
    <article className="prose max-w-none">
      <h1>{post.title}</h1>
      <p className="text-slate-600">{post.summary}</p>
      <div className="mt-6">{post.content}</div>
    </article>
  )
}
