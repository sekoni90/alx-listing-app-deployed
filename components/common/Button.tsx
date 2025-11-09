import React from "react";
import type { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-block px-4 py-2 rounded-md shadow-sm focus:outline-none disabled:opacity-60"
    >
      {label}
    </button>
  );
};

export default Button;