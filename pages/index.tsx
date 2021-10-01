import type { NextPage } from "next";
import { useState } from "react";
import { Drawer } from "../components/Drawer";
import { Header } from "../components/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  console.log();
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.container} box-border `}>
      <Header />
      <div className="main flex">
        <Drawer IsOpen={open}></Drawer>
        <div className="m-10">hi</div>
      </div>
    </div>
  );
};

export default Home;
