import fs from "fs";
import path from "path";
import Link from "next/link";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import CategoryList from "@/components/CategoryList";
import matter from "gray-matter";
import { getPosts } from "@/lib/posts";

export default function CategoryBlogPage({ posts, categoryName, categories }) {
    const toTitleCase = (str) => {
      return str
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
   };

  return (
    <Layout>
      <div className="">
        <div className="#">
          <CategoryList categories={categories} />
          <h1 className="text-xl titlecase font-bold my-4">{toTitleCase(categoryName)} Notes </h1>

          {/* grid md:grid-cols-2 lg:grid-cols-3 gap-5 */}
          <div className="">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return frontmatter.category.toLowerCase();
  });

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category_name } }) {
  const files = fs.readdirSync(path.join("posts"));

  const posts = getPosts();

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  // Filter posts by category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  );

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniqueCategories,
    },
  };
}
