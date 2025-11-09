// components/ListingSection.tsx
import PropertyCard from "@/components/property/PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const ListingSection: React.FC = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </section>
  );
};

export default ListingSection;
