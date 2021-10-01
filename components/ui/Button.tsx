import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const buttonTypes = {
  normal: "bg-black text-white border border-black hover:bg-black-hover ",
  outline:
    "bg-transparent text-black border border-black hover:bg-black hover:text-white ",
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  IsDisabled?: boolean;
  IsDropdown?: boolean;
  Type?: keyof typeof buttonTypes;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  IsDisabled,
  Type = "outline",
  className,
  ...props
}) => {
  console.log(Type);
  return (
    <button
      className={`${buttonTypes[Type]} 
			flex items-center justify-center px-6 py-2 roundend-none
			${
        IsDisabled && "cursor-not-allowed"
      } ${className} transition ease-in-out duration-150`}
      {...props}
    >
      <span className="items-center">{children}</span>
    </button>
  );
};
