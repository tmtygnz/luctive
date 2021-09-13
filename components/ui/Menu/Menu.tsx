import React from "react";

export const Menu: React.FC<any> = ({ children }) => {
  return (
    <div
      className="absolute rounded top-10 w-20 overflow-hidden 
			transition duration-150 ease-in-out bg-gray-600 p-1"
    >
      {children}
    </div>
  );
};
