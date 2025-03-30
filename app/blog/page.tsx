import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

async function getPosts() {
  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt,
      author->{
        name,
        image,
        bio
      },
      categories[]->{
        title,
        description
      }
    }`
  );
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();
  console.log(posts, "posts");
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Blog
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Insights, thoughts and knowledge from our team of experts.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post._id}
              className="flex flex-col items-start bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {post.mainImage && (
                <div className="relative w-full">
                  <Image
                    src={urlForImage(post.mainImage).url()}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                </div>
              )}
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.publishedAt} className="text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </time>
                  {post.categories?.map((category) => (
                    <span
                      key={category.title}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blog/${post.slug.current}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.excerpt}
                  </p>
                </div>
                {post.author && (
                  <div className="relative mt-8 flex items-center gap-x-4">
                    {post.author.image && (
                      <Image
                        src={urlForImage(post.author.image).url()}
                        alt={post.author.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full bg-gray-100"
                      />
                    )}
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        {post.author.name}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
