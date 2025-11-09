// components/FilterSection.tsx
import Pill from "@/components/Pill";

const filters = ["Top Villa", "Self Checkin", "Pet Friendly", "Free WiFi", "Pool"];

const FilterSection: React.FC = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto flex flex-wrap gap-4">
        {filters.map((filter, index) => (
          <Pill key={index} label={filter} />
        ))}
      </div>
    </section>
  );
};

export default FilterSection;
