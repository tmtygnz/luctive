import React, { useState } from "react";
import { Button } from "../Button";
import { MenuItem } from "./MenuItem";
import { Menu } from "./Menu";

export type MenuButtonProps = {
	label?: string,
}

export const MenuButton:React.FC<MenuButtonProps> = ({children, label}) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button onClick={() => setShow(!show)}>
        {label}
      </Button>
			{show ? (
				{children}
        ) : null}
    </div>
  );
};
