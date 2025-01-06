import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";

export default async function page({params:{slug}}:{params:{slug:string}}) {

  const query = `*[_type == 'blog'&& slug.current == "${slug}"]{
    Title , Paragraph , image ,block
    }[0]`

    const data = await client.fetch(query)
    

  return (
    <article className="pt-10 px-2 2xl:px-12 flex flex-col gap-y-8 bg-gray-900">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light text-white ">
  {data.Title}
</h1>
      {/* Featured Image */}
       <img
                  className="lg:h-48 md:h-36 object-cover object-center"
                  width={544}
                  height={606}
                  src={urlFor(data.image).url()}
                  alt="blog"
                />
      {/* Blog Summary Section */}
      <section>
      <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary text-white">
        Summary
      </h2>
      <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80 text-white">
      {data.Paragraph}
      </p>
      </section>
      {/* Author Section (Image & Bio) */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <img
          src={urlFor(data.image).url()}
          width={100}
          height={100}
          alt=""
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        
      </section>

      {/* Main Body of Blog */}
      <section className="text-lg leading-normal text-dark/80 dark:text-light/80 text-white">
     <PortableText value={data.block}/>
      </section>

    </article>
  );
}
