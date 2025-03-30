"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaCode, FaCloud, FaMobile, FaRocket, FaCheck } from "react-icons/fa6";
import {
  SiMicrosoft,
  SiIbm,
  SiAmazon,
  SiGoogle,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiVercel,
} from "react-icons/si";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies.",
    icon: FaCode,
  },
  {
    name: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure for your business.",
    icon: FaCloud,
  },
  {
    name: "Mobile Apps",
    description: "Native and cross-platform mobile applications.",
    icon: FaMobile,
  },
  {
    name: "Digital Transformation",
    description: "Modernize your business with innovative digital solutions.",
    icon: FaRocket,
  },
];

const stats = [
  { id: 1, name: "Years of Experience", value: "10+" },
  { id: 2, name: "Successful Projects", value: "500+" },
  { id: 3, name: "Happy Clients", value: "200+" },
  { id: 4, name: "Team Members", value: "50+" },
];

const testimonials = [
  {
    id: 1,
    quote:
      "GemsCoder transformed our business with their innovative solutions. Their expertise and dedication to quality are unmatched.",
    author: "John Smith",
    role: "CEO, TechCorp",
  },
  {
    id: 2,
    quote:
      "Working with GemsCoder was a game-changer for our company. They delivered beyond our expectations.",
    author: "Sarah Johnson",
    role: "CTO, InnovateX",
  },
];

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce solution with advanced features and seamless user experience.",
    image: "/portfolio1.svg",
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description:
      "An integrated healthcare platform streamlining patient care and administrative processes.",
    image: "/portfolio2.svg",
  },
];

const whyChooseUs = [
  {
    title: "Expert Team",
    description:
      "Our team consists of experienced developers, designers, and architects with proven track records.",
    icon: FaCheck,
  },
  {
    title: "Modern Technologies",
    description:
      "We use cutting-edge technologies and follow best practices to deliver scalable solutions.",
    icon: FaCheck,
  },
  {
    title: "Agile Development",
    description:
      "Our agile approach ensures quick iterations and continuous improvement throughout the project.",
    icon: FaCheck,
  },
  {
    title: "24/7 Support",
    description:
      "We provide round-the-clock support to ensure your systems run smoothly at all times.",
    icon: FaCheck,
  },
];

const technologies = [
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Vercel", icon: SiVercel, color: "text-gray-900" },
];

// Add new sections data
const services = [
  {
    title: "Software Development & Support",
    description:
      "Building and Maintaining Software Solutions for seamless Business productivity.",
    icon: FaCode,
    link: "/services/development",
  },
  {
    title: "Advanced Software Consulting",
    description: "Expert assistance for your software needs & requirements.",
    icon: FaCloud,
    link: "/services/consulting",
  },
  {
    title: "ERP Solutions",
    description:
      "Transform the core of your organization digitally for better productivity.",
    icon: FaRocket,
    link: "/services/erp",
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for modern businesses.",
    icon: FaMobile,
    link: "/services/mobile",
  },
];

const achievements = [
  { id: 1, value: "400+", label: "Expert Employees" },
  { id: 2, value: "3500+", label: "Projects Delivered" },
  { id: 3, value: "1500+", label: "Satisfied Clients" },
  { id: 4, value: "25+", label: "Years Experience" },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Banner section */}
      <div className="relative isolate overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-900"></div>
          <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-20 bg-repeat"></div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-20 -left-20 w-40 h-40 md:w-72 md:h-72"
            animate={{
              y: [0, 20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/coding-icons.svg"
              alt="Coding"
              width={300}
              height={300}
              className="w-full h-full object-contain opacity-10"
            />
          </motion.div>

          <motion.div
            className="absolute top-1/4 -right-20 w-40 h-40 md:w-64 md:h-64"
            animate={{
              y: [0, -30, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/tech-stack.svg"
              alt="Tech Stack"
              width={250}
              height={250}
              className="w-full h-full object-contain opacity-10"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-x-4 text-sm leading-6 text-white/70">
              <span className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-white/20">
                New Services Available
              </span>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Building Digital Excellence Through Innovation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Transforming ideas into powerful digital solutions. We specialize
              in custom software development, cloud architecture, and digital
              transformation strategies.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-base font-medium transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get in Touch
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/portfolio"
                className="text-sm font-semibold leading-6 text-white group"
              >
                View Our Work{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Banner Animation */}
          <motion.div
            className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="relative w-[40rem] h-[30rem] rounded-2xl overflow-hidden">
                {/* Main Tech Pattern */}
                <div className="absolute inset-0">
                  <Image
                    src="/tech-pattern.svg"
                    alt="Technology Pattern"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0">
                  <motion.div
                    className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-lg backdrop-blur-sm"
                    animate={{
                      y: [0, 20, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="p-4">
                      <code className="text-white/70 text-xs">{`{code}`}</code>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full backdrop-blur-sm"
                    animate={{
                      y: [0, -30, 0],
                      rotate: [0, -15, 0],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="h-full flex items-center justify-center">
                      <div className="text-white/70 text-2xl">&lt;/&gt;</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trusted by section */}
      <motion.div
        className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-lg font-semibold leading-8 text-gray-900">
              Trusted by the world's most innovative teams
            </h2>
          </div>
          <div className="mx-auto mt-10 grid grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="col-span-1 flex justify-center"
            >
              {/* <SiMicrosoft className="h-12 w-auto text-gray-500" /> */}
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="col-span-1 flex justify-center"
            >
              {/* <SiIbm className="h-12 w-auto text-gray-500" /> */}
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="col-span-1 flex justify-center"
            >
              <SiAmazon className="h-12 w-auto text-gray-500" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="col-span-1 flex justify-center"
            >
              <SiGoogle className="h-12 w-auto text-gray-500" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Feature section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive IT Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From web development to cloud solutions, we provide end-to-end
            services to help your business thrive in the digital age.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/10">
                  <feature.icon
                    className="h-8 w-8 text-blue-600"
                    aria-hidden="true"
                  />
                </div>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.dl
            className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="bg-blue-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <motion.div
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col justify-between bg-white/5 p-8 backdrop-blur-sm rounded-2xl"
              >
                <blockquote className="text-lg font-semibold leading-8 text-white">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-6">
                  <div className="text-base text-white">
                    <span className="font-semibold">{testimonial.author}</span>{" "}
                    — {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Portfolio section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover how we've helped businesses achieve their digital
              transformation goals.
            </p>
          </div>
          <motion.div
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <Image
                    className="h-48 w-full object-cover"
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={400}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              Why Choose Us
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Building Excellence Through Experience
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We combine technical expertise with industry best practices to
              deliver outstanding results
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {whyChooseUs.map((item) => (
                <motion.div
                  key={item.title}
                  className="flex flex-col items-start"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="rounded-lg bg-white p-2 ring-1 ring-gray-200">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <dt className="mt-4 font-semibold text-gray-900">
                    {item.title}
                  </dt>
                  <dd className="mt-2 leading-7 text-gray-600">
                    {item.description}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Services Showcase Section */}
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              Our Services
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Unleash your Business Productivity
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We deliver personalized technology solutions to connect all
              technical gaps
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/10">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto p-6 bg-gray-50">
                  <Link
                    href={service.link}
                    className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center"
                  >
                    Learn more
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Empowering Business Ecosystems with Digital Transformation
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              For over 25 years, we've been transforming businesses through
              technology, not just as a service provider, but as a trusted
              innovation partner.
            </p>
          </div>
          <motion.div
            className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 text-center lg:max-w-none lg:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-300">
                  {achievement.label}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {achievement.value}
                </dd>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              Latest Technologies
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Built with Modern Stack
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We use the latest and most efficient technologies to build
              scalable and maintainable solutions
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
              {technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
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
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1d4240dd-898f-445f-932d-e2872fd12de3"
              width={200}
              height={200}
              x="50%"
              y={0}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={0} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)"
          />
        </svg>
        <div className="relative z-10">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to transform your business?
              <br />
              Let's build something great together.
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-base font-medium transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
