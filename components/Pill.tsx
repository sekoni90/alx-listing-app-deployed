// components/Pill.tsx
import React from "react";

interface PillProps {
  label: string;
  active?: boolean;
  onClick?: (label: string) => void;
}

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={() => onClick && onClick(label)}
      className={`text-sm px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
        active 
          ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg transform scale-105" 
          : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-blue-400 hover:text-blue-600 hover:bg-white hover:shadow-md"
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;