import type { NextPage } from "next";
import { Drawer } from "../components/Drawer";
import { Header } from "../components/Header";
import { TodoView } from "../components/TodoView";
import { useDrawer } from "../context/DrawerContext";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const DrawerCon = useDrawer();

  return (
    <div className={`${styles.container} box-border `}>
      <Header />
      <div className="main withoutHeader">
        <Drawer></Drawer>
        <div
          className={`withoutHeader overflow-auto flex justify-center ${
            DrawerCon ? "drawerIsOpen" : "drawerIsClosed"
          }`}
        >
          <TodoView />
        </div>
      </div>
    </div>
  );
};

export default Home;
