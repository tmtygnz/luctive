import React, {
  Children,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from "react";
import { Spinner } from "./Spinner";

const buttonTypes = {
  green:
    "bg-green-normal py-1 px-3 hover:bg-green-hover active:bg-green-focus border border-green-stroke text-white",
  yellow:
    "bg-yellow-normal py-1 px-3 hover:bg-yellow-hover active:bg-yellow-focus border border-yellow-stroke text-white",
	ghost:"bg-transparent py-1 px-3 hover:bg-ghost-hover active:bg-ghost-focus text-black"
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  IsLoading?: boolean;
  IsDisabled?: boolean;
  Type?: keyof typeof buttonTypes;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  IsLoading,
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
      <span className={IsLoading ? "opacity-0" : "items-center"}>
        {children}
      </span>
      {IsLoading ? (
        <span className="absolute">
          <Spinner colorType={Type} />
        </span>
      ) : null}
    </button>
  );
};
