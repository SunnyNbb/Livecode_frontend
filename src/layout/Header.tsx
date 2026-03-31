import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="w-full h-8 p-2 bg-gray-900 flex flex-row justify-center items-center">
      <ol>
        <li className="text-white">Space</li>
      </ol>
    </div>
  );
};

export default Header;
