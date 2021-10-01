import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiSearchLine } from "react-icons/ri";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Menu, MenuItem } from "./ui/Menu";

export const Header = () => {
  return (
    <div className="px-2 py-2 bg-yellow-normal flex justify-between flex-shrink-0 flex-grow-0 items-center w-screen border">
      <div className="flex items-center">
        <Button className="mr-3">
          <GiHamburgerMenu />
        </Button>
        <Input placeholder="Search your space" icon={<RiSearchLine />} />
      </div>

      <div className="flex items-center">
        <Menu label="User Name" Type="outline" Icon={<AiOutlineUser />}>
          <MenuItem Icon={<AiOutlineUser />}>Settings</MenuItem>
          <MenuItem>Log out</MenuItem>
          <MenuItem>About</MenuItem>
        </Menu>
      </div>
    </div>
  );
};
