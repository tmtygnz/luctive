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

const size = {
  sm: "h-9 w-50",
  md: "h-7 w-5",
  lg: "h-5 w-5",
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  IsDisabled?: boolean;
  IsDropdown?: boolean;
  Type?: keyof typeof buttonTypes;
  PaddingSize?: keyof typeof paddingSizes;
  Size?: keyof typeof size;
  Icon?: JSX.IntrinsicAttributes;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  IsDisabled,
  Type = "outline",
  PaddingSize = "small",
  Size = "sm",
  className,
  Icon,
  ...props
}) => {
  return (
    <button
      className={`${buttonTypes[Type]} ${size[Size]}
			flex items-center justify-center ${paddingSizes[PaddingSize]} roundend-none
			${
        IsDisabled && "cursor-not-allowed"
      } ${className} transition ease-in-out duration-75`}
      {...props}
    >
      {Icon && <span>{Icon}</span>}
      <span className="items-center">{children}</span>
    </button>
  );
};
