import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Hero = ({ data }: { data: Blog }) => {
  return (
    <Link href={`/blog/${data.slug}`}>
      <article className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div className="relative h-48 sm:h-64">
          <Image
            src={urlFor(data.image).url()}
            alt={data.Title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
            {data.Title}
          </h2>
          
          <p className="text-gray-400 text-sm line-clamp-3 mb-4">
            {data.Paragraph}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400">
              Read More
            </span>
            <span className="text-gray-500 text-sm">
              {/* You can add date or reading time here */}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Hero
