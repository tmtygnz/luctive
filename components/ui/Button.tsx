import React, { Children } from "react";
import { Spinner } from "./Spinner";

const buttonTypes = {
  primary:
    "bg-primary-normal py-2 px-6 hover:bg-primary-hover active:bg-primary-focus",
  secondary:
    "bg-gray-300 py-2 px-6 hover:bg-gray-400 active:bg-gray-600",
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
  Type = "secondary",
}) => {
  console.log(Type);
  return (
    <button
      className={`${buttonTypes[Type]} 
			rounded-md shadow-md text-white flex items-center justify-center
			${IsDisabled && "cursor-not-allowed"}`}
    >
      <span className={IsLoading ? "opacity-0" : "items-center"}>
        {children}
      </span>
      {IsLoading ? (
        <span className="absolute">
          <Spinner colorType={Type}/>
        </span>
      ) : null}
    </button>
  );
};
