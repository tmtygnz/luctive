import React, { useState } from "react";
import { Button } from "../Button";
import { MenuItem } from "./MenuItem";
import { Menu } from "./Menu";

export type MenuButtonProps = {
  label?: string;
  className?: string;
};

export const MenuButton: React.FC<MenuButtonProps> = ({
  children,
  label,
  className,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="ml-56">
      <Button onClick={() => setShow(!show)}>{label}</Button>
      {show ? <div>{children}</div> : null}
    </div>
  );
};
