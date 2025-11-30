import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { PropertyProps } from "@/interfaces";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  if (!property) return null;

  return (
    <Link href={`/property/${property.id}`}>
      <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100">
        <div className="relative h-56 overflow-hidden">
          <Image 
            src={property.image} 
            alt={property.name} 
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="group-hover:scale-110 transition-transform duration-300"
          />
          {property.discount && property.discount !== "" && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10">
              {property.discount}% OFF
            </div>
          )}
          <div className="absolute top-3 left-3 inline-flex items-center bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-semibold px-3 py-1.5 rounded-full shadow-md z-10">
            <svg className="h-4 w-4 mr-1 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.538 1.118l-3.382-2.455a1 1 0 00-1.175 0L5.09 18.85c-.783.57-1.838-.197-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L.093 9.093C-.69 8.523-.288 7.282.68 7.282h4.178a1 1 0 00.95-.69L6.094 2.626z" />
            </svg>
            {property.rating.toFixed(1)}
          </div>
        </div>
        
        <div className="p-5">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
              {property.name}
            </h3>
            <p className="text-sm text-gray-600 flex items-center">
              <svg className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {property.address.city}, {property.address.state}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {property.category.slice(0, 2).map((c, index) => (
              <span key={index} className="text-xs px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                {c}
              </span>
            ))}
            {property.category.length > 2 && (
              <span className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
                +{property.category.length - 2}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                {property.offers.bed}
              </span>
              <span className="flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {property.offers.occupants}
              </span>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">
                ${property.price}
              </div>
              <div className="text-xs text-gray-500">per night</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
