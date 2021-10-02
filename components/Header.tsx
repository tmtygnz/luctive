import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GiExitDoor, GiHamburgerMenu, GiSettingsKnobs } from "react-icons/gi";
import { RiSearchLine } from "react-icons/ri";
import { useDrawer, useDrawerUpdate } from "../context/DrawerContext";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Menu, MenuItem, MenuLinkItem } from "./ui/Menu";

export const Header = () => {
  const DrawerCon = useDrawer();
  const DrawerUpdateCon = useDrawerUpdate();

  return (
    <div className="px-2 py-2 bg-yellow-normal flex justify-between flex-shrink-0 flex-grow-0 items-center w-screen border ">
      <div className="flex items-center">
        <Button className="mr-3" onClick={() => DrawerUpdateCon()}>
          <GiHamburgerMenu />
        </Button>
        <Input placeholder="Search your space" icon={<RiSearchLine />} />
      </div>

      <div className="flex items-center">
        <Menu
          label="User Name"
          Type="outline"
          Icon={<AiOutlineUser />}
          MenuPosition="left"
        >
          <MenuItem Icon={<AiOutlineUser />}>Account</MenuItem>
          <MenuItem Icon={<GiSettingsKnobs />}>Settings</MenuItem>
          <MenuItem Icon={<GiExitDoor />}>Log out</MenuItem>
          <MenuLinkItem href="https://www.github.com">Third Party</MenuLinkItem>
        </Menu>
      </div>
    </div>
  );
};
