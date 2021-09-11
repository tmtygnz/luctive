import React from "react";

const size = {
	sm: "h-1 w-1",
	md: "h-3 w-3",
	lg: "h-5 w-5",
}

export type SpinnerProps = {
	spinnerSize?: keyof typeof size
}

export const Spinner:React.FC<SpinnerProps> = ({
	spinnerSize = "lg"
}) => {
  return (
    <svg
      className={`animate-spin ${size[spinnerSize]}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M49 25H50C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25H1C1 11.7452 11.7452 1 25 1C38.2548 1 49 11.7452 49 25Z"
        fill="currentColor"
      />
    </svg>
  );
};
