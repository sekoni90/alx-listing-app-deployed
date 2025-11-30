import axios from "axios";
import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import FilterSection from "@/components/FilterSection";
import PropertyCard from "@/components/property/PropertyCard";
import type { PropertyProps } from "@/interfaces";

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`);
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FilterSection />
        
        <section className="mt-16" id="properties">
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600">
              Discover our handpicked selection of amazing places to stay
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-300 h-64 rounded-2xl mb-4"></div>
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </section>

        <section className="mt-24 py-20 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 rounded-3xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white px-8">
            <div>
              <div className="text-6xl font-extrabold mb-3">2M+</div>
              <div className="text-blue-100 text-xl font-medium">Properties Worldwide</div>
            </div>
            <div>
              <div className="text-6xl font-extrabold mb-3">500K+</div>
              <div className="text-blue-100 text-xl font-medium">Happy Customers</div>
            </div>
            <div>
              <div className="text-6xl font-extrabold mb-3">4.9★</div>
              <div className="text-blue-100 text-xl font-medium">Average Rating</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}