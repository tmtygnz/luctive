import React from "react";
import { useDrawer } from "../context/DrawerContext";

// Height for the drawer is in globals css

export const Drawer: React.FC = () => {
  const IsOpen = useDrawer();
  return (
    <div className="fixed">
      {IsOpen ? (
        <div
          className={`drawer w-72  bg-white border-r transition 
					duration-150 ease-in-out `}
        >
          <p>Test</p>
        </div>
      ) : null}
    </div>
  );
};
