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
      className={`text-sm px-3 py-1 rounded-full border ${
        active ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-gray-700"
      } hover:shadow-sm`}
    >
      {label}
    </button>
  );
};

export default Pill;