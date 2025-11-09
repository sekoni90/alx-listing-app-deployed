import React from "react";
import type { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onPrimaryClick, primaryLabel }) => {
  return (
    <article className="card border rounded-lg overflow-hidden shadow-sm max-w-sm">
      <div className="card-image w-full h-48 bg-gray-100">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">No image</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <div className="flex gap-2">
          <button onClick={onPrimaryClick} className="btn-primary px-3 py-2 rounded">
            {primaryLabel}
          </button>
        </div>
      </div>
    </article>
  );
};
export default Card;