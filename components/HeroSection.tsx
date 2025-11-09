// components/HeroSection.tsx
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen">
      <Image
        src="/assets/images/Frame 75.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Find your favorite place here!</h1>
          <p className="text-2xl">The best prices for over 2 million properties worldwide.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
