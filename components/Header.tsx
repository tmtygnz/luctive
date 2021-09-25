import React from "react";
import { Input } from "./ui/Input";
import { Menu, MenuItem } from "./ui/Menu";
import { NavLink } from "./ui/NavLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./ui/Button";

export const Header = () => {
  return (
    <div className="px-2 py-2 bg-yellow-normal align-middle w-screen flex">
      <Menu label={<GiHamburgerMenu/>} className="mx-2 my-1">
				<MenuItem>Test</MenuItem>
			</Menu>
      <Input inputSize="sm" list="autocomplete" type="text" className="w-80" />
    </div>
  );
};
