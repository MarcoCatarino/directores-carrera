import React from "react";

type FooterProps = {
  className?: string;
};

export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`${className} bg-secondary text-white py-4 text-center`}>
      <p className="text-sm">© 2025 Universidad Politecnica de Quintana Roo</p>
    </footer>
  );
};
