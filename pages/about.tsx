export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">About AlxListing</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Your trusted platform for finding the perfect accommodation worldwide
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Mission Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We connect travelers with amazing properties at the best prices. With over 2 million listings worldwide, 
                we make it easy to find your dream destination.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our platform is built on trust, transparency, and exceptional service. We&apos;re committed to making 
                your travel experience unforgettable.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-12 text-center">
              <div className="text-6xl font-extrabold text-blue-600 mb-2">2M+</div>
              <div className="text-xl text-gray-700 font-semibold">Properties Worldwide</div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Price Guarantee</h3>
              <p className="text-gray-600 leading-relaxed">
                We guarantee the best prices on all our properties. Find a lower price elsewhere and we&apos;ll match it.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated support team is available around the clock to assist you with any questions or concerns.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Booking</h3>
              <p className="text-gray-600 leading-relaxed">
                Your data is protected with industry-leading security measures. Book with confidence and peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-extrabold mb-2">500K+</div>
              <div className="text-blue-100 text-lg">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2">150+</div>
              <div className="text-blue-100 text-lg">Countries</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2">4.9★</div>
              <div className="text-blue-100 text-lg">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
