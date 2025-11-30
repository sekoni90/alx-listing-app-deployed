// components/FilterSection.tsx
import Pill from "@/components/Pill";
import { useState } from "react";

const filters = ["Top Villa", "Self Checkin", "Pet Friendly", "Free WiFi", "Pool", "Beachfront", "Mountain View", "City Center"];

const FilterSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Filter Properties</h3>
          <p className="text-gray-600">Find exactly what you&apos;re looking for</p>
        </div>
        {activeFilter && (
          <button 
            onClick={() => setActiveFilter(null)}
            className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-3">
        {filters.map((filter, index) => (
          <Pill 
            key={index} 
            label={filter} 
            active={activeFilter === filter}
            onClick={(label) => setActiveFilter(label === activeFilter ? null : label)}
          />
        ))}
      </div>
    </section>
  );
};

export default FilterSection;
