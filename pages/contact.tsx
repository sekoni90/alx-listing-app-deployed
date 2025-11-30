import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-emerald-100">We&apos;re here to help! Get in touch with our team</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="payment">Payment Issue</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-emerald-600 font-semibold">support@alxlisting.com</p>
                    <p className="text-gray-600 text-sm mt-1">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-teal-600 font-semibold">+1 (555) 123-4567</p>
                    <p className="text-gray-600 text-sm mt-1">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-700">123 Listing Street</p>
                    <p className="text-gray-700">San Francisco, CA 94102</p>
                    <p className="text-gray-700">United States</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="text-emerald-100 mb-6">
                Check out our Help Center for instant answers to common questions.
              </p>
              <Link
                href="/help"
                className="inline-block px-6 py-3 bg-white text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition-colors"
              >
                Visit Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
