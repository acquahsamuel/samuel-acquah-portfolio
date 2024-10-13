import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function ProfileFeaturePage({
  href,
  imgSrc,
  title,
  description,
}) {
  return (
    <section className="relative rounded-lg my-2 flex items-center justify-between">
   
      <div>
        <h1 className="text-xl font-bold"> Featured </h1>

        <a className="card">
          <Image
            src={imgSrc}
            alt="Card Background"
            layout="responsive"
            width={500}
            height={300}
          />

          <div className="overlay">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </a>
      </div>
    </section>
  );
}
