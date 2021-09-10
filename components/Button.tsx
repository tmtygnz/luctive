import React, { Children } from "react";
import { Spinner } from "./Spinner";

const buttonTypes = {
  primary: "bg-blue-400 text-white p-3 hover:bg-blue-500",
	secondary: "border p-3 border-blue-400 text-blue-400"
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
    <button className={`${buttonTypes[Type]} rounded-xl shadow-md flex items-center 
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
