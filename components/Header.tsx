import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export const Header = () => {
  return (
    <div className="px-2 py-2 bg-yellow-normal flex items-center w-screen border">
      <Button className="mr-3">
        <GiHamburgerMenu />
      </Button>
      <Input placeholder="Search your space" />
    </div>
  );
};
