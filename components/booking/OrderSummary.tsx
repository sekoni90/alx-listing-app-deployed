import Image from "next/image";
import type { BookingDetails } from "@/interfaces/booking";

interface OrderSummaryProps {
  bookingDetails: BookingDetails;
}

function OrderSummary({ bookingDetails }: OrderSummaryProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6">
        <h2 className="text-2xl font-bold">Booking Summary</h2>
      </div>
      
      <div className="p-6">
        <div className="flex items-start space-x-4 mb-6">
          <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
            <Image 
              src="/assets/images/image1.png" 
              alt="Property" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{bookingDetails.propertyName}</h3>
            <div className="flex items-center text-sm text-gray-600 mb-1">
              <svg className="h-4 w-4 text-yellow-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.538 1.118l-3.382-2.455a1 1 0 00-1.175 0L5.09 18.85c-.783.57-1.838-.197-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L.093 9.093C-.69 8.523-.288 7.282.68 7.282h4.178a1 1 0 00.95-.69L6.094 2.626z" />
              </svg>
              <span className="font-semibold">4.76</span>
              <span className="mx-1">·</span>
              <span>345 reviews</span>
            </div>
            <p className="text-sm text-gray-600">{bookingDetails.startDate} • {bookingDetails.totalNights} Nights</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 space-y-4">
          <div className="flex justify-between text-gray-700">
            <span>${bookingDetails.price / bookingDetails.totalNights} x {bookingDetails.totalNights} nights</span>
            <span className="font-semibold">${bookingDetails.price}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Service fee</span>
            <span className="font-semibold">${bookingDetails.bookingFee}</span>
          </div>
          <div className="border-t border-gray-200 pt-4 flex justify-between text-xl font-bold">
            <span className="text-gray-900">Total</span>
            <span className="text-blue-600">${bookingDetails.bookingFee + bookingDetails.price}</span>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-blue-900">
              You won&apos;t be charged until your booking is confirmed by the host.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
