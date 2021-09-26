import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export type DrawerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  isOpen: boolean;
	label: string
};

export const Drawer:React.FC<DrawerProps> = ({children,isOpen, label}) => {
  return (
    <div>
      {isOpen && (
        <div className="bg-gray-500 w-36 text-white h-screen">
					<p className="text-3xl py-3 px-2">{label}</p>
					<hr/>
					<div className="Contents pt-1">
						{children}
					</div>
        </div>
      )}
    </div>
  );
};
