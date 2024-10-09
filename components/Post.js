import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "./CategoryLabel";

export default function Post({ post, compact }) {
  return (
    <div className="w-full  bg-white rounded-lg mt-6">
      {!compact && (
        <Image
          src={post.frontmatter.cover_image}
          alt=""
          height={320}
          width={500}
          className="mb-4 rounded"
        />
      )}

      <div className="">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={post.frontmatter.author_image}
              alt=""
              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
            />
            <div>
              <h3 className="text-gray-700 ">{post.frontmatter.author}</h3>
              <span className="font-light text-sm text-gray-600">
                {post.frontmatter.date}
              </span>
            </div>
          </div>

          <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
        </div>

        <div className="mt-2">
          <Link href={`/blog/${post.slug}`}>
            <a className="text-2xl text-gray-700 font-bold hover:underline">
              {post.frontmatter.title}
            </a>
          </Link>
          <p className="mt-2 text-gray-600 text-sm">{post.frontmatter.excerpt}</p>
        </div>

        {!compact && (
          <div className="flex justify-between items-center mt-6">
            <Link href={`/blog/${post.slug}`}>
              <a className="text-gray-900 hover:text-blue-600">Read More</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
