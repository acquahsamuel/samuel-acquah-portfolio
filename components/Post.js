import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "./CategoryLabel";

export default function Post({ post, compact }) {
  return (
    <div className="relative  rounded-lg py-4 flex flex-col  md:flex-row md:justify-between">
      {!compact && (
      <div className="md:w-90">
       {/* <Link href={`/blog/${post.slug}`}> </Link> */}
        <Image
          src={post.frontmatter.cover_image}
          alt=""
          height={90}
          width={150}
          className="mb-2 rounded"
        />
     
        </div>
      )}

      <div className="md:w-4/5">
        <div className="">
          <Link href={`/blog/${post.slug}`}>
            <a className="text-md antialiased font-bold hover:underline hover:text-indigo-300">
              {post.frontmatter.title}
            </a>
          </Link>
          <p className="mt-2 text-sm">{post.frontmatter.excerpt}</p>
        </div>

        <div className="flex ">
          <div className="flex">
            {/* <img
              src={post.frontmatter.author_image}
              alt=""
              className="mr-2 w-10 h-10 object-cover rounded-full hidden sm:block"
            /> */}
            <div className="flex">
              <h3 className="text-xs mr-3">{post.frontmatter.author}</h3>
              <span className="font-light text-xs">
                {post.frontmatter.date}
              </span>
            </div>
          </div>

          <div className="absolute top-5 right-5">
          {/* <CategoryLabel>{post.frontmatter.category}</CategoryLabel> */}
          </div>
        </div>


        {/* {!compact && (
          <div className="flex justify-between items-center mt-6">
            <Link href={`/blog/${post.slug}`}>
              <a className="text-gray-900 text-xs hover:text-blue-600">Read More</a>
            </Link>
          </div>
        )} */}

      </div>
    </div>
  );
}
