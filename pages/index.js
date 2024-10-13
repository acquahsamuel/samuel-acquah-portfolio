import Link from "next/link";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import { getPosts } from "@/lib/posts";
import ProfilePage from "@/components/Profile";
import ProfileFeaturePage from "@/components/ProfileFeature";

export default function HomePage({ posts }) {
  return (
    <Layout>
      <ProfilePage />

      {/* <ProfileFeaturePage 
       href="#"
       imgSrc="https://randomuser.me/api/portraits/men/12.jpg"
       title="Delhi"
       description="including Red Fort, Delhi Gate and More.."
     />

     <ProfileFeaturePage 
       href="#"
       imgSrc="https://randomuser.me/api/portraits/men/12.jpg"
       title="Delhi"
       description="including Red Fort, Delhi Gate and More.."
     /> */}

      <section className="">
        <h1 className="text-xl font-bold">Latest Notes</h1>

        <div className="">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
        <section className="flex items-end justify-items-end w-full">
          <Link href="/blog">
            <a className="inline-block text-center  bg-gray-800 text-white  rounded-full px-6 py-2 my-5 text-sm transition duration-500 ease select-none ">
              All Notes
            </a>
          </Link>
        </section>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  };
}
