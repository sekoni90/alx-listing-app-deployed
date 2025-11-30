// components/layout/Header.tsx
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              AlxListing
            </span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-semibold text-lg transition-colors ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/rooms" 
              className={`font-semibold text-lg transition-colors ${
                isActive('/rooms') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Rooms
            </Link>
            <Link 
              href="/mansions" 
              className={`font-semibold text-lg transition-colors ${
                isActive('/mansions') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Mansions
            </Link>
            <Link 
              href="/villas" 
              className={`font-semibold text-lg transition-colors ${
                isActive('/villas') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Villas
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden lg:block">
              <div className="relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="search"
                  placeholder="Search destinations..."
                  className="w-64 pl-12 pr-4 py-3 bg-gray-100 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>
            </div>
            
            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <button 
                onClick={() => {
                  const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
                  if (searchInput) searchInput.focus();
                }}
                className="px-6 py-3 font-bold text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search</span>
              </button>
              <Link 
                href="/signin"
                className="px-8 py-3 font-bold bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Sign up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              aria-label="open menu" 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;