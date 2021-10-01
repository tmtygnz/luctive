import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, ButtonProps } from "./Button";

export type MenuProps = ButtonProps &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    label: React.ReactNode;
    Icon?: JSX.IntrinsicAttributes;
  };

export type MenuItemProps = {
  Icon?: JSX.IntrinsicAttributes;
};

export const Menu: React.FC<MenuProps> = ({
  children,
  label,
  Icon,
  ...props
}) => {
  const [showOverlay, setShowOverlay] = useState(false);

  let container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", clickedOutside);
    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  });

  const clickedOutside = (event: MouseEvent) => {
    console.log(typeof event);
    if (
      !container.current?.contains(event.target as Node) &&
      container.current
    ) {
      console.log("false");
      setShowOverlay(false);
    }
  };

  return (
    <div className="relative inline-block" ref={container}>
      <Button {...props} onClick={() => setShowOverlay(!showOverlay)}>
        <div className="flex items-center">
          <span className="mr-2">{Icon}</span>
          {label}
        </div>
      </Button>
      {showOverlay && (
        <div
          className="absolute border shadow 
					right-0 w-36 bg-white"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export const MenuItem: React.FC<MenuItemProps> = ({ children, Icon }) => {
  return (
    <div
      className="py-2 border hover:bg-black hover:text-white 
			transition duration-150 ease-in-out cursor-pointer"
    >
      <div className="ml-3 flex items-center">
        {Icon && <span className="mr-2">{Icon}</span>}
        {children}
      </div>
    </div>
  );
};
