import React, { useState } from "react";

export type MenuProps = {
  label: string;
};

export const Menu: React.FC<MenuProps> = ({ children, label }) => {

  const [show, setShow] = useState(false);
  return (
    <div className="p-1 relative">
      <button
        onClick={() => setShow(!show)}
        className={`rounded-sm flex items-center justify-center transition duration-150 bg-transparent py-1 px-3 
				hover:bg-ghost-hover text-black ${show ? "bg-ghost-focus" : ""}`}
      >
        <span className="items-center">was</span>
      </button>
      {show ? (
        <div
          className="absolute mt-1 rounded top-10 w-36 overflow-hidden 
					transition duration-150 ease-in-out shadow-xl border"
        >
          {children}
        </div>
      ) : null}
    </div>
  );
};

export const MenuItem: React.FC<any> = ({ children }) => {
  return (
    <div className="hover:bg-ghost-hover cursor-pointer px-2 py-1 rounded m-2 block">
      {children}
    </div>
  );
};
