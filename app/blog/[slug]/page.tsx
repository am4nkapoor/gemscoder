import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

async function getPost(slug: string) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      body,
      author->{
        name,
        image,
        bio
      },
      categories[]->{
        title
      }
    }`,
    { slug }
  );

  if (!post) {
    notFound();
  }

  return post;
}

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full h-96 my-8">
          <Image
            className="object-cover rounded-lg"
            src={urlForImage(value).url()}
            alt={value.alt || " "}
            fill
          />
        </div>
      );
    },
    code: ({ value }: any) => {
      return (
        <pre className="bg-gray-900 rounded-lg p-4 my-4 overflow-x-auto">
          <code className="text-gray-100 text-sm">{value.code}</code>
        </pre>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold mt-6 mb-4">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 leading-relaxed text-gray-700">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    code: ({ children }: any) => (
      <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),
  },
};

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  return (
    <article className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
          {post.mainImage && (
            <Image
              src={urlForImage(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center justify-center gap-x-2">
            {post.categories?.map((category: any) => (
              <span
                key={category.title}
                className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800"
              >
                {category.title}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center">
            {post.author?.image && (
              <div className="flex-shrink-0">
                <Image
                  src={urlForImage(post.author.image).url()}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
              </div>
            )}
            <div className="ml-3 text-white">
              <p className="text-sm font-medium">{post.author?.name}</p>
              <div className="flex space-x-1 text-sm">
                <time dateTime={post.publishedAt}>
                  {format(new Date(post.publishedAt), "MMM d, yyyy")}
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-blue max-w-none">
          <PortableText value={post.body} components={ptComponents} />
        </div>
      </div>
    </article>
  );
}
