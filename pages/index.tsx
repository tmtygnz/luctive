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
      <div className="main">
        <Drawer></Drawer>
        <div
          className={`contentContainer ${
            DrawerCon ? "drawerIsOpen" : "drawerIsClosed"
          }  flex justify-center items-center`}
        >
          <TodoView />
        </div>
      </div>
    </div>
  );
};

export default Home;
