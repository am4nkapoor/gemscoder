import Image from 'next/image';

const services = [
  {
    name: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    features: [
      'Full-stack development with React, Node.js, and Next.js',
      'Progressive Web Apps (PWA) development',
      'E-commerce solutions with secure payment integration',
      'Performance optimization and SEO best practices'
    ],
    metrics: '40+ successful web projects delivered',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: [
      'React Native and Flutter development',
      'Native iOS and Android development',
      'App Store and Play Store deployment',
      'Real-time features and offline functionality'
    ],
    metrics: '25+ mobile apps launched successfully',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    name: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions.',
    features: [
      'AWS and Azure cloud architecture',
      'Containerization with Docker and Kubernetes',
      'CI/CD pipeline implementation',
      'Cloud security and compliance'
    ],
    metrics: '30+ cloud migrations completed',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    name: 'UI/UX Design',
    description: 'User-centered design solutions that enhance user experience.',
    features: [
      'User research and persona development',
      'Wireframing and prototyping',
      'Responsive design implementation',
      'Accessibility compliance'
    ],
    metrics: '50+ interfaces designed and implemented',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
];

const successStories = [
  {
    client: 'TechCorp Solutions',
    project: 'Digital Transformation',
    outcome: 'Achieved 200% increase in online sales after implementing our e-commerce solution.'
  },
  {
    client: 'HealthCare Plus',
    project: 'Healthcare Management System',
    outcome: 'Reduced patient wait times by 40% through our automated scheduling system.'
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a comprehensive range of IT solutions to help your business thrive in the digital age.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600 text-white">
                    {service.icon}
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-semibold text-blue-600">{service.metrics}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Success Stories Section */}
        <div className="mt-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Success Stories</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See how we've helped businesses achieve their goals through innovative solutions.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {successStories.map((story, index) => (
              <div key={index} className="flex flex-col bg-blue-50 p-8 rounded-2xl">
                <div className="text-lg font-semibold text-gray-900">{story.client}</div>
                <div className="mt-2 text-blue-600 font-medium">{story.project}</div>
                <p className="mt-4 text-gray-600">{story.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}