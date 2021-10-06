import Link from "next/link";
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
    label?: React.ReactNode;
    Icon?: JSX.IntrinsicAttributes;
    MenuPosition?: keyof typeof position;
  };

export type MenuItemProps = {
  Icon?: JSX.IntrinsicAttributes;
};

export type MenuItemLinkProps = {
  Icon?: JSX.IntrinsicAttributes;
  href: string;
};

const position = {
  left: "right-0",
  right: "left-0",
};

export const Menu: React.FC<MenuProps> = ({
  children,
  label,
  Icon,
  MenuPosition = "right",
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
    if (
      !container.current?.contains(event.target as Node) &&
      container.current
    ) {
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
        <ul
          className={`absolute border shadow
					${position[MenuPosition]} w-36 overflow-hidden bg-white`}
        >
          {children}
        </ul>
      )}
    </div>
  );
};

export const MenuItem: React.FC<MenuItemProps> = ({ children, Icon }) => {
  return (
    <li
      className="py-2 border hover:bg-black hover:text-white 
			transition duration-75 ease-in-out cursor-pointer"
    >
      <div className="ml-3 flex items-center">
        {Icon && <span className="mr-2">{Icon}</span>}
        {children}
      </div>
    </li>
  );
};

export const MenuLinkItem: React.FC<MenuItemLinkProps> = ({
  children,
  Icon,
  href,
}) => {
  return (
    <li
      className="py-2 border hover:bg-black hover:text-white 
			transition duration-75 ease-in-out cursor-pointer"
    >
      <Link href={href}>
        <div className="ml-3 flex items-center">
          {Icon && <span className="mr-2">{Icon}</span>}
          {children}
        </div>
      </Link>
    </li>
  );
};
