import React from "react";
import { useDrawer } from "../context/DrawerContext";
import { Drawer } from "./Drawer";
import { Header } from "./Header";
import { TodoView } from "./TodoView";

export const Dashboard = () => {
  const DrawerCon = useDrawer();
  return (
    <div>
      <Header />
      <div className="main withoutHeader">
        <Drawer></Drawer>
        <div
          className={`withoutHeader overflow-y-auto overflow-x-hidden flex justify-center ${
            DrawerCon ? "drawerIsOpen" : "drawerIsClosed"
          }`}
        >
          <TodoView />
        </div>
      </div>
    </div>
  );
};
