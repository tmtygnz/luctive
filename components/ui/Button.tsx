import React, {
  Children,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from "react";
import { Spinner } from "./Spinner";

const buttonTypes = {
  green:
    "bg-green-normal h-9 hover:bg-green-hover active:bg-green-focus border border-green-stroke text-white",
  yellow:
    "bg-yellow-normal h-9 hover:bg-yellow-hover active:bg-yellow-focus border border-yellow-stroke text-white",
	ghost:"bg-ghost-focus h-9  bg-opacity-0 hover:bg-opacity-30 active:bg-red-100 text-black"
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  IsDisabled?: boolean;
	IsDropdown?: boolean
  Type?: keyof typeof buttonTypes;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  IsDisabled,
  Type = "green",
  className,
  ...props
}) => {
  console.log(Type);
  return (
    <button
      className={`${buttonTypes[Type]} 
			rounded-sm flex items-center justify-center
			${IsDisabled && "cursor-not-allowed"} ${className} transition duration-150`}
      {...props}
    >
      <span className="items-center">
        {children}
      </span>
    </button>
  );
};
