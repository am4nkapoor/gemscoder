'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'info', message: 'Sending...' });

    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Thank you for your message. We\'ll get back to you soon!'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="bg-white py-24 sm:py-32 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-fade-in">Contact Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have a project in mind? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="flex flex-col gap-8 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-sm transition-all duration-300 hover:shadow-md">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Get in Touch</h3>
              <p className="mt-4 leading-7 text-gray-600">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 transition-transform duration-300 hover:translate-x-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <FaPhone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                  <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4 transition-transform duration-300 hover:translate-x-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <FaEnvelope className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <p className="mt-1 text-gray-600">contact@gemscoder.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 transition-transform duration-300 hover:translate-x-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <FaMapMarkerAlt className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Location</h4>
                  <p className="mt-1 text-gray-600">123 Innovation Street, Tech City, TC 12345</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[300px] w-full rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1644332274386!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2.5 relative">
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-all duration-200"
                      placeholder="Your name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5 relative">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-all duration-200"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
                  Subject
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-all duration-200"
                    placeholder="What's this about?"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-all duration-200"
                    placeholder="Tell us about your project or question..."
                    required
                  />
                </div>
              </div>

              {status.message && (
                <div
                  className={`rounded-md p-4 ${status.type === 'success' ? 'bg-green-50' : 'bg-blue-50'} transition-all duration-300`}
                >
                  <p className={`text-sm ${status.type === 'success' ? 'text-green-800' : 'text-blue-800'}`}>
                    {status.message}
                  </p>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={status.type === 'info'}
                  className={`block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 ${status.type === 'info' ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {status.type === 'info' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}