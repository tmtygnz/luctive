import React, { createContext, useContext, useState } from "react";

const drawerContext = createContext<boolean | null>(null);
const drawerUpdateContext = createContext<any | null>(null);

export const DrawerProvider: React.FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const ToggleDrawer = () => {
    setOpen(!isOpen);
  };

  return (
    <drawerContext.Provider value={isOpen}>
      <drawerUpdateContext.Provider value={ToggleDrawer}>
        {children}
      </drawerUpdateContext.Provider>
    </drawerContext.Provider>
  );
};

export const useDrawer = () => {
  return useContext(drawerContext);
};

export const useDrawerUpdate = () => {
  return useContext(drawerUpdateContext);
};
