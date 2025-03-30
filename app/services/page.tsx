"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaCloud,
  FaCogs,
  FaMobile,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    category: "Engineering Services",
    items: [
      {
        title: "IT Consulting",
        description:
          "Strategic technology consulting to optimize your business processes and drive innovation.",
        icon: FaCogs,
      },
      {
        title: "Mobile Application Development",
        description:
          "Custom mobile solutions for iOS and Android platforms using cutting-edge technologies.",
        icon: FaMobile,
      },
      {
        title: "Website Development",
        description:
          "Responsive and scalable web applications built with modern frameworks and best practices.",
        icon: FaCode,
      },
    ],
  },
  {
    category: "Smart Automation",
    items: [
      {
        title: "Artificial Intelligence",
        description:
          "AI-powered solutions to automate processes and enhance decision-making.",
        icon: FaRobot,
      },
      {
        title: "Cloud Solutions",
        description:
          "Secure and scalable cloud infrastructure and migration services.",
        icon: FaCloud,
      },
      {
        title: "Cyber Security",
        description:
          "Comprehensive security solutions to protect your digital assets.",
        icon: FaShieldAlt,
      },
    ],
  },
];

export default function ServicesPage() {
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
                Our Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Comprehensive technology solutions to drive your business
                forward
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      {services.map((category) => (
        <div key={category.category} className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                {category.category}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to build modern solutions
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {category.items.map((service) => (
                  <motion.div
                    key={service.title}
                    className="flex flex-col bg-white rounded-2xl shadow-lg p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/10">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <dt className="text-xl font-semibold leading-7 text-gray-900">
                      {service.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{service.description}</p>
                      <p className="mt-6">
                        <a
                          href="#"
                          className="text-sm font-semibold leading-6 text-blue-600"
                        >
                          Learn more <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      ))}

      {/* CTA Section */}
      <div className="relative isolate overflow-hidden bg-blue-600 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your business?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get in touch with our experts to discuss your project requirements
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </a>
              <a
                href="/about"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
