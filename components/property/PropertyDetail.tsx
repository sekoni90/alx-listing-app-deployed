import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { PropertyProps } from '@/interfaces';

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  const router = useRouter();
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  const calculateNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const start = new Date(bookingData.checkIn);
      const end = new Date(bookingData.checkOut);
      const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      return nights > 0 ? nights : 0;
    }
    return 0;
  };

  const nights = calculateNights();
  const subtotal = property.price * nights;
  const discount = property.discount ? (subtotal * parseInt(property.discount)) / 100 : 0;
  const total = subtotal - discount;

  const handleBooking = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }
    if (nights <= 0) {
      alert('Check-out date must be after check-in date');
      return;
    }
    router.push('/booking');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-96">
              <Image src={property.image} alt={property.name} fill style={{ objectFit: 'cover' }} priority />
              {property.discount && (
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-md z-10">
                  {property.discount}% OFF
                </div>
              )}
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{property.name}</h1>
                  <p className="text-lg text-gray-600 mt-2">
                    {property.address.city}, {property.address.state}, {property.address.country}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900">${property.price}</p>
                  <p className="text-gray-600">per night</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <svg className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.538 1.118l-3.382-2.455a1 1 0 00-1.175 0L5.09 18.85c-.783.57-1.838-.197-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L.093 9.093C-.69 8.523-.288 7.282.68 7.282h4.178a1 1 0 00.95-.69L6.094 2.626z" />
                  </svg>
                  <span className="ml-2 text-xl font-semibold">{property.rating.toFixed(2)}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {property.category.map((cat, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">{cat}</span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Amenities</h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <span className="ml-2">{property.offers.bed} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <span className="ml-2">{property.offers.occupants} Guests</span>
                  </div>
                  <div className="flex items-center">
                    <span className="ml-2">{property.offers.shower} Baths</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-2xl shadow-2xl p-6 border-2 border-gray-100">
            <div className="mb-6">
              <div className="flex items-baseline justify-between mb-2">
                <div>
                  <span className="text-4xl font-extrabold text-gray-900">${property.price}</span>
                  <span className="text-gray-600 ml-2">/ night</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="checkIn" className="block text-sm font-semibold text-gray-700 mb-2">Check-in</label>
                <input
                  id="checkIn"
                  type="date"
                  value={bookingData.checkIn}
                  onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="checkOut" className="block text-sm font-semibold text-gray-700 mb-2">Check-out</label>
                <input
                  id="checkOut"
                  type="date"
                  value={bookingData.checkOut}
                  onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                  min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-semibold text-gray-700 mb-2">Guests</label>
                <select
                  id="guests"
                  value={bookingData.guests}
                  onChange={(e) => setBookingData({...bookingData, guests: parseInt(e.target.value)})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            {nights > 0 && (
              <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">${property.price} x {nights} nights</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount ({property.discount}%)</span>
                    <span className="font-semibold">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>
            )}

            <button
              onClick={handleBooking}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold rounded-xl shadow-lg transition-all"
            >
              Reserve Now
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">You won&apos;t be charged yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
