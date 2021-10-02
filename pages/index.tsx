import type { NextPage } from "next";
import { Drawer } from "../components/Drawer";
import { Header } from "../components/Header";
import { useDrawer } from "../context/DrawerContext";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const DrawerCon = useDrawer();

  return (
    <div className={`${styles.container} box-border `}>
      <Header />
      <div className="main flex">
        <Drawer></Drawer>
        <div className={`${DrawerCon ? "ml-80" : "ml-10"} mt-10`}>
          <div className="flex justify-center align-middle">hi</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
