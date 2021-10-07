import type { NextPage } from "next";
import { Drawer } from "../components/Drawer";
import { Header } from "../components/Header";
import { TodoView } from "../components/TodoView";
import { useDrawer } from "../context/DrawerContext";
import { useUpdateUserID } from "../context/UserContext";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const DrawerCon = useDrawer();
  const update = useUpdateUserID();

  return (
    <div className={`${styles.container} overflow-hidden`}>
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

export default Home;
