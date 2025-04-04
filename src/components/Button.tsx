// src/components/ui/Button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "success" | "decline";
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) => {
  const baseClasses = "px-4 py-2 rounded-normal font-bold transition"; // Base 8px (py-2 = 8px)
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-secondary",
    success: "bg-success text-white hover:bg-success-active",
    decline: "bg-decline text-white hover:bg-decline-active",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
};
