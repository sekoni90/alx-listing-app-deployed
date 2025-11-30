import { useState } from "react";

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      category: "Booking",
      questions: [
        {
          q: "How do I make a booking?",
          a: "Browse properties, select your dates, and click 'Book Now'. Fill in your details and complete the payment to confirm your reservation."
        },
        {
          q: "Can I modify my booking?",
          a: "Yes, you can modify your booking up to 48 hours before check-in. Go to 'My Bookings' and select 'Modify Booking'."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and PayPal."
        }
      ]
    },
    {
      category: "Cancellation",
      questions: [
        {
          q: "What is your cancellation policy?",
          a: "Cancellation policies vary by property. Most properties offer free cancellation up to 24-48 hours before check-in. Check the specific property's policy before booking."
        },
        {
          q: "How do I cancel my booking?",
          a: "Go to 'My Bookings', select the booking you want to cancel, and click 'Cancel Booking'. Refunds will be processed according to the property's cancellation policy."
        },
        {
          q: "When will I receive my refund?",
          a: "Refunds are typically processed within 5-10 business days after cancellation, depending on your payment method and bank."
        }
      ]
    },
    {
      category: "Account",
      questions: [
        {
          q: "How do I create an account?",
          a: "Click 'Sign Up' in the top right corner, enter your email and create a password, or sign up using Google, Facebook, or GitHub."
        },
        {
          q: "I forgot my password. What should I do?",
          a: "Click 'Forgot Password' on the login page, enter your email, and we'll send you a password reset link."
        },
        {
          q: "How do I update my profile information?",
          a: "Log in to your account, go to 'Profile Settings', and update your information. Don't forget to save your changes."
        }
      ]
    },
    {
      category: "Payment",
      questions: [
        {
          q: "Is my payment information secure?",
          a: "Yes, all payment information is encrypted using industry-standard SSL/TLS protocols. We never store your full credit card details."
        },
        {
          q: "Why was my payment declined?",
          a: "Common reasons include insufficient funds, incorrect card details, or your bank blocking the transaction. Contact your bank or try a different payment method."
        },
        {
          q: "Can I get an invoice for my booking?",
          a: "Yes, invoices are automatically sent to your email after booking. You can also download them from 'My Bookings'."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Help Center</h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">Find answers to your questions</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Quick Links */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <a href="/contact" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
            <p className="text-gray-600 text-sm">Get in touch with our support team</p>
          </a>

          <a href="/booking" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Make a Booking</h3>
            <p className="text-gray-600 text-sm">Start your reservation now</p>
          </a>

          <a href="/about" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">About Us</h3>
            <p className="text-gray-600 text-sm">Learn more about AlxListing</p>
          </a>

          <a href="/privacy" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Privacy & Security</h3>
            <p className="text-gray-600 text-sm">Your data is safe with us</p>
          </a>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  {categoryIndex + 1}
                </span>
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex;
                  return (
                    <div key={faqIndex} className="border-2 border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === globalIndex ? null : globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900">{faq.q}</span>
                        <svg
                          className={`w-5 h-5 text-gray-600 transition-transform ${openFaq === globalIndex ? 'transform rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openFaq === globalIndex && (
                        <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
                          <p className="text-gray-700">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Need Help */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-blue-100 text-lg mb-8">Our support team is here to assist you 24/7</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="tel:+15551234567"
              className="px-8 py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
