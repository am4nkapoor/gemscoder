import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
  {
    title: 'E-commerce Platform Redesign',
    description: 'Complete redesign and development of a modern e-commerce platform with enhanced user experience and improved conversion rates.',
    category: 'Web Development',
    image: '/case-studies/ecommerce.svg',
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly mobile banking application with real-time transaction processing and biometric authentication.',
    category: 'Mobile Development',
    image: '/case-studies/banking.svg',
  },
  {
    title: 'Cloud Migration Project',
    description: 'Successfully migrated legacy systems to cloud infrastructure, improving scalability and reducing operational costs.',
    category: 'Cloud Solutions',
    image: '/case-studies/cloud.svg',
  },
  {
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare management system with electronic health records and appointment scheduling.',
    category: 'Enterprise Solutions',
    image: '/case-studies/healthcare.svg',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Case Studies</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our successful projects and see how we've helped businesses achieve their goals.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {caseStudies.map((study) => (
            <article key={study.title} className="flex flex-col items-start bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-full">
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-10" />
                  <div className="flex items-center justify-center h-full text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {study.category}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0" />
                  {study.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{study.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}