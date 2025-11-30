export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Terms of Service</h1>
          <p className="text-lg md:text-xl text-slate-300">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using AlxListing (&quot;the Service&quot;), you accept and agree to be bound by the terms 
                and provisions of this agreement. If you do not agree to these terms, please do not use our Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">2. Use of Service</h2>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-4">
                <h3 className="font-bold text-gray-900 mb-3">User Requirements:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>You must be at least 18 years old to use our service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>You are responsible for maintaining the confidentiality of your account</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>You agree to provide accurate and complete information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>You will not use the service for any illegal purposes</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">3. Booking and Payments</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All bookings are subject to availability and confirmation. Prices are subject to change without notice. 
                Payment must be made in full at the time of booking unless otherwise specified.
              </p>
              <div className="bg-gray-100 p-6 rounded-xl">
                <p className="text-gray-700 font-semibold">
                  We accept major credit cards, debit cards, and other payment methods as displayed during checkout.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">4. Cancellation Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cancellation policies vary by property. Please review the specific cancellation policy for each 
                property before booking. Refunds, if applicable, will be processed according to the property&apos;s policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AlxListing acts as an intermediary between guests and property owners. We are not responsible for 
                the condition, quality, or accuracy of property listings. Property owners are solely responsible 
                for their listings and services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on AlxListing, including text, graphics, logos, and images, is the property of AlxListing 
                or its content suppliers and is protected by international copyright laws.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">7. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                posting to the website. Your continued use of the Service constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                <p className="text-gray-700 mb-2">
                  For questions about these Terms of Service, please contact us:
                </p>
                <p className="text-blue-600 font-semibold">legal@alxlisting.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
