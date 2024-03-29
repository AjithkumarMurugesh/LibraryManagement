import React, { useEffect, useState } from 'react'
import img from './images/AK1.jpg'
import axios from 'axios'

export default function User() {
  const [post,setPost] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3003/posts")
    .then((res)=>setPost(res.data))
    .catch(err=>console.log(err))
  })
  
  return (
    <div className='Userpage'>
      {post.map(x=>(
      <div className='post' key={x.id}>
        <img src={x.image} />
        <div className='profile'>
            <img src={img} />
            <div className='info'>
                <h1>Used It</h1>
                <p>COLLAGE Library</p>
            </div>
        </div>
        <div className='content'>
          <h1>{x.title}</h1>
          <p>{x.caption}</p>
        </div>
      </div>))}

    </div>
  )
}
