import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

const size = {
  sm: "h-9 w-5",
  md: "h-7 w-5",
  lg: "h-5 w-5",
};

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  inputSize?: keyof typeof size;
  placeholder?: string;
  type?: string;
  icon?: JSX.IntrinsicAttributes;
};

export const Input: React.FC<InputProps> = ({
  inputSize = "sm",
  className = "",
  placeholder = "",
  type = "",
  icon,
  ...props
}) => {
  return (
    <div
      className="input-container border-box border 
		 inline-flex items-center rounded k"
      aria-keyshortcuts="f"
    >
      {icon && <span className="pl-3">{icon}</span>}
      <input
        className={`${size[inputSize]} focus:outline-none  px-3
			${className}`}
        placeholder={placeholder}
        type={type}
        {...props}
      />
    </div>
  );
};
