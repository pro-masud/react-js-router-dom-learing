import React from 'react'
import { useParams } from 'react-router-dom'

const Blog = () => {
  const {slug} = useParams();
  return (
    <>
      <h1>Blog</h1>
      {slug ? slug : ""}
    </>
  )
}

export default Blog
