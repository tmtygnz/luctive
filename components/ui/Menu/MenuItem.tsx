import React from "react";
import Link from "next/link";

export const MenuItem: React.FC<any> = ({ children }) => {
  return (
    <Link href="#">
      <span className="p-1 cursor-pointer hover:bg-primary-normal rounded flex items-center">
				{children}
			</span>
    </Link>
  );
};
