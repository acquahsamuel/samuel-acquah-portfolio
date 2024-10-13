import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className=" text-gray-500  w-full  my-6">
      <div className="container mx-auto flex flex-wrap  p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
            <span className="ml-3 text-xl text-white font-bold">iam</span>
          </a>
        </Link>
        <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto">
          <Link href="/blog">
            <a className="mx-2 flex cursor-pointer text-sm capitialize hover:text-indigo-300">
              <svg
                fill="#fff"
                height="17px"
                width="17px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                xmlSpace="preserve"
                className="mr-1"
              >
                <g id="blog">
                  <path d="M5,23c-2.2,0-4-1.8-4-4v-8h2v4.5C3.6,15.2,4.3,15,5,15c2.2,0,4,1.8,4,4S7.2,23,5,23z M5,17c-1.1,0-2,0.9-2,2s0.9,2,2,2 s2-0.9,2-2S6.1,17,5,17z M24,19h-2C22,9.6,14.4,2,5,2V0C15.5,0,24,8.5,24,19z M19,19h-2c0-6.6-5.4-12-12-12V5 C12.7,5,19,11.3,19,19z M14,19h-2c0-3.9-3.1-7-7-7v-2C10,10,14,14,14,19z"></path>
                </g>
              </svg>
              Articles
            </a>
          </Link>
          <Link href="/about">
            <a className="mx-2 flex cursor-pointer text-sm capitialize hover:text-indigo-300">
              
              Projects
            </a>
          </Link>

          {/* <Link href="/about">
            <a className="mx-2 flex cursor-pointer  text-sm capitialize hover:text-indigo-300">
              
              About
            </a>
          </Link> */}
        </nav>
      </div>
    </header>
  );
}
