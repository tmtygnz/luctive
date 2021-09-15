import React, { useState } from "react";
import { Button } from "./Button";

export type MenuProps = {
  label: string;
};

export const Menu: React.FC<MenuProps> = ({ children, label }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="p-1">
      <Button onClick={() => setShow(!show)} Type="secondary">{label}</Button>
      {show ? (
        <div
          className="absolute rounded top-10 w-36 overflow-hidden 
					transition duration-150 ease-in-out bg-gray-500 border border-gray-400"
        >
          {children}
        </div>
      ) : null}
    </div>
  );
};

export const MenuItem: React.FC<any> = ({children}) => {
  return (
	<div className="hover:bg-gray-400 cursor-pointer px-2 py-1">
		{children}
	</div>
	);
};
