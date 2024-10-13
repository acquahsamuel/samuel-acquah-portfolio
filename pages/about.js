import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const data = [
    {
      image:
        "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
      description:
        "A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and Vue libraries.",
      subtitle:
        "Building a free building tools and services for business to sell online",
      title: "Trenda",
      startDate: "",
      completeDate: "",
      tags: [
        "Startup",
        "HTML",
        "CSS",
        "SaSS",
        "Github",
        "Deployment",
        "Documentation",
      ],
      link: "#",
    },
    {
      image:
        "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
      description:
        "Get a list of all Ghana cities and region for your project at ease",
      subtitle: "Collated resources of api of all regions and Cities in Ghana",
      title: "Ghana Cities and Regions API",
      startDate: "",
      completeDate: "",
      tags: [
        "Open-source",
        "HTML",
        "CSS",
        "SaSS",
        "Github",
        "Deployment",
        "Documentation",
      ],
      link: "#",
    },
    {
      image:
        "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
      description:
        "This project is a free alternative to Tailwind CSS. Exploring and building a framework for building beautiful and modern websites.",
      subtitle:
        "Open source and free tailwindcss alternative framework for building beautiful and modern websites.",
      title: "BlonderCSS",
      startDate: "",
      completeDate: "",
      tags: [
        "Open-source",
        "HTML",
        "CSS",
        "SaSS",
        "Github",
        "Deployment",
        "Documentation",
      ],
      link: "#",
    },
    {
      image:
        "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
      description:
        "Blonder is a free VSCode theme that will enhance your coding experience. Donwload on github",
      subtitle:
        "Enhance your coding experience with my vscode theme on Microsoft Visual Studio Code.",
      title: "Blonder VSCode Theme",
      startDate: "",
      completeDate: "",
      tags: [
        "Open-source",
        "HTML",
        "CSS",
        "SaSS",
        "Github",
        "Deployment",
        "Documentation",
      ],
      link: "#",
    },
    {
      image:
        "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
      description:
        "A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and Vue libraries.",
      subtitle:
        "Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.",
      title: "Cleansheet AI Resume",
      startDate: "",
      completeDate: "",
      tags: [
        "Open-source",
        "HTML",
        "CSS",
        "SaSS",
        "Angular",
        "Deployment",
        "Nestjs",
        "Documentation",
      ],
      link: "#",
    },
    {
      image:
        "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
      description:
        "A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and Vue libraries.",
      subtitle:
        "Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.",
      title: "USSD Voting Service",
      startDate: "",
      completeDate: "",
      tags: [
        "Consulting",
        "HTML",
        "CSS",
        "SaSS",
        "Github",
        "Domain configuration",
      ],
      link: "#",
    },
    {
      image:
        "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
      description:
        "A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and Vue libraries.",
      subtitle:
        "Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.",
      title: "Learn Frontend Cohort Web",
      startDate: "",
      completeDate: "",
      tags: ["Open-source", "HTML", "CSS", "SaSS", "Learn"],
      link: "#",
    },
  ];

  const books = [
    {
      title: "The Art of War",
      image:
        "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
    },
    {
      title: "1984",
      image:
        "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
    },
    {
      title: "To Kill a Mockingbird",
      image:
        "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
    },
    {
      title: "To Kill a Mockingbird",
      image:
        "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
    },
    {
      title: "To Kill a Mockingbird",
      image:
        "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
    },
    {
      title: "To Kill a Mockingbird",
      image:
        "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
    },
    {
      title: "To Kill a Mockingbird",
      image:
        "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
    },
  ];

  const cardData = [
    {
      language: {
        name: "Language",
        values: [
          "Node.js",
          "Python",
          "PHP",
          "JavaScript",
          "C#",
          "C++",
          "TypeScript",
          "Dart",
        ],
        icon: (
          <svg
            width="34px"
            height="34px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM6.42385 9.51988C6.68903 9.20167 7.16195 9.15868 7.48016 9.42385L7.75658 9.6542C8.36153 10.1583 8.87653 10.5874 9.23295 10.9821C9.61151 11.4013 9.90694 11.8834 9.90694 12.5C9.90694 13.1166 9.61151 13.5987 9.23295 14.0179C8.87653 14.4126 8.36153 14.8418 7.75658 15.3458L7.48016 15.5762C7.16195 15.8414 6.68903 15.7984 6.42385 15.4802C6.15868 15.1619 6.20167 14.689 6.51988 14.4239L6.75428 14.2285C7.41285 13.6797 7.84348 13.3185 8.11968 13.0126C8.38196 12.7222 8.40694 12.586 8.40694 12.5C8.40694 12.414 8.38196 12.2779 8.11968 11.9874C7.84348 11.6815 7.41285 11.3203 6.75429 10.7715L6.51988 10.5762C6.20167 10.311 6.15868 9.83809 6.42385 9.51988ZM17.75 15C17.75 15.4142 17.4142 15.75 17 15.75H12C11.5858 15.75 11.25 15.4142 11.25 15C11.25 14.5858 11.5858 14.25 12 14.25H17C17.4142 14.25 17.75 14.5858 17.75 15Z"
                fill="#17ab1a"
              ></path>
            </g>
          </svg>
        ),
      },
      framework: {
        name: "Framework",
        values: [
          "React",
          "Next.js",
          "Nest.js",
          "Angular",
          "Vue.js",
          "Express",
          "Django",
          "Flask",
        ],
        icon: (
          <svg
            width="34px"
            height="34px"
            viewBox="-0.5 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M10.3365 12.3022C8.94652 13.1922 7.10652 13.2022 5.70652 12.3222C4.17652 11.3622 3.48652 9.72224 3.61652 8.14224C3.65652 7.64224 4.25653 7.41224 4.60653 7.76224L6.27653 9.44225C6.49653 9.67225 6.86653 9.67225 7.09653 9.44225L8.97652 7.54224C9.20652 7.31224 9.20652 6.94225 8.97652 6.72225L7.30652 5.04224C6.95652 4.69224 7.18652 4.08224 7.67652 4.04224C8.92652 3.94224 10.2165 4.36224 11.1665 5.32224C13.1365 7.31224 12.8565 10.7022 10.3365 12.3022Z"
                stroke="#e58e15"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.8966 11.7523L20.2566 18.1223C20.4466 18.3223 20.4466 18.6323 20.2566 18.8223L18.2666 20.8223C18.0666 21.0223 17.7466 21.0223 17.5566 20.8223L11.2266 14.4223"
                stroke="#e58e15"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        ),
      },
      design: {
        name: "Design",
        values: [
          "HTML",
          "CSS",
          "JavaScript",
          "Figma",
          "Adobe XD",
          "Sketch",
          "NgPrime",
          "NgZorro/Ant",
          "Photoshop",
          "Illustrator",
          "Bootstrap",
          "Tailwind CSS",
          "Material UI",
          "Foundation",
          "Bulma",
          "Ant Design",
        ],
        icon: (
          <svg
            version="1.1"
            id="DESIGN"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="34px"
            height="34px"
            viewBox="0 0 1800 1800"
            enableBackground="new 0 0 1800 1800"
            xmlSpace="preserve"
            fill="##e58e15"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Layer">
                <g>
                  <path
                    fill="#e58e15"
                    d="M1541.606,1540.146l0.009-0.008c35.598-35.594,35.598-93.52,0-129.121 c-17.24-17.236-40.178-26.745-64.569-26.745c-24.378,0-47.314,9.509-64.564,26.763c-35.588,35.584-35.588,93.51,0.009,129.104 C1448.096,1575.73,1506.014,1575.73,1541.606,1540.146z M1440.885,1511.743c-9.656-9.655-14.975-22.498-14.975-36.165 c0-13.659,5.318-26.511,14.975-36.167c9.665-9.655,22.512-14.979,36.175-14.979c13.659,0,26.497,5.323,36.161,14.979 c19.938,19.945,19.938,52.387-0.008,72.332C1493.271,1531.689,1460.831,1531.681,1440.885,1511.743z"
                  ></path>
                  <path
                    fill="#e58e15"
                    d="M1700.934,402.736c0.021-0.026,0.047-0.043,0.068-0.065c0.044-0.043,0.083-0.091,0.127-0.134l5.504-5.505 l-0.138-0.139c81.836-87.814,80.038-225.814-5.507-311.356c-42.353-42.357-98.664-65.685-158.565-65.685 c-57.228,0-111.154,21.339-152.792,60.18l-0.134-0.134l-5.511,5.507c-0.043,0.046-0.09,0.085-0.134,0.131 c-0.021,0.021-0.039,0.045-0.061,0.069L66.371,1403.02l0.513,0.513c-7.364,4.749-12.699,12.548-13.98,21.907L9.578,1741.903 c-1.319,9.647,1.95,19.347,8.831,26.232c5.875,5.87,13.807,9.108,22.004,9.108c1.402,0,2.813-0.095,4.224-0.286l316.451-43.338 c9.365-1.276,17.163-6.617,21.912-13.98l0.512,0.513L1700.934,402.736z M1542.423,82.094c43.272,0,83.954,16.852,114.551,47.452 c55.643,55.638,62.276,142.02,19.897,204.983L1451.973,109.64C1478.482,91.724,1509.717,82.094,1542.423,82.094z M1389.497,167.919l229.113,229.112L383.512,1632.129l-86.195-86.19l991.423-991.409l-59.351-59.342l-991.41,991.418 l-83.585-83.586L1389.497,167.919z M76.804,1709.731l35.68-260.604l224.915,224.916L76.804,1709.731z"
                  ></path>
                  <path
                    fill="#ece4e4"
                    d="M506.941,804.479l56.789-56.789l-454.446-454.45l185.432-185.437l87.924,87.932l-63.792,63.783 l50.362,50.359l63.792-63.779l51.262,51.258l-63.792,63.788l50.363,50.354l63.797-63.779l51.257,51.267l-94.375,94.353 l50.376,50.363l94.362-94.362l62.502,62.498l-63.792,63.801l50.363,50.354l63.792-63.792l0.043,0.047l56.789-56.789 L323.106,22.622c-15.682-15.686-41.102-15.686-56.784,0L24.102,264.845c-15.687,15.683-15.687,41.107,0,56.789L506.941,804.479z"
                  ></path>
                  <path
                    fill="#e58e15"
                    d="M1778.944,1478.287c-0.726-0.729-1.478-1.424-2.241-2.085l-505.282-505.273l-151.159,151.159l50.259,50.26 l94.371-94.37l428.79,428.782l-185.441,185.432l-479.045-479.041l-56.789,56.798l507.437,507.427 c15.682,15.69,41.102,15.69,56.788,0l242.234-242.213c0.021-0.034,0.048-0.052,0.079-0.086 C1794.63,1519.402,1794.63,1493.969,1778.944,1478.287z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        ),
      },
      tools: {
        name: "Tools",
        values: [
          "Git",
          "GitHub",
          "Docker",
          "Kubernetes",
          "Postman",
          "Webpack",
          "Babel",
          "Jenkins",
          "Travis CI",
          "CircleCI",
          "Terraform",
          "npm",
          "Yarn",
        ],
        icon: (
          <svg
            width="34px"
            height="34px"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            fill="#e515c9"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <defs>
                <style>
                  {`.a { fill: none; stroke: #e515c9; stroke-linecap: round; stroke-linejoin: round; }`}
                </style>
              </defs>
              <path
                className="a"
                d="M21.2865,14.4075H23.82a2.0591,2.0591,0,0,1,1.8014,1.311c.2922.8983-1.1336,1.7888-.8719,2.6962a2.7927,2.7927,0,0,0,2.4049,2.0095,2.7823,2.7823,0,0,0,2.21-2.137c.2091-.8708-1.1319-1.6838-.8724-2.5406a2.0125,2.0125,0,0,1,1.7507-1.3382h2.8953a1.3233,1.3233,0,0,1,1.1762,1.1762V19.837a2.3065,2.3065,0,0,0,1.2386,2.0412c1.01.4094,2.1316-1.1753,3.163-.8234a2.7041,2.7041,0,0,1,1.796,2.3225A2.7258,2.7258,0,0,1,38.6,25.632c-.96.2831-1.9262-1.1925-2.8744-.8711a2.25,2.25,0,0,0-1.4114,1.9624v4.2434a1.3233,1.3233,0,0,1-1.1762,1.1762H21.2857v7.238A3.0539,3.0539,0,0,0,24,42.0952H40.2857A3.0538,3.0538,0,0,0,43,39.3809V8.6191a3.0538,3.0538,0,0,0-2.7143-2.7143H24a3.0539,3.0539,0,0,0-2.7143,2.7143Z"
              ></path>
              <path
                className="a"
                d="M5.0008,14.4075H7.5341a2.0591,2.0591,0,0,1,1.8014,1.311c.2922.8983-1.1336,1.7888-.8719,2.6962a2.7927,2.7927,0,0,0,2.4049,2.0095,2.7823,2.7823,0,0,0,2.21-2.137c.2091-.8708-1.1319-1.6838-.8724-2.5406a2.0125,2.0125,0,0,1,1.7507-1.3382h2.8953a1.3233,1.3233,0,0,1,1.1762,1.1762V19.837a2.3065,2.3065,0,0,0,1.2386,2.0412c1.01.4094,2.1316-1.1753,3.163-.8234a2.7041,2.7041,0,0,1,1.796,2.3225,2.7258,2.7258,0,0,1-1.9118,2.2547c-.96.2831-1.9262-1.1925-2.8744-.8711a2.25,2.25,0,0,0-1.4114,1.9624v4.2434a1.3233,1.3233,0,0,1-1.1762,1.1762H5Z"
              ></path>
            </g>
          </svg>
        ),
      },
      hosting: {
        name: "Hosting",
        values: [
          "Vercel",
          "AWS",
          "Heroku",
          "Netlify",
          "Firebase",
          "DigitalOcean",
          "Microsoft Azure",
          "Google Cloud",
          "Linode",
          "Render",
          "Cloudflare Pages",
          "GitHub Pages",
          "Fly.io",
        ],
        icon: (
          <svg
            fill="#4c6bc8"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 60 60"
            xmlSpace="preserve"
            width="34px"
            height="34px"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <path d="M59,16c0.6,0,1-0.4,1-1V1c0-0.6-0.4-1-1-1H1C0.4,0,0,0.4,0,1v14c0,0.6,0.4,1,1,1h3v6H1c-0.6,0-1,0.4-1,1v14 c0,0.6,0.4,1,1,1h3v6H1c-0.6,0-1,0.4-1,1v14c0,0.6,0.4,1,1,1h58c0.6,0,1-0.4,1-1V45c0-0.6-0.4-1-1-1h-3v-6h3c0.6,0,1-0.4,1-1V23 c0-0.6-0.4-1-1-1h-3v-6H59z M2,2h56v12h-3H5H2V2z M58,58H2V46h3h50h3V58z M54,44H6v-6h48V44z M58,36h-3H5H2V24h3h50h3V36z M54,22 H6v-6h48V22z"></path>
                  <rect x="5" y="5" width="2" height="6"></rect>
                  <rect x="10" y="5" width="2" height="6"></rect>
                  <rect x="15" y="5" width="2" height="6"></rect>
                  <rect x="20" y="5" width="2" height="6"></rect>
                  <rect x="25" y="5" width="2" height="6"></rect>
                  <rect x="30" y="5" width="2" height="6"></rect>
                  <rect x="37" y="5" width="18" height="2"></rect>
                  <rect x="44" y="9" width="11" height="2"></rect>
                  <rect x="37" y="9" width="5" height="2"></rect>
                  <rect x="41" y="27" width="14" height="2"></rect>
                  <rect x="5" y="27" width="15" height="2"></rect>
                  <rect x="41" y="31" width="14" height="2"></rect>
                  <rect x="5" y="31" width="15" height="2"></rect>
                  <rect x="5" y="49" width="22" height="2"></rect>
                  <rect x="5" y="53" width="22" height="2"></rect>
                  <rect x="23" y="27" width="3" height="2"></rect>
                  <rect x="29" y="27" width="3" height="2"></rect>
                  <rect x="35" y="27" width="3" height="2"></rect>
                  <rect x="23" y="31" width="3" height="2"></rect>
                  <rect x="29" y="31" width="3" height="2"></rect>
                  <rect x="35" y="31" width="3" height="2"></rect>
                  <rect x="30" y="49" width="3" height="2"></rect>
                  <rect x="36" y="49" width="3" height="2"></rect>
                  <rect x="42" y="49" width="3" height="2"></rect>
                  <rect x="30" y="53" width="3" height="2"></rect>
                  <rect x="36" y="53" width="3" height="2"></rect>
                  <rect x="42" y="53" width="3" height="2"></rect>
                  <rect x="48" y="49" width="2" height="6"></rect>
                  <rect x="53" y="49" width="2" height="6"></rect>
                </g>
              </g>
            </g>
          </svg>
        ),
      },
      deployment: {
        name: "Deployment",
        values: [
          "GitHub Actions",
          "Vercel",
          "AWS CodeDeploy",
          "Heroku",
          "Netlify",
          "Jenkins",
          "Docker",
          "Kubernetes",
          "S3",
          "Elastic Beanstalk",
          "Firebase Hosting",
          "DigitalOcean App Platform",
        ],
        icon: (
          <svg
            width="34px"
            height="34px"
            viewBox="0 0 1024 1024"
            fill="#16984e"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M669.805838 0l-324.417289 139.035981L2.201403 59.785472v882.878479l351.761032 81.104322 328.356642-139.035981L1021.798597 964.446255V81.104322zM720.553971 798.761711v-5.793166a46.345327 46.345327 0 0 0-92.690654 0v14.367051l-231.726634 98.252094v-177.03915a46.345327 46.345327 0 0 0-92.690654 0v188.857208L94.892057 868.974881V176.343969l208.553972 48.19914v102.191446a46.345327 46.345327 0 0 0 92.690654 0V218.054764l231.726634-99.179v185.381308a46.345327 46.345327 0 1 0 92.690654 0V106.825979l208.553972 48.19914v511.188957a46.345327 46.345327 0 0 0-80.409142 43.33288c2.548993 7.183526 4.634533 13.671871 6.256619 19.465038a46.345327 46.345327 0 0 0 74.38425 23.172663v95.934827zM194.766237 681.04458a46.345327 46.345327 0 0 0-62.102738 21.087124c-7.415252 14.830505-11.122878 23.172663-11.122879 23.172664a46.345327 46.345327 0 0 0 85.275402 36.149355s3.244173-7.415252 8.805612-18.769858a46.345327 46.345327 0 0 0-20.855397-61.639285zM875.57909 564.254356c-5.097986-6.951799-10.427699-13.671871-16.220864-20.62367A46.345327 46.345327 0 1 0 788.449876 602.489251q6.720072 7.878706 12.513238 15.757411a46.345327 46.345327 0 0 0 74.615976-54.919212zM577.810364 493.114279l20.623671 3.244173a47.50396 47.50396 0 0 0 8.573885 0 46.345327 46.345327 0 0 0 8.342159-92.690654l-25.258203-3.939353a46.345327 46.345327 0 1 0-12.281512 92.690654zM446.189636 497.980539a46.345327 46.345327 0 0 0 12.513238-1.853813c6.024893-1.622086 12.049785-3.012446 18.306404-4.17108a46.345327 46.345327 0 1 0-16.452591-91.300294c-9.037339 1.622086-18.074678 3.707626-26.88029 6.256619a46.345327 46.345327 0 0 0 12.513239 91.068568zM275.175379 567.035076a46.345327 46.345327 0 0 0-64.883458 9.037339q-7.646979 10.195972-14.598778 20.160217A46.345327 46.345327 0 1 0 271.467753 648.834578l12.744965-17.379498a46.345327 46.345327 0 0 0-9.037339-64.420004zM813.244625 303.561892a46.345327 46.345327 0 0 0-46.345327 46.345327 196.96764 196.96764 0 0 1-29.197556 96.630007 46.345327 46.345327 0 0 0-54.224032 73.457343 987.618918 987.618918 0 0 1-239.141887 183.295768 46.345327 46.345327 0 0 0 43.564607 81.799502C502.730935 776.515954 859.589952 583.487667 859.589952 349.907219a46.345327 46.345327 0 0 0-46.345327-46.345327zM517.097986 650.688391a46.345327 46.345327 0 1 0-10.195972-92.690654 174.490156 174.490156 0 0 1-120.961303-34.990722A46.345327 46.345327 0 0 0 322.447613 463.45327a635.857886 635.857886 0 0 1-91.532021-153.634759 46.345327 46.345327 0 0 0-86.434035 33.368635c5.097986 13.208418 121.424757 309.123331 344.34578 309.123331a254.899298 254.899298 0 0 0 28.270649-1.622086z"></path>
            </g>
          </svg>
        ),
      },
      documentation: {
        name: "Documentation",
        values: [
          "Markdown",
          "GitHub Pages",
          "Read the Docs",
          "Storybook",
          "JSDoc",
          "Sphinx",
          "Swagger",
          "API Blueprint",
          "MkDocs",
          "Jekyll",
        ],
        icon: (
          <svg
            width="34px"
            height="34px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="#4c6bc8"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g fill="none" fillRule="evenodd">
                <path d="m0 0h32v32h-32z"></path>
                <path
                  d="m22 0c4.418278 0 8 3.581722 8 8v16c0 4.418278-3.581722 8-8 8h-12c-4.418278 0-8-3.581722-8-8v-16c0-4.418278 3.581722-8 8-8zm0 2h-12c-3.23839694 0-5.87757176 2.56557489-5.99586153 5.77506174l-.00413847.22493826v16c0 3.2383969 2.56557489 5.8775718 5.77506174 5.9958615l.22493826.0041385h12c3.2383969 0 5.8775718-2.5655749 5.9958615-5.7750617l.0041385-.2249383v-16c0-3.23839694-2.5655749-5.87757176-5.7750617-5.99586153zm1 18c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm-10.5380879-11.89948029.012554.00075109c.3611899.01996997.6988674.23585863.8574942.58831896l3.1079467 6.90569314c.2257519.5016087.0021257 1.0912509-.4994829 1.3170027l-.0036556.0016364-.0036662.0016323c-.5031032.223996-1.0926219-.0009401-1.3186392-.5031385l-2.2194471-4.9308454-2.2610781 4.9536143c-.2278559.4990467-.81522948.7213448-1.31640388.4982076l-.00857905-.0038197c-.49979915-.2225249-.72457432-.8080843-.5020494-1.3078834l.00384181-.0085204 3.16443312-6.93069731c.1790296-.39210818.5800063-.61336637.9867316-.58195178zm7.5657016 1.89948029c1.8685634 0 3.3951265 1.4642776 3.4948212 3.3079648l.0051788.1920352v2.5c0 .5522847-.4477152 1-1 1-.3399698 0-.6403155-.169651-.8209964-.4289125-.4976081.2734474-1.0701504.4289125-1.6790036.4289125-1.9329966 0-3.5-1.5670034-3.5-3.5s1.5670034-3.5 3.5-3.5zm0 2c-.8284271 0-1.5.6715729-1.5 1.5s.6715729 1.5 1.5 1.5c.8284272 0 1.5-.6715729 1.5-1.5s-.6715728-1.5-1.5-1.5z"
                  fill="#ffffff"
                  fillRule="nonzero"
                ></path>
              </g>
            </g>
          </svg>
        ),
      },

      databases: {
        name: "Databases",
        values: [
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "SQLite",
          "Redis",
          "Firebase Realtime Database",
          "DynamoDB",
          "Couchbase",
          "ElasticSearch",
          ,
        ],
        icon: (
          <svg
            width="34px"
            height="34px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M20 18C20 20.2091 16.4183 22 12 22C7.58172 22 4 20.2091 4 18V13.974C4.50221 14.5906 5.21495 15.1029 6.00774 15.4992C7.58004 16.2854 9.69967 16.75 12 16.75C14.3003 16.75 16.42 16.2854 17.9923 15.4992C18.7851 15.1029 19.4978 14.5906 20 13.974V18Z"
                fill="#ffffff"
              ></path>
              <path
                d="M12 10.75C14.3003 10.75 16.42 10.2854 17.9923 9.49925C18.7851 9.10285 19.4978 8.59059 20 7.97397V12C20 12.5 18.2143 13.5911 17.3214 14.1576C15.9983 14.8192 14.118 15.25 12 15.25C9.88205 15.25 8.00168 14.8192 6.67856 14.1576C5.5 13.5683 4 12.5 4 12V7.97397C4.50221 8.59059 5.21495 9.10285 6.00774 9.49925C7.58004 10.2854 9.69967 10.75 12 10.75Z"
                fill="#db0f0f"
              ></path>
              <path
                d="M17.3214 8.15761C15.9983 8.81917 14.118 9.25 12 9.25C9.88205 9.25 8.00168 8.81917 6.67856 8.15761C6.16384 7.95596 5.00637 7.31492 4.2015 6.27935C4.06454 6.10313 4.00576 5.87853 4.03988 5.65798C4.06283 5.50969 4.0948 5.35695 4.13578 5.26226C4.82815 3.40554 8.0858 2 12 2C15.9142 2 19.1718 3.40554 19.8642 5.26226C19.9052 5.35695 19.9372 5.50969 19.9601 5.65798C19.9942 5.87853 19.9355 6.10313 19.7985 6.27935C18.9936 7.31492 17.8362 7.95596 17.3214 8.15761Z"
                fill="#6b10da"
              ></path>
            </g>
          </svg>
        ),
      },
      testing: {
        name: "Testing",
        values: [
          "Jest",
          "Cypress",
          "Mocha",
          "Chai",
          "Jasmine",
          "Selenium",
          "Puppeteer",
          "Karma",
          "Postman",
        ],
        icon: (
          <svg
            fill="#db0f0f"
            width="34px"
            height="34px"
            version="1.1"
            id="XMLID_207_"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g id="test">
                <g>
                  <path d="M23,24H1v-4.3l7-12V2H6V0h12v2h-2v5.7l7,12V24z M12,22h9v-1.7l-3.4-5.9l0,0c-2.6-1.5-3.9-0.8-5.4-0.1S9,15.7,6.5,14.5 l-3.4,5.9V22H12z M7.4,12.7C9,13.4,10,13,11.3,12.4c1.2-0.5,2.7-1.2,4.7-0.7l-2-3.4V2h-4v6.3L7.4,12.7z"></path>
                </g>
                <g>
                  <circle cx="14.5" cy="17.5" r="1.5"></circle>
                </g>
                <g>
                  <circle cx="9.5" cy="18.5" r="1.5"></circle>
                </g>
              </g>
            </g>
          </svg>
        ),
      },
    },
  ];

  return (
    <Layout title="Project">
      <section className="my-7">
        <div>
          <h4 className="text-gray-50"> Tools and Stacks </h4>
          <p className="text-gray-300 text-sm">
            Over the past six years of professional development, I've
            intensively used some tools while exploring others.
          </p>
        </div>

        <section className="pt-3">
          <div className="grid gap-4 lg:gap-8 md:grid-cols-3">
            {Object.values(cardData[0]).map((card, index) => (
              <div key={index} className="relative py-2 rounded-md">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-300 dark:text-gray-200">
                    <div className="text-gray-300">{card.icon}</div>
                    <span>{card.name}</span>
                  </div>
                  <div className="text-sm">
                    {card.values
                      ? card.values.join(", ")
                      : card.value.join(", ")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      <div className="my-7">
        <div>
          <h4> Project </h4>
        </div>

        {/* <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start"></ul> */}

        <ul className="">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-start justify-between my-5">
              <div className="order-1 mb-2 w-full md:w-4/5">
                <h3 className="mb-1">
                  <div className="flex items-center">
                    <span className="mb-1 block text-md font-medium text-sm text-green-500 mr-4">
                      {item.title}
                    </span>
                    <div className="text-sm">
                      <Link href="/">Link </Link>
                      <span className="mr-3"></span>
                      <Link href="/">GitHub</Link>
                    </div>
                  </div>

                  <span className="block text-md leading-6 text-slate-900 text-sm  text-gray-400">
                    {item.subtitle}
                  </span>
                </h3>

                <ul>
                  {item.tags.map((tag, index) => (
                    <li
                      key={index}
                      className="inline-block bg-brown-600 rounded-md px-3 py-0.5 text-xs font-normal text-white mr-2 mb-2"
                    >
                      #{tag}
                    </li>
                  ))}
                </ul>
              </div>

              <img
                src={item.image}
                alt=""
                className="shadow-md h-auto rounded-lg bg-slate-50  bg-cover bg-center"
                width={150}
                height={40}
              />
            </div>
          ))}
        </ul>
      </div>

      <section className="cards-books">
        <div className="my-4">
          <h4> Favourite Books </h4>
        </div>

        <div className="flex flex-wrap">
          {books.map((book, index) => (
            <div key={index} className=" rounded-lg">
              <div className="px-1">
                <img
                  src={book.image}
                  alt={book.title}
                  className=""
                  width={156}
                  height={40}
                />
              </div>
              <p className="font-normal text-sm"> {book.title}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
