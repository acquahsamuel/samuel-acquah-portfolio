import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="py-12">
      <div className="profile">
       
        <Image
          alt="profile"
          width={85}
          height={85}
          priority={true}
          className="rounded-full w-auto h-auto object-contain bg-cover bg-no-repeat  border-gray-50"
          src="/images/posts/profile.jpg"
        />
    
        <h3 className="text-xl font-semibold"> <span className="text-green-500">Samuel </span> <span className="text-yellow-400"> Acquah</span> </h3>
        <div className="text-sm my-2  antialiased">
          Software Engineer | .ts. + .js | Building Startups | Dev Tools |
          Opensource | Innovation | Growth | Consulting 🇬🇭
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="text-sm leading-5">
        Hello, I'm Samuel. It's a pleasure to meet you. <br />
        I am a software engineer with a strong interest in the intersection of software engineering and business. 
        Over the years, I have gained valuable experience working with various startups and corporate organizations.  <br /><br />
        I have also provided consulting services, both advisory and product development, to a range of clients.
        Currently, I am exploring new technologies with the goal of launching a couple of startups.
        Let's get in touch for your next project.
           

        </p>
      </div>

      <div className="social-handles my-5">
        <div className="flex">We can connect on</div>
        <div className="flex">
          <svg
            fill="#fff"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-271 283.9 256 235.1"
            xmlSpace="preserve"
            width="17px"
            className="mr-3"
            height="17px"
          >
            <g>
              <rect x="-264.4" y="359.3" width="49.9" height="159.7"></rect>
              <path d="M-240.5,283.9c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C-210.8,295.8-222.1,283.9-240.5,283.9z"></path>
              <path d="M-78.2,357.8c-28.6,0-46.5,15.6-49.8,26.6v-25.1h-56.1c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4V519h56.6v-88.8C-14.9,380.8-42.7,357.8-78.2,357.8z"></path>
            </g>
          </svg>

          <svg
            width="17px"
            height="17px"
            viewBox="0 0 20 20"
            version="1.1"
            className="mr-3"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#000000"
          >
            <g>
              <title>github</title>
              <desc>Created with Sketch.</desc>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-140.000000, -7559.000000)"
                  fill="#fffafa"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                      id="github"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>

          <svg
            fill="#fff"
            width="17px"
            className="mr-3"
            height="17px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M1920 311.856c-70.701 33.769-146.598 56.47-226.221 66.86 81.317-52.517 143.774-135.529 173.252-234.691-76.236 48.678-160.716 84.028-250.391 103.002-71.718-82.56-174.268-134.06-287.435-134.06-217.75 0-394.165 189.966-394.165 424.206 0 33.318 3.614 65.619 10.165 96.678C617.9 616.119 327.304 447.385 133.045 190.67c-33.77 62.57-53.309 135.53-53.309 213.233 0 147.162 91.031 276.818 196.744 353.054-64.602-2.26-157.101-21.46-157.101-53.309v5.648c0 205.327 114.41 376.658 294.55 415.849-32.978 9.487-78.38 14.795-114.409 14.795-25.412 0-55.454-2.71-79.624-7.793 50.26 168.509 193.13 291.163 365.478 294.777-134.852 113.506-306.07 181.383-490.616 181.383-31.85 0-64.038-2.033-94.758-5.873 174.494 120.17 381.176 190.532 603.67 190.532 724.97 0 1121.055-646.136 1121.055-1206.55 0-18.41-.452-36.932-1.356-55.116 77.026-59.746 143.887-134.4 196.631-219.444"
                fillRule="evenodd"
              />
            </g>
          </svg>

          <svg
            width="17px"
            height="17px"
            viewBox="0 -2.5 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#000000"
            className="mr-3"
          >
            <g>
              <title>email</title>
              <desc>Created with Sketch.</desc>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-340.000000, -922.000000)"
                  fill="#ffffff"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z"
                      id="email"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <div className="my-5">
        <button className="rounded-full bg-gray-800 text-white px-5 py-2 text-sm">
          Available For Work
        </button>
      </div>

      <div className="flex">
        <div className="text-xs">
          <p className="text-white">
            Have I not commanded you? Be strong and courageous. Do not be
            afraid; do not be discouraged, for <br /> the LORD your God will be with 
            you wherever you go - Joshua 1:9
          </p>
        </div>
      </div>
    </div>
  );
}
