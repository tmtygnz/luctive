import React, { useState } from "react";
import { Button } from "./Button";
import Link from "next/link";  

export type MenuProps = {
  label: string;
};

export const Menu: React.FC<MenuProps> = ({ children, label }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="drop inline-block relative" onBlur={() => setShow(false)}>
      <Button Type="ghost" onClick={() => setShow(!show)}>
        {label}
      </Button>
      <ul
        className={`drop-items absolute ${show ? "block" : "hidden"} 
			 rounded border shadow-2xl transition duration-150 ease-in-out absolute`}
      >
        {children}
      </ul>
    </div>
  );
};

export const MenuItem: React.FC<any> = ({ children }) => {
  return (
    <li
      className="hover:bg-ghost-hover cursor-pointer  rounded 
			m-1 py-1 pr-20 pl-2 transition duration-150"
    >
      <Link href="#">
				{children}
			</Link>
    </li>
  );
};
