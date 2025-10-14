import React from 'react'
import { Link } from 'react-router-dom'

export default function PostCard({post}){
  return (
    <article className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-semibold text-lg"><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
      <p className="text-sm text-slate-600 mt-2">{post.summary}</p>
    </article>
  )
}
