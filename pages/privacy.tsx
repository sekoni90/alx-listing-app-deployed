export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-indigo-800 to-purple-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-lg md:text-xl text-indigo-200">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information you provide directly to us when you create an account, make a booking, 
                or communicate with us. This includes:
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Personal information (name, email address, phone number)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Payment information (credit card details, billing address)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Booking history and preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Communication records with our support team</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-3">Service Delivery</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Process bookings and payments</li>
                    <li>• Send confirmations and updates</li>
                    <li>• Provide customer support</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-3">Improvements</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Improve our services</li>
                    <li>• Personalize your experience</li>
                    <li>• Analyze usage patterns</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">3. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate security measures to protect your personal information from unauthorized 
                access, alteration, disclosure, or destruction.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Secure Encryption</p>
                    <p className="text-gray-700 text-sm">
                      All payment information is encrypted using industry-standard SSL/TLS protocols and processed securely.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <div className="space-y-3">
                <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <span className="text-indigo-600 font-bold mr-3">→</span>
                  <span className="text-gray-700">Property owners to facilitate your bookings</span>
                </div>
                <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <span className="text-indigo-600 font-bold mr-3">→</span>
                  <span className="text-gray-700">Service providers who assist in our operations</span>
                </div>
                <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <span className="text-indigo-600 font-bold mr-3">→</span>
                  <span className="text-gray-700">Law enforcement when required by law</span>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <div className="bg-indigo-50 p-6 rounded-xl">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">✓</span>
                    <span>Access your personal information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">✓</span>
                    <span>Update or correct your information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">✓</span>
                    <span>Delete your account and data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">✓</span>
                    <span>Opt-out of marketing communications</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-indigo-600 font-semibold">Email: privacy@alxlisting.com</p>
                  <p className="text-indigo-600 font-semibold">Phone: +1 (555) 123-4567</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
