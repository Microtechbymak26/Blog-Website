import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default async function page({params:{slug}}:{params:{slug:string}}) {

  const query = `*[_type == 'blog'&& slug.current == "${slug}"]{
    Title , Paragraph , image ,block
    }[0]`

    const data = await client.fetch(query)
return (
  <article className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
    {/* Hero Section with Title and Featured Image */}
    <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
      <Image
        src={urlFor(data.image).url()}
        alt="blog cover"
        fill
        priority
        className="object-cover brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto px-4 text-center leading-tight">
          {data.Title}
        </h1>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
      {/* Author Info Card */}
      <div className="bg-gray-800 rounded-xl p-6 mb-12 shadow-xl">
        <div className="flex items-center gap-4">
          <Image
            src={urlFor(data.image).url()}
            width={60}
            height={60}
            alt="author"
            className="rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <h3 className="text-lg font-semibold text-white">M Ateeb</h3>
            <p className="text-gray-400 text-sm">Posted on {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <section className="bg-gray-800/50 rounded-xl p-6 mb-12 backdrop-blur-sm">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="h-8 w-1 bg-blue-500 rounded-full"></span>
          Summary
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          {data.Paragraph}
        </p>
      </section>

      {/* Main Content */}
      <section className="bg-gray-800/30 rounded-xl p-6 mb-12 backdrop-blur-sm">
        <div className="prose prose-lg prose-invert max-w-none">
          <PortableText 
            value={data.block}
            components={{
              block: {
                normal: ({children}) => (
                  <p className="text-gray-300 mb-4">{children}</p>
                ),
                h2: ({children}) => (
                  <h2 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h2>
                ),
              }
            }}
          />
        </div>
      </section>
    </div>
  </article>
  )
}
