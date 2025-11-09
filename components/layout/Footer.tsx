// components/layout/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} AlxListing. All rights reserved.
          </div>
          <div className="flex space-x-4 text-sm text-gray-700">
            <a href="#" className="hover:text-indigo-600">
              About
            </a>
            <a href="#" className="hover:text-indigo-600">
              Contact
            </a>
            <a href="#" className="hover:text-indigo-600">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;