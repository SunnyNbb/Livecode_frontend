import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="w-full h-8 p-2 bg-gray-900 flex flex-row justify-center items-center font-light text-white">
      © 2026 Your Company Name. All rights reserved.
    </div>
  );
};

export default Footer;
