import React from "react";
import type { PropertyProps } from "@/interfaces";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  if (!property) return null;

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md bg-white">
      <div className="relative">
        <img src={property.image} alt={property.name} className="w-full h-48 object-cover md:h-44" />
        {property.discount && property.discount !== "" && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            {property.discount}% off
          </div>
        )}
      </div>
      <div className="p-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{property.name}</h3>
            <p className="text-sm text-gray-500">
              {property.address.city}, {property.address.state}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {property.category.slice(0, 3).map((c, index) => (
                <span key={index} className="text-xs px-2 py-1 bg-gray-100 rounded">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold">${property.price}</div>
            <div className="mt-1 text-sm text-gray-600">per night</div>
            <div className="mt-2 inline-flex items-center text-sm text-gray-700">
              <svg
                className="h-4 w-4 mr-1 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.538 1.118l-3.382-2.455a1 1 0 00-1.175 0L5.09 18.85c-.783.57-1.838-.197-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L.093 9.093C-.69 8.523-.288 7.282.68 7.282h4.178a1 1 0 00.95-.69L6.094 2.626z" />
              </svg>
              {property.rating.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
