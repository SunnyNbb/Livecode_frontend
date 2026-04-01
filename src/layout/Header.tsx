import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="w-full h-10 p-2 bg-gray-900 flex flex-row justify-center items-center">
      <ol className="flex flex-row">
        <li></li>
        <li className="text-white font-nunito">Livecode</li>
        <li className="flex flex-row gap-2">
          <button className=" p-1 rounded  text-sm hover:cursor-pointer bg-green-500">Run</button>
          <button className=" p-1 rounded  text-sm hover:cursor-pointer bg-amber-500">Submit</button>
        </li>
      </ol>
    </div>
  );
};

export default Header;
