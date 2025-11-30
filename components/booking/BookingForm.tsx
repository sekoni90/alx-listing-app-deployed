import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import type { BookingFormData } from "@/interfaces/booking";

function BookingForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post("/api/bookings", formData);
      setSuccess(true);
      setTimeout(() => router.push("/"), 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit booking");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
        <p className="text-lg text-gray-600 mb-6">Check your email for confirmation details.</p>
        <p className="text-sm text-gray-500">Redirecting to home...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
            Contact Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
            Payment Information
          </h2>
          
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-semibold text-gray-700 mb-2">
              Card Number
            </label>
            <div className="relative">
              <input
                id="cardNumber"
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                required
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-2">
                <svg className="w-8 h-6" viewBox="0 0 48 32"><rect fill="#1434CB" width="48" height="32" rx="4"/></svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expirationDate" className="block text-sm font-semibold text-gray-700 mb-2">
                Expiration Date
              </label>
              <input
                id="expirationDate"
                type="text"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="MM/YY"
                maxLength={5}
                required
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-semibold text-gray-700 mb-2">
                CVV
              </label>
              <input
                id="cvv"
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="123"
                maxLength={4}
                required
              />
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">3</span>
            Billing Address
          </h2>
          <div>
            <label htmlFor="billingAddress" className="block text-sm font-semibold text-gray-700 mb-2">
              Address
            </label>
            <textarea
              id="billingAddress"
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              rows={3}
              placeholder="123 Main St, City, State, ZIP"
              required
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start">
            <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-red-700">{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            "Confirm & Pay"
          )}
        </button>

        <p className="text-center text-sm text-gray-500">
          🔒 Your payment information is secure and encrypted
        </p>
      </form>
    </div>
  );
}

export default BookingForm;
