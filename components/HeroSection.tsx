// components/HeroSection.tsx
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-24 md:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTEwIDBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-6 inline-block">
            <span className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30">
              ✨ Welcome to AlxListing
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Find Your Perfect
            <span className="block mt-2 text-yellow-300">
              Dream Destination
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover amazing properties at exclusive prices. Over 2 million listings worldwide waiting for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link href="/#properties" className="px-10 py-4 bg-white text-blue-700 hover:bg-blue-50 text-lg font-bold rounded-xl shadow-2xl transform transition hover:scale-105">
              Explore Properties
            </Link>
            <Link href="/about" className="px-10 py-4 bg-transparent hover:bg-white/10 text-white text-lg font-bold rounded-xl border-2 border-white transition">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
