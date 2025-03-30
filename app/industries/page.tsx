"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    name: "Manufacturing",
    description:
      "Digital transformation solutions for modern manufacturing operations",
    image: "/industries/manufacturing.jpg",
    href: "/industries/manufacturing",
  },
  {
    name: "Pharmaceutical",
    description: "Compliance-focused solutions for pharmaceutical companies",
    image: "/industries/pharma.jpg",
    href: "/industries/pharmaceutical",
  },
  {
    name: "Construction",
    description:
      "Project management and resource optimization for construction",
    image: "/industries/construction.jpg",
    href: "/industries/construction",
  },
  {
    name: "Chemical",
    description:
      "Process automation and safety solutions for chemical industry",
    image: "/industries/chemical.jpg",
    href: "/industries/chemical",
  },
  {
    name: "BFSI",
    description:
      "Secure and scalable solutions for banking and financial services",
    image: "/industries/bfsi.jpg",
    href: "/industries/bfsi",
  },
  {
    name: "Entertainment & Media",
    description: "Digital content management and streaming solutions",
    image: "/industries/entertainment.jpg",
    href: "/industries/entertainment",
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Industry Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Tailored solutions for diverse industry verticals
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {industries.map((industry) => (
              <motion.div
                key={industry.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {industry.name}
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    {industry.description}
                  </p>
                  <Link
                    href={industry.href}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600"
                  >
                    Learn more
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
