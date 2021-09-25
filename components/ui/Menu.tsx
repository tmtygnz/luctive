import React, {
  useState,
  useEffect,
  useRef,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";
import { Button } from "./Button";
import Link from "next/link";

export type MenuProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  label: React.ReactNode;
};

export const Menu: React.FC<MenuProps> = ({ children, label, ...props }) => {
  const [show, setShow] = useState(true);

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
      setShow(false);
    }
  };

  return (
    <div className="drop inline-block relative" ref={container} {...props}>
      <Button Type="ghost" onClick={() => setShow(!show)}>
        {label}
      </Button>
      {show && (
        <div
          className={`drop-items absolute 
					rounded border shadow-2xl transition duration-150 ease-in-out`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export const MenuItem: React.FC<any> = ({ children }) => {
  return (
    <div
      className="hover:bg-ghost-hover cursor-pointer  rounded 
			m-1 py-1 pr-20 pl-2 transition duration-150"
    >
      <Link href="#">{children}</Link>
    </div>
  );
};
