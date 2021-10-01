import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const buttonTypes = {
  normal: "bg-black text-white border border-black hover:bg-black-hover ",
  outline:
    "bg-transparent text-black border border-black hover:bg-black hover:text-white ",
};

const paddingSizes = {
  lg: "px-10 py-5",
  normal: "px-6 py-2",
  small: "px-2 py-1",
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  IsDisabled?: boolean;
  IsDropdown?: boolean;
  Type?: keyof typeof buttonTypes;
  PaddingSize?: keyof typeof paddingSizes;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  IsDisabled,
  Type = "outline",
  PaddingSize = "small",
  className,
  ...props
}) => {
  console.log(Type);
  return (
    <button
      className={`${buttonTypes[Type]} 
			flex items-center justify-center ${paddingSizes[PaddingSize]} roundend-none
			${
        IsDisabled && "cursor-not-allowed"
      } ${className} transition ease-in-out duration-150`}
      {...props}
    >
      <span className="items-center">{children}</span>
    </button>
  );
};
