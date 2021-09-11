import React, { Children } from "react";
import { Spinner } from "./Spinner";

const buttonTypes = {
  primary: "bg-accent-normal py-2 px-6 hover:bg-accent-hover active:bg-accent-focus",
};

export type ButtonProps = {
  IsLoading?: boolean;
  IsDisabled?: boolean;
  Type?: keyof typeof buttonTypes;
};


export const Button: React.FC<ButtonProps> = ({
  children,
  IsLoading,
  IsDisabled,
  Type = "primary",
}) => {
	console.log(Type);
  return (
    <button className={`${buttonTypes[Type]} rounded-md shadow-md text-white flex items-center 
		${IsDisabled && "cursor-not-allowed"}`}>
			
			{IsLoading ? <div className="mr-2">
				<Spinner></Spinner>
			</div>: null}

			<div>
				{children}
			</div>
    </button>
  );
};
