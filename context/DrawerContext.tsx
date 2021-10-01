import React, { createContext, useContext, useState } from "react";

const DrawerContext = createContext<boolean | null>(null);
const DrawerUpdateContext = createContext<any | null>(null);

export const DrawerProvider: React.FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  function ToggleDrawer() {
    setOpen(!isOpen);
  }

  return (
    <DrawerContext.Provider value={isOpen}>
      <DrawerUpdateContext.Provider value={ToggleDrawer}>
        {children}
      </DrawerUpdateContext.Provider>
    </DrawerContext.Provider>
  );
};

export function useDrawer() {
  return useContext(DrawerContext);
}

export function useDrawerUpdate() {
  return useContext(DrawerUpdateContext);
}
