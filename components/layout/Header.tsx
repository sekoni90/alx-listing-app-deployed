// components/layout/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-indigo-600">AlxListing</div>
            <nav className="hidden md:flex space-x-3 text-sm text-gray-700">
              <a className="hover:text-indigo-600" href="#">
                Rooms
              </a>
              <a className="hover:text-indigo-600" href="#">
                Mansion
              </a>
              <a className="hover:text-indigo-600" href="#">
                Countryside
              </a>
              <a className="hover:text-indigo-600" href="#">
                Villas
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search location, property..."
                  className="w-56 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-sm px-3 py-1 border rounded-md hover:bg-indigo-50">
                Sign in
              </button>
              <button className="text-sm px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Sign up
              </button>
            </div>

            <div className="md:hidden">
              <button aria-label="open menu" className="p-2 rounded-md hover:bg-gray-100">
                <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;