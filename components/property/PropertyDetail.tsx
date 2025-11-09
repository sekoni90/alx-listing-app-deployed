import React from 'react';
import type { PropertyProps } from '@/interfaces';

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative h-96">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover"
          />
          {property.discount && (
            <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-md">
              {property.discount}% OFF
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-8">
          {/* Header */}
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

          {/* Rating and Categories */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <svg className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.538 1.118l-3.382-2.455a1 1 0 00-1.175 0L5.09 18.85c-.783.57-1.838-.197-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L.093 9.093C-.69 8.523-.288 7.282.68 7.282h4.178a1 1 0 00.95-.69L6.094 2.626z" />
              </svg>
              <span className="ml-2 text-xl font-semibold">{property.rating.toFixed(2)}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {property.category.map((cat, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Amenities</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="ml-2">{property.offers.bed} Beds</span>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="ml-2">{property.offers.occupants}</span>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="ml-2">{property.offers.shower} Bathrooms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;