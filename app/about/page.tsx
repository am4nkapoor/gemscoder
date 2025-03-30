"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiGraphql,
  SiVuedotjs,
} from "react-icons/si";

const projects = [
  {
    title: "3D Solar System Planets to Explore",
    description:
      "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    image: "/projects/solar-system.jpg",
    link: "https://ui.aceternity.com",
    techStack: ["Three.js", "React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Yoom - Video Conferencing App",
    description:
      "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    image: "/projects/video-conf.jpg",
    link: "https://ui.aceternity.com",
    techStack: ["WebRTC", "React", "Node.js", "Socket.io", "Express"],
  },
  {
    title: "AI Image SaaS - Canva Application",
    description:
      "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    image: "/projects/ai-saas.jpg",
    link: "https://ui.aceternity.com",
    techStack: ["Next.js", "OpenAI", "Stripe", "Prisma", "TypeScript"],
  },
  {
    title: "Animated Apple Iphone 3D Website",
    description:
      "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    image: "/projects/iphone.jpg",
    link: "https://ui.aceternity.com",
    techStack: ["Three.js", "GSAP", "React", "Vite", "Tailwind CSS"],
  },
];

const techStack = [
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "Express", icon: SiExpress, color: "text-gray-800" },
  { name: "Vue.js", icon: SiVuedotjs, color: "text-green-600" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <Link href="/" className="inline-flex space-x-6">
                <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
                  Available for hire
                </span>
              </Link>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hi! I'm Aman Kapoor
              <br />
              <span className="text-blue-600">Full Stack Developer</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A tech enthusiast with a passion for development, based in India.
              I prioritize client collaboration and foster open communication.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button
                onClick={() =>
                  navigator.clipboard.writeText("your.email@example.com")
                }
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Copy Email Address
              </button>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/yourusername"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <FaGithub className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/yourusername"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <FaLinkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="https://twitter.com/yourusername"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <FaTwitter className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </motion.div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <Image
                src="/b1.svg"
                alt="Developer illustration"
                width={500}
                height={500}
                className="w-[40rem] h-[30rem] rounded-md bg-white/5 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              My Tech Stack
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm ring-1 ring-gray-200"
                whileHover={{ scale: 1.05 }}
              >
                <tech.icon className={`h-12 w-12 ${tech.color}`} />
                <span className="mt-4 text-sm font-medium text-gray-900">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A small selection of recent projects
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                className="flex flex-col items-start bg-white rounded-2xl shadow-lg overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600"
                  >
                    Check Live Site
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to take your digital presence to the next level?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Let's discuss how I can help you achieve your goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() =>
                  navigator.clipboard.writeText("your.email@example.com")
                }
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Let's get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
