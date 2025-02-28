import React from 'react'
import Hero from './components/hero'
import { client } from '@/sanity/lib/client'

const page = async () => {

  const query = `*[_type == 'blog'] | order(_updatedAt asc){
  Title,Paragraph,image,
    "slug":slug.current
}`  
  const data: Blog[] = await client.fetch(query)
  console.log(data)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
          Welcome to Our Blog
        </h1>
        <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto">
          Discover interesting articles and stay updated with the latest trends
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((data: Blog) => (
            <Hero data={data} key={data.slug} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
