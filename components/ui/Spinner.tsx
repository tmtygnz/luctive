import React, { DetailedHTMLProps, HTMLAttributes } from "react";

const size = {
  lg: "h-14 w-14",
  nm: "h-8 w-8",
  sm: "h-4 w-4",
};

export type SpinnerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  spinnerSize?: keyof typeof size;
};

export const Spinner: React.FC<SpinnerProps> = ({
  className,
  spinnerSize = "sm",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`animate-spin ${size[spinnerSize]}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22.9452 12C23.5277 12 24.0048 12.4732 23.9537 13.0535C23.7782 15.0452 23.107 16.9675 21.9942 18.642C20.6862 20.6102 18.8261 22.1484 16.6473 23.0636C14.4685 23.9788 12.068 24.2303 9.74683 23.7866C7.42566 23.3428 5.28718 22.2236 3.59959 20.5693C1.912 18.915 0.75045 16.7992 0.260612 14.4873C-0.229226 12.1754 -0.0255388 9.77039 0.846126 7.57382C1.71779 5.37724 3.21862 3.48694 5.16039 2.13999C6.8124 0.994044 8.72098 0.28479 10.7088 0.0696624C11.288 0.00698192 11.7705 0.474541 11.7821 1.05698V1.05698C11.7937 1.63943 11.3295 2.1152 10.7516 2.18873C9.17967 2.38874 7.67329 2.96436 6.36281 3.87341C4.76241 4.98356 3.52543 6.54154 2.80701 8.35195C2.08858 10.1624 1.9207 12.1446 2.32443 14.05C2.72815 15.9555 3.6855 17.6993 5.0764 19.0628C6.46731 20.4263 8.22984 21.3487 10.1429 21.7145C12.0561 22.0802 14.0346 21.8729 15.8303 21.1186C17.6261 20.3642 19.1591 19.0965 20.2372 17.4743C21.12 16.146 21.6655 14.6285 21.8342 13.0528C21.8962 12.4736 22.3626 12 22.9452 12V12Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="6.5"
          y1="1"
          x2="24"
          y2="5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C4C4C4" />
          <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
