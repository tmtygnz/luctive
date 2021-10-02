import React from "react";
import { useDrawer } from "../context/DrawerContext";

// Height for the drawer is in globals css

export const Drawer: React.FC = () => {
  const IsOpen = useDrawer();
  return (
    <div className="fixed">
      <div
        className={`drawer ${
          IsOpen ? "drawerOpen" : "drawerClose"
        }  bg-gray-50 border-r overflow-hidden`}
      >
        <div className="flex flex-wrap">
          <DrawerItem>Upcoming</DrawerItem>
          <DrawerItem>Today</DrawerItem>
          <DrawerItem>Urgent</DrawerItem>
        </div>
      </div>
    </div>
  );
};

export const DrawerItem: React.FC = ({ children }) => {
  return (
    <div
      className="hover:bg-black hover:text-white cursor-pointer w-full 
			p-5 border-b border-t transition duration-150 ease-in-out"
    >
      {children}
    </div>
  );
};
